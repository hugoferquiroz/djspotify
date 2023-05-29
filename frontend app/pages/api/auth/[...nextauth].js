import spotifyApi, { LOGIN_URL } from "@/lib/spotify"
import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"

async function refreshAccessToken(token) { 
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
    console.log("Refreshed access token", refreshedToken);

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: refreshedToken.expires_in * 1000 + Date.now(), // = 1 hour as 3600 return from spotify API
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    }


  } catch (error) {
    console.log("Error refreshing access token", error);
    return {
      ...token,
      error: 'RefreshAccessTokenError'
    }
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
      authorization: LOGIN_URL
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      console.log('JWT');
      if(account){
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.username = account.providerAccountId
        token.accessTokenExpires = account.expires_at * 1000
        return token;
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires){
        console.log("Existing access token is valid");
        return token;
      }

      // Access token has expired, so we need to refresh it
      console.log("Access token has expired, refreshing it now");
      return await refreshAccessToken(token);

    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      console.log("Session", token.accessToken)
      return session;
    }
  },
});
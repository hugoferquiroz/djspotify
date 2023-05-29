import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Token will exist if the user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  
  const { pathname } = req.nextUrl;
  
  // Allow the requests if the following is true...
  // Its a request for next-auth session & provider fetching
  // the token exits

  if (pathname.startsWith('/api/auth') || pathname.startsWith('/_next') || token) {
    return NextResponse.next();
  }

  // Redirect to login page if they don't have the token AND requesting a protected route
  if(!token && !pathname.startsWith('/login')){
    return NextResponse.redirect(new URL('/login', req.url));
  }
  
}
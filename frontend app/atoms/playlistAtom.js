const { atom } = require("recoil");

export const playlistState = atom({
  key: "playlistAtomState",
  default: null
})

export const toptrackState = atom({
    key: "toptrackAtomState",
    default: null
})

export const playlistIdState = atom({
  key: 'playlistIdState',
  default: null
})

export const tracksState = atom({
  key: "tracksAtomState",
  default: null
})
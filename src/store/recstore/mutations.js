/* eslint-disable eqeqeq */
export function signup (state, user) {
  const t = {
    username: user.username,
    email: user.email,
    password: user.password
  }
  state.users.push(t)
}
export function login (state, userindex) {
  state.suser = state.users[userindex]
  state.logged = true
}
export function addsh (state, ingr) {
  const ting = { name: ingr.name, quantity: ingr.quantity }
  const tting = state.shopinglist.findIndex(element => element.name == ting.name)

  state.t = tting
  if (tting == -1) {
    state.shopinglist.push(ting)
  } else {
    state.shopinglist[tting].quantity += ting.quantity
  }
}
export function delrec (state, n) {
  state.recipes.splice(n, 1)
}
export function addrecipe (state, rec) {
  const trec = {
    name: rec.name,
    img: rec.img,
    desc: rec.desc,
    ings: rec.ings

  }
  state.recipes.push(trec)
}
export function edrec (state, re) {
  state.recipes[re.reindex].name = re.name
  state.recipes[re.reindex].desc = re.desc
  state.recipes[re.reindex].ings = re.ings
}
export function updatelist (state, recin) {
  state.shopinglist[recin.in].quantity = recin.n
}

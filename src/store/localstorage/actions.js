export function signup (context, users) {
  context.commit('signup', users)
}
export function login (context, userindex) {
  context.commit('login', userindex)
}

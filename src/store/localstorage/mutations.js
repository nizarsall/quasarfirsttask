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

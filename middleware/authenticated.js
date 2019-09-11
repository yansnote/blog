export default function ({ store, route, redirect }) {
  const user = store.state.users.user
  const blockedRoute = /\/admin\/*/g
  const homeRoute = '/'

  if (!user && route.path.match(blockedRoute)) {
    redirect('/login')
  }

  if (user && route.path === homeRoute) {
    redirect('/admin/notes')
  }
}

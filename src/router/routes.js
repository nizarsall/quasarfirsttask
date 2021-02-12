const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/login.vue') },
      { path: '/signup', component: () => import('pages/signup.vue') },
      { path: '/recipes', component: () => import('pages/recipes.vue') },
      { path: '/addRecipe', component: () => import('pages/addRecipe.vue') },
      { path: '/editRecipe/:id', component: () => import('pages/editRecipe.vue'), props: true }
    ],
    redirect: '/recipes'
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

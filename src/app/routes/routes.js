export default [
  {
    path: "/",
    component: User
  },
  {
    path: "/user",
    component: AppContainer,
    routes: [
      {
        path: "/user/allUsers",
        component: SearchPageContainer
      },
      {
        path: "/user/:userId",
        component: SearchPageContainer
      }
    ]
  },
  {
    path: "/*",
    component: NotFoundPageContainer
  }
];

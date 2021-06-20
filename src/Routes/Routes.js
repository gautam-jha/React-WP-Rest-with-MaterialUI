import { Home, Page, Login, SignUp, ResetPassword, Profile } from "../Pages";
import { route } from "../Helpers/Navigation";

const Errors = () => {
  return "404 Error";
};
const Users = [
  {
    name: "profile",
    path: "/profile",
    component: Profile,
  },
].map((route) => {
  route.name = `user.${route.name}`;
  route.path = `/user${route.path}`;
  route.auth = true;

  return route;
});

const dPages = [
  {
    name: "Page",
    path: "/page/:slug",
    component: Page,
  },
].map((route) => {
  route.name = `dPages.${route.name}`;
  route.path = `${route.path}`;
  route.auth = false;
  return route;
});

const pages = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },

  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "signup",
    path: "/signup",
    component: SignUp,
  },
  {
    name: "reset",
    path: "/login/reset",
    component: ResetPassword,
  },
].map((route) => {
  route.name = `pages.${route.name}`;
  route.path = `${route.path}`;
  route.auth = false;

  return route;
});

var errors = [
  {
    name: "not-found",
    component: Errors,
  },
].map((route) => {
  route.name = `errors.${route.name}`;
  //route.path = `${route.path}`;

  return route;
});
export default [...Users, ...pages, ...dPages, ...errors].map((route) => {
  route.name = `${route.name}`;
  // route.auth = true;

  return route;
});

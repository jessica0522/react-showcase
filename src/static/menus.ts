interface MenuItem {
  name: string;
  to: string;
}
const menus: MenuItem[] = [
  { name: "Home", to: "/" },
  { name: "Posts", to: "/posts" },
  { name: "Database", to: "/" },
];

export { MenuItem, menus };

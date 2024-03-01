interface MenuItem {
  name: string;
  to: string;
}
const menus: MenuItem[] = [
  { name: "Home", to: "/" },
  { name: "Posts", to: "/" },
  { name: "Database", to: "/" },
];

export { MenuItem, menus };

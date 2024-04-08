export interface MenuItem {
  name: string;
  to: string;
}
export const menus: MenuItem[] = [
  { name: "Home", to: "/" },
  { name: "Posts", to: "/posts" },
  { name: "Database", to: "/database" },
];

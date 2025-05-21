export type NavMenuItems = (typeof navMenuItems)[0];

export const navMenuItems = [
  {
    label: "Index",
    icon: "LayoutDashboard",
    onClick: "/",
    type: "item",
  },
  {
    type: "divider",
  },
  {
    label: "Another Page",
    icon: "ArrowRightLeft",
    onClick: "/another-page",
    type: "item",
  },
];

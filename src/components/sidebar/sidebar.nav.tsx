import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ArrowRightLeft,
  BanknoteArrowDown,
  Receipt,
  Wallet,
  CircleDollarSign,
  Building2,
  BookUser,
  X,
  LogOut,
} from "lucide-react";

import { SidebarDivider } from "./sidebar.divider";
import { SidebarButton } from "./sidebar.button";

import { NavMenuItems } from "../../config/site";

interface SidebarNavProps {
  navMenuItems: NavMenuItems[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const SidebarNav = ({
  navMenuItems,
  isOpen,
  setIsOpen,
}: SidebarNavProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const iconMap = {
    LayoutDashboard,
    ArrowRightLeft,
    BanknoteArrowDown,
    Receipt,
    Wallet,
    CircleDollarSign,
    Building2,
    BookUser,
    X,
    LogOut,
  };

  return (
    <>
      <nav className="flex-1 flex flex-col gap-2 w-full overflow-y-auto overflow-x-hidden touch-pan-y">
        {navMenuItems.map((item, idx) => {
          if (item.type === "divider") {
            return <SidebarDivider key={"divider-" + idx} />;
          }
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          // Determine if this item is active
          const isActive = item.onClick && location.pathname === item.onClick;

          return (
            <SidebarButton
              key={item.label ?? idx}
              icon={Icon ? <Icon size={24} /> : null}
              isActive={!!isActive}
              isOpen={isOpen}
              label={item.label ?? ""}
              onClick={() => {
                if (item.onClick) navigate(item.onClick);
                setIsOpen(false);
              }}
            />
          );
        })}
      </nav>
    </>
  );
};

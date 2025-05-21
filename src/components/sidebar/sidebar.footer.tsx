import { LogOut } from "lucide-react";

import { SidebarButton } from "./sidebar.button";

import { ThemeSwitch } from "@/components/theme-switch";

interface SidebarFooterProps {
  onClick?: () => void;
  isOpen: boolean;
}

export const SidebarFooter = ({ onClick, isOpen }: SidebarFooterProps) => (
  <div className="flex flex-col items-center w-full gap-2 mt-auto">
    <SidebarButton
      className=""
      icon={<LogOut size={24} />}
      isOpen={isOpen}
      label={"Logout"}
      onClick={onClick}
    />

    <ThemeSwitch className="mb-4 mr-3" />
  </div>
);

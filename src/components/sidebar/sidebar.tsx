import { useNavigate } from "react-router-dom";

import { Logo } from "../icons";

import { SidebarContainer } from "./sidebar.container";
import { SidebarHeader } from "./sidebar.header";
import { SidebarFooter } from "./sidebar.footer";
import { SidebarNav } from "./sidebar.nav";

import { navMenuItems } from "@/config/site";
import { useAppStore } from "@/store/appStore";

export default function Sidebar() {
  const navigate = useNavigate();
  const isOpen = useAppStore((state) => state.sidebarOpen);
  const setIsOpen = useAppStore((state) => state.setSidebarOpen);

  const handleLogoClick = () => {
    if (isOpen) {
      navigate("/");
    }
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader
        isOpen={isOpen}
        logo={<Logo />}
        title="App Name"
        onClick={handleLogoClick}
        onClose={() => setIsOpen(false)}
      />

      <SidebarNav
        isOpen={isOpen}
        navMenuItems={navMenuItems}
        setIsOpen={setIsOpen}
      />
      <SidebarFooter
        isOpen={isOpen}
        onClick={() => {
          navigate("/login");
          setIsOpen(false);
        }}
      />
    </SidebarContainer>
  );
}

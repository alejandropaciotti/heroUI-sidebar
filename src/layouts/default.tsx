import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";

import Sidebar from "@/components/sidebar/sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const hideSidebar = location.pathname === "/login";

  return (
    <>
      {!hideSidebar && <Sidebar />}
      <div className="relative flex flex-row h-screen">
        <div className="flex flex-col flex-1 h-full">
          <ToastContainer
            hideProgressBar
            className="z-50"
            position="bottom-right"
          />
          <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
            {children}
          </main>
          <footer className="w-full flex items-center justify-center py-3" />
        </div>
      </div>
    </>
  );
}

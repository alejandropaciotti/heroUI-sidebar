interface SidebarProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
}

export function SidebarContainer({
  isOpen,
  children,
  className,
}: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-white dark:bg-zinc-900 shadow transition-all duration-300 z-30 flex flex-col items-stretch ${isOpen ? "w-64" : "w-16"} ${className}`}
    >
      {children}
    </aside>
  );
}

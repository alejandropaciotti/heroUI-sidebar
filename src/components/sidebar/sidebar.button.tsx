interface SidebarButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  isActive?: boolean;
  isOpen: boolean;
  className?: string;
}

export const SidebarButton = ({
  icon,
  label,
  onClick,
  isActive = false,
  isOpen,
  className = "",
}: SidebarButtonProps) => {
  return (
    <button
      className={`flex flex-row items-center w-full h-12 ${className} hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors ${isActive ? "bg-zinc-100 dark:bg-zinc-800 font-semibold" : ""}`}
      onClick={onClick}
    >
      <span
        className={`flex items-center transition-all duration-200 w-12 pl-4 ${isActive ? "text-blue-600" : "text-inherit"}`}
      >
        {icon}
      </span>
      <span
        className={`text-sm transition-opacity duration-100 ${isOpen ? `opacity-100 ml-2 ${isActive ? "text-blue-600" : ""}` : "opacity-0 pointer-events-none select-none ml-0"}`}
      >
        {label}
      </span>
    </button>
  );
};

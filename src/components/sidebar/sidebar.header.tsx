import { X } from "lucide-react";

interface SidebarHeaderProps {
  logo?: React.ReactNode;
  title: string;
  onClick?: () => void;
  onClose?: () => void;
  isOpen: boolean;
  className?: string;
}

export const SidebarHeader = ({
  logo,
  title,
  onClick,
  onClose,
  isOpen,
  className,
}: SidebarHeaderProps) => (
  <div
    className={`flex justify-between w-full pt-4 pl-3 items-center mb-6 pr-4 ${className}`}
  >
    <button onClick={onClick}>
      {logo}
      {isOpen ? <p className="font-bold text-inherit">{title}</p> : null}
    </button>
    {isOpen ? (
      <button>
        <X
          className="text-foreground transition-colors"
          size={18}
          onClick={onClose}
        />
      </button>
    ) : null}
  </div>
);

import { Link, useLocation } from "react-router-dom";
import { Home, Image, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Главная', icon: <Home className="h-5 w-5" /> },
    { path: '/gallery', label: 'Фото', icon: <Image className="h-5 w-5" /> },
    { path: '/messages', label: 'Поздравления', icon: <MessageSquare className="h-5 w-5" /> },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 py-2 px-4 bg-card/80 backdrop-blur-md rounded-full shadow-lg border border-border z-50">
      <ul className="flex space-x-2">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={cn(
                "flex flex-col items-center px-4 py-2 rounded-full transition-colors",
                location.pathname === item.path
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
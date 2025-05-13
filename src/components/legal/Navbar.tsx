
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 font-bold text-blue-900">
          <Icon name="Scale" className="h-6 w-6 text-blue-900" />
          <span className="text-xl tracking-tight">ПравоОнлайн</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-sm font-medium hover:text-blue-700">Услуги</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-blue-700">Как мы работаем</a>
          <a href="#lawyers" className="text-sm font-medium hover:text-blue-700">Юристы</a>
          <a href="#reviews" className="text-sm font-medium hover:text-blue-700">Отзывы</a>
          <a href="#faq" className="text-sm font-medium hover:text-blue-700">Вопросы</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:88001234567" className="text-sm font-medium text-blue-900 md:text-base">
            8 (800) 123-45-67
          </a>
          <Button>Заказать звонок</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-white">
              <Icon name="Scale" className="h-6 w-6" />
              <span className="text-xl font-bold">ПравоОнлайн</span>
            </div>
            <p className="mt-4 text-sm">
              Профессиональная юридическая помощь онлайн 24/7. Консультации и документы в кратчайшие сроки.
            </p>
          </div>

          <FooterLinks
            title="Услуги"
            links={[
              { text: "Онлайн-консультации", href: "#" },
              { text: "Подготовка документов", href: "#" },
              { text: "Семейные споры", href: "#" },
              { text: "Жилищные вопросы", href: "#" },
              { text: "Наследственные дела", href: "#" },
            ]}
          />

          <FooterLinks
            title="Компания"
            links={[
              { text: "О нас", href: "#" },
              { text: "Юристы", href: "#" },
              { text: "Отзывы", href: "#" },
              { text: "Блог", href: "#" },
              { text: "Контакты", href: "#" },
            ]}
          />

          <div>
            <h3 className="mb-4 font-semibold text-white">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Phone" className="h-4 w-4" />
                <a href="tel:88001234567" className="hover:text-white">8 (800) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="h-4 w-4" />
                <a href="mailto:info@pravo-online.ru" className="hover:text-white">info@pravo-online.ru</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MessageCircle" className="h-4 w-4" />
                <a href="#" className="hover:text-white">Онлайн-чат</a>
              </li>
            </ul>
            <div className="mt-4 flex gap-4">
              <SocialButton icon="MessageSquare" />
              <SocialButton icon="Send" />
              <SocialButton icon="Mail" />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm">
          <p>© 2025 ПравоОнлайн. Все права защищены.</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="#" className="hover:text-white">Публичная оферта</a>
            <a href="#" className="hover:text-white">Политика конфиденциальности</a>
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
            <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Mastercard-logo.svg" alt="Mastercard" />
            <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/b/b9/MIR-logo.svg" alt="Мир" />
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinksProps {
  title: string;
  links: { text: string; href: string }[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => (
  <div>
    <h3 className="mb-4 font-semibold text-white">{title}</h3>
    <ul className="space-y-2 text-sm">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="hover:text-white">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialButton = ({ icon }: { icon: string }) => (
  <a href="#" className="rounded-full bg-slate-800 p-2 hover:bg-blue-800">
    <Icon name={icon} className="h-5 w-5" />
  </a>
);

const PaymentIcon = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="h-6 w-10 object-contain" />
);

export default Footer;

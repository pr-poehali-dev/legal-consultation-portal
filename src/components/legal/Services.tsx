
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

// Интерфейсы для типизации
interface ProcessStepProps {
  icon: string;
  title: string;
  description: string;
}

interface ConsultationCardProps {
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  features: string[];
  featured?: boolean;
  buttonText?: string;
}

interface DocumentItemProps {
  name: string;
  price: string;
}

interface DocumentCategoryCardProps {
  icon: string;
  title: string;
  items: DocumentItemProps[];
}

// Компонент шага процесса
const ProcessStep = ({ icon, title, description }: ProcessStepProps) => (
  <div className="text-center">
    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900">
      <Icon name={icon} className="h-6 w-6" />
    </div>
    <h4 className="mt-2 font-medium">{title}</h4>
    <p className="mt-1 text-sm text-slate-600">
      {description}
    </p>
  </div>
);

// Компонент карточки консультации
const ConsultationCard = ({ 
  title, 
  description, 
  price, 
  oldPrice, 
  features, 
  featured = false,
  buttonText = "Записаться" 
}: ConsultationCardProps) => (
  <Card className={featured ? "border-amber-500 shadow-lg" : ""}>
    <CardHeader>
      {featured && (
        <div className="w-full rounded bg-amber-500 py-1 text-center text-xs font-semibold text-white">
          Популярный выбор
        </div>
      )}
      <CardTitle className={featured ? "mt-3" : ""}>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-3xl font-bold">{price}</p>
      {oldPrice && <p className="text-sm text-slate-500 line-through">{oldPrice}</p>}
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Icon name="Check" className="h-4 w-4 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button className="w-full">{buttonText}</Button>
    </CardFooter>
  </Card>
);

// Компонент карточки категории документов
const DocumentCategoryCard = ({ 
  icon, 
  title, 
  items 
}: DocumentCategoryCardProps) => (
  <Card>
    <CardHeader>
      <div className="flex items-center justify-center p-2">
        <Icon name={icon} className="h-10 w-10 text-blue-900" />
      </div>
      <CardTitle className="text-center">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-between">
            <span className="text-sm">{item.name}</span>
            <span className="font-medium">{item.price}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button className="w-full">Заказать документ</Button>
    </CardFooter>
  </Card>
);

// Компонент блока "Как это работает"
const HowItWorksBlock = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-10 rounded-lg bg-slate-50 p-6">
    <h3 className="text-lg font-semibold">{title}</h3>
    <div className="mt-4 grid gap-6 md:grid-cols-4">
      {children}
    </div>
  </div>
);

// Компонент вкладки консультаций
const ConsultationsTab = () => (
  <>
    <div className="grid gap-6 md:grid-cols-3">
      <ConsultationCard 
        title="Экспресс-консультация"
        description="30 минут с юристом"
        price="1 500 ₽"
        features={[
          "Оперативный анализ ситуации",
          "Рекомендации по первым шагам",
          "Консультация в Zoom"
        ]}
      />

      <ConsultationCard 
        title="Полный разбор ситуации"
        description="60 минут с юристом"
        price="3 000 ₽"
        featured={true}
        features={[
          "Детальный анализ документов",
          "Пошаговый план действий",
          "Консультация в Zoom",
          "Письменные рекомендации"
        ]}
      />

      <ConsultationCard 
        title="Пакет из 3 консультаций"
        description="Выгода 15%"
        price="7 500 ₽"
        oldPrice="8 850 ₽"
        features={[
          "3 консультации по 60 минут",
          "Приоритетная запись",
          "Доступ к шаблонам документов"
        ]}
        buttonText="Заказать пакет"
      />
    </div>

    <HowItWorksBlock title="Как это работает:">
      <ProcessStep 
        icon="MousePointerClick" 
        title="Выбираете тему" 
        description="Укажите тему и предпочтительное время" 
      />
      <ProcessStep 
        icon="CreditCard" 
        title="Оплачиваете" 
        description="Безопасная онлайн-оплата картой" 
      />
      <ProcessStep 
        icon="Mail" 
        title="Получаете ссылку" 
        description="Ссылка на Zoom-встречу и календарь" 
      />
      <ProcessStep 
        icon="Video" 
        title="Консультируетесь" 
        description="В удобное время в Zoom с юристом" 
      />
    </HowItWorksBlock>
  </>
);

// Компонент вкладки документов
const DocumentsTab = () => (
  <>
    <div className="grid gap-6 md:grid-cols-3">
      <DocumentCategoryCard 
        icon="Users"
        title="Семейное право"
        items={[
          { name: "Брачный договор", price: "от 5 000 ₽" },
          { name: "Соглашение о детях", price: "от 4 000 ₽" },
          { name: "Раздел имущества", price: "от 6 000 ₽" }
        ]}
      />
      
      <DocumentCategoryCard 
        icon="Home"
        title="Жилищные споры"
        items={[
          { name: "Претензия к УК", price: "от 3 000 ₽" },
          { name: "Договор аренды", price: "от 3 500 ₽" },
          { name: "Иск по ЖКХ", price: "от 7 000 ₽" }
        ]}
      />
      
      <DocumentCategoryCard 
        icon="Scroll"
        title="Наследство"
        items={[
          { name: "Завещание", price: "от 4 500 ₽" },
          { name: "Иск об оспаривании", price: "от 9 000 ₽" },
          { name: "Сопровождение", price: "от 15 000 ₽" }
        ]}
      />
    </div>

    <HowItWorksBlock title="Процесс заказа документа:">
      <ProcessStep 
        icon="FileText" 
        title="Выбор типа документа" 
        description="Выберите нужный вам документ" 
      />
      <ProcessStep 
        icon="ClipboardList" 
        title="Заполнение анкеты" 
        description="Заполните онлайн-форму с деталями" 
      />
      <ProcessStep 
        icon="CreditCard" 
        title="Оплата" 
        description="Безопасная оплата онлайн" 
      />
      <ProcessStep 
        icon="Send" 
        title="Получение" 
        description="Документ на email + звонок юриста" 
      />
    </HowItWorksBlock>
  </>
);

// Основной компонент Services
const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Наши услуги</h2>
          <p className="mt-4 text-slate-600">
            Получите профессиональную юридическую помощь быстро и удобно
          </p>
        </div>

        <Tabs defaultValue="consultations" className="mx-auto max-w-4xl">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="consultations">Онлайн-консультации</TabsTrigger>
            <TabsTrigger value="documents">Подготовка документов</TabsTrigger>
          </TabsList>
          
          <TabsContent value="consultations" className="mt-6">
            <ConsultationsTab />
          </TabsContent>
          
          <TabsContent value="documents" className="mt-6">
            <DocumentsTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;

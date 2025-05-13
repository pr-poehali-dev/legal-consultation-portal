
import ProcessStep from "./ProcessStep";
import DocumentCategoryCard from "./DocumentCategoryCard";
import HowItWorksBlock from "./HowItWorksBlock";

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

export default DocumentsTab;

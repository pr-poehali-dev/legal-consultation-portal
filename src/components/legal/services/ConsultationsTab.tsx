
import ProcessStep from "./ProcessStep";
import ConsultationCard from "./ConsultationCard";
import HowItWorksBlock from "./HowItWorksBlock";

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

export default ConsultationsTab;

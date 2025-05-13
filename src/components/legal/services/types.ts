
// Типы для компонентов раздела услуг

// Шаг процесса
export interface ProcessStepProps {
  icon: string;
  title: string;
  description: string;
}

// Карточка консультации
export interface ConsultationCardProps {
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  features: string[];
  featured?: boolean;
  buttonText?: string;
}

// Элемент документа
export interface DocumentItemProps {
  name: string;
  price: string;
}

// Карточка категории документов
export interface DocumentCategoryCardProps {
  icon: string;
  title: string;
  items: DocumentItemProps[];
}

// Общие типы для блоков
export interface HowItWorksBlockProps {
  title: string;
  children: React.ReactNode;
}


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ConsultationsTab from "./services/ConsultationsTab";
import DocumentsTab from "./services/DocumentsTab";

/**
 * Компонент Services отображает раздел услуг с двумя вкладками: 
 * онлайн-консультации и подготовка документов
 */
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

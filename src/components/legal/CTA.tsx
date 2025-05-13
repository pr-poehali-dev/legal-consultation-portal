
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="bg-blue-900 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Решите юридический вопрос прямо сейчас</h2>
          <p className="mt-4 text-blue-100">
            Не откладывайте решение важных вопросов. Наши юристы готовы помочь вам онлайн в любое время.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900">
              Заказать документ
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

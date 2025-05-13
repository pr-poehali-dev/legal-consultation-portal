
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Как мы работаем</h2>
          <p className="mt-4 text-slate-600">
            Простой и удобный процесс получения юридической помощи
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-12 top-0 hidden h-full w-0.5 bg-blue-200 md:block"></div>
          
          <div className="grid gap-12">
            <ProcessStep 
              number={1} 
              title="Вы оставляете заявку" 
              description="Заполните короткую форму на сайте, указав свои контактные данные и вид требуемой помощи. Это займет всего 1 минуту." 
            />
            
            <ProcessStep 
              number={2} 
              title="Юрист связывается с вами" 
              description="В течение 15 минут с вами свяжется профильный юрист с опытом в нужной вам отрасли права для уточнения деталей." 
            />
            
            <ProcessStep 
              number={3} 
              title="Уточняем детали" 
              description="Юрист задаст необходимые вопросы, уточнит обстоятельства и соберет информацию для подготовки решения вашей проблемы." 
            />
            
            <ProcessStep 
              number={4} 
              title="Готовим решение" 
              description="В течение 1-24 часов (в зависимости от сложности) вы получаете готовое юридическое решение - документ или консультацию." 
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Guarantee 
            icon="CheckCircle"
            title="Гарантия качества"
            description="Если документ не примут в государственных органах — бесплатно исправим все выявленные недочеты и предоставим обновленную версию."
          />

          <Guarantee 
            icon="Shield"
            title="Конфиденциальность"
            description="Гарантируем полную конфиденциальность ваших данных в соответствии с Федеральным законом №152-ФЗ "О персональных данных"."
          />
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ number, title, description }: { number: number; title: string; description: string }) => (
  <div className="relative md:grid md:grid-cols-8 md:gap-6">
    <div className="md:col-span-3">
      <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-blue-900 text-3xl font-bold text-white shadow-lg md:absolute md:left-0 md:top-0 md:-translate-x-1/2">
        {number}
      </div>
    </div>
    <div className="md:col-span-5">
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-slate-600">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Guarantee = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="rounded-lg border bg-blue-50 p-6">
    <div className="flex items-start gap-4">
      <div className="rounded-full bg-blue-900 p-2 text-white">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-slate-600">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default HowItWorks;

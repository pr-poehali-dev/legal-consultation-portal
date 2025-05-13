
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="bg-slate-50 py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Частые вопросы</h2>
          <p className="mt-4 text-slate-600">
            Ответы на популярные вопросы наших клиентов
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <FAQItem 
            value="item-1"
            question="Как быстро я получу документ?"
            answer="Скорость подготовки документа зависит от его сложности. Простые документы (претензии, жалобы) готовы в течение 1-3 часов. Более сложные (исковые заявления, договоры) - от 12 до 24 часов. В экстренных случаях мы можем ускорить процесс, просто сообщите нам о срочности."
          />
          
          <FAQItem 
            value="item-2"
            question="Можно ли получить консультацию в нерабочее время?"
            answer="Да, мы работаем в режиме 24/7. Вы можете заказать консультацию на любое удобное время, включая выходные и праздничные дни. Для срочных консультаций в нерабочее время может потребоваться дополнительная плата в размере 20% от стандартной стоимости."
          />
          
          <FAQItem 
            value="item-3"
            question="Какие гарантии, что документ пройдет проверку?"
            answer="Мы гарантируем качество подготовленных документов. Если документ не примут в государственных органах из-за юридических ошибок с нашей стороны, мы бесплатно исправим все недочеты и предоставим обновленную версию. Наши юристы имеют многолетний опыт и следят за изменениями в законодательстве."
          />
          
          <FAQItem 
            value="item-4"
            question="Как проходит онлайн-консультация?"
            answer="Консультация проводится в Zoom или другом удобном для вас мессенджере. После оплаты вы получаете ссылку на видеовстречу. Во время консультации юрист задаст уточняющие вопросы, проанализирует вашу ситуацию и предложит варианты решения. После консультации вы получаете письменное заключение на email."
          />
          
          <FAQItem 
            value="item-5"
            question="Можно ли оплатить услуги частями?"
            answer="Да, для услуг стоимостью от 15 000 рублей предусмотрена возможность оплаты в два этапа: 50% предоплата и 50% после выполнения работы. Для регулярных клиентов мы также предлагаем индивидуальные условия оплаты и скидки."
          />
        </Accordion>
      </div>
    </section>
  );
};

interface FAQItemProps {
  value: string;
  question: string;
  answer: string;
}

const FAQItem = ({ value, question, answer }: FAQItemProps) => (
  <AccordionItem value={value}>
    <AccordionTrigger>{question}</AccordionTrigger>
    <AccordionContent>
      {answer}
    </AccordionContent>
  </AccordionItem>
);

export default FAQ;

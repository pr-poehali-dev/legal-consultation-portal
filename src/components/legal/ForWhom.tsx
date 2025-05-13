
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ForWhom = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Для кого это?</h2>
          <p className="mt-4 text-slate-600">
            Решаем юридические проблемы для разных категорий клиентов
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ClientTypeCard
            icon="Home"
            title="Собственники жилья"
            description="Споры с УК, соседями, застройщиками. Вопросы ремонта, перепланировки и коммунальных услуг."
          />

          <ClientTypeCard
            icon="Scroll"
            title="Наследники"
            description="Оформление наследства, споры о наследстве, составление завещаний и защита прав наследников."
          />

          <ClientTypeCard
            icon="Users"
            title="Супруги"
            description="Брачные договоры, раздел имущества, алименты и соглашения о детях при разводе."
          />

          <ClientTypeCard
            icon="ShoppingCart"
            title="Потребители"
            description="Защита прав потребителей, возврат товаров, претензии по качеству услуг и товаров."
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ProblemSolutionCard
            title="Не можете взыскать долг с управляющей компании?"
            description="Поможем составить юридически грамотную претензию и исковое заявление для эффективного взыскания долга с УК."
            buttonText="Получить консультацию"
          />

          <ProblemSolutionCard
            title="Нужно срочно оформить завещание?"
            description="Подготовим юридически безупречное завещание в течение 24 часов с учетом всех особенностей вашей ситуации."
            buttonText="Заказать завещание"
          />
        </div>
      </div>
    </section>
  );
};

const ClientTypeCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <Card className="text-center">
    <CardHeader>
      <div className="flex justify-center">
        <div className="rounded-full bg-blue-100 p-3">
          <Icon name={icon} className="h-8 w-8 text-blue-900" />
        </div>
      </div>
      <CardTitle className="mt-3">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-slate-600">
        {description}
      </p>
    </CardContent>
  </Card>
);

const ProblemSolutionCard = ({ title, description, buttonText }: { title: string; description: string; buttonText: string }) => (
  <div className="rounded-lg bg-white p-6 shadow-sm">
    <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
    <p className="mt-2 text-slate-600">
      {description}
    </p>
    <Button className="mt-4">{buttonText}</Button>
  </div>
);

export default ForWhom;

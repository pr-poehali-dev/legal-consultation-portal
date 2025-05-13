
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Отзывы клиентов</h2>
          <p className="mt-4 text-slate-600">
            Истории успеха наших клиентов
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ReviewCard
            name="Елена В."
            avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
            initials="ЕВ"
            rating={5}
            text="Обратилась с вопросом о разделе имущества после развода. Получила полную консультацию и грамотно составленное исковое заявление. Дело разрешилось в мою пользу. Спасибо за профессионализм!"
          />

          <ReviewCard
            name="Александр П."
            avatar="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
            initials="АП"
            rating={5}
            text="Помогли взыскать с застройщика компенсацию за задержку сдачи дома. Результат превзошел ожидания - удалось получить 300 000 рублей. Рекомендую всем, кто столкнулся с недобросовестными застройщиками."
          />

          <ReviewCard
            name="Ольга К."
            avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
            initials="ОК"
            rating={4}
            text="Заказывала составление завещания для моей мамы. Юрист Мария очень внимательно отнеслась к нашей ситуации, подготовила документ быстро и профессионально. Понравилось, что все общение было онлайн."
          />
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg">
            Больше отзывов
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ReviewCardProps {
  name: string;
  avatar: string;
  initials: string;
  rating: number;
  text: string;
}

const ReviewCard = ({ name, avatar, initials, rating, text }: ReviewCardProps) => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg">{name}</CardTitle>
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Icon 
                key={i} 
                name="Star" 
                className={`h-4 w-4 ${i >= rating ? 'text-slate-200' : ''}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-slate-600">
        {text}
      </p>
    </CardContent>
  </Card>
);

export default Reviews;

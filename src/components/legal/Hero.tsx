
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Решайте юридические вопросы онлайн за 24 часа
            </h1>
            <p className="text-lg text-slate-200">
              Профессиональные консультации и документы без переплат и походов в офис
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900">
                Заказать документ
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Записаться на консультацию
              </Button>
            </div>
            
            <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-3">
              <FeatureItem icon="PiggyBank" text="Фиксированные цены" />
              <FeatureItem icon="Trophy" text="Опыт от 10 лет" />
              <FeatureItem icon="ShieldCheck" text="Конфиденциальность" />
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-2">
    <div className="rounded-full bg-blue-700 p-2">
      <Icon name={icon} className="h-5 w-5" />
    </div>
    <span className="text-sm font-medium">{text}</span>
  </div>
);

const ContactForm = () => (
  <Card className="w-full max-w-md">
    <CardHeader className="space-y-1">
      <CardTitle className="text-xl">Получите бесплатную консультацию</CardTitle>
      <CardDescription>
        Заполните форму и мы свяжемся с вами в течение 15 минут
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="space-y-2">
        <Input placeholder="Ваше имя" />
      </div>
      <div className="space-y-2">
        <Input placeholder="Номер телефона" type="tel" />
      </div>
      <div className="space-y-2">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Выберите услугу" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="consultation">Консультация</SelectItem>
            <SelectItem value="document">Подготовка документа</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full">Отправить заявку</Button>
    </CardFooter>
  </Card>
);

export default Hero;

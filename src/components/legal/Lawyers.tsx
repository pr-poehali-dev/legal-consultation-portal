
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Lawyers = () => {
  return (
    <section id="lawyers" className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Наши юристы</h2>
          <p className="mt-4 text-slate-600">
            Команда профессионалов с опытом более 10 лет
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <LawyerCard
            name="Анна Иванова"
            position="Руководитель практики гражданского права"
            avatar="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
            initials="АИ"
            experience="12 лет опыта в гражданском праве"
            education="МГЮА им. О.Е. Кутафина"
            achievement="Более 500 успешных дел"
          />

          <LawyerCard
            name="Петр Сидоров"
            position="Жилищные споры и недвижимость"
            avatar="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
            initials="ПС"
            experience="10 лет в жилищных спорах"
            education="СПбГУ, юридический факультет"
            achievement="Автор книги по жилищному праву"
          />

          <LawyerCard
            name="Мария Козлова"
            position="Семейные и наследственные дела"
            avatar="https://images.unsplash.com/photo-1580518337843-f959e992563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
            initials="МК"
            experience="15 лет в семейном праве"
            education="МГУ им. М.В. Ломоносова"
            achievement="Кандидат юридических наук"
          />
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg">
            Познакомиться со всеми юристами
          </Button>
        </div>
      </div>
    </section>
  );
};

interface LawyerCardProps {
  name: string;
  position: string;
  avatar: string;
  initials: string;
  experience: string;
  education: string;
  achievement: string;
}

const LawyerCard = ({
  name,
  position,
  avatar,
  initials,
  experience,
  education,
  achievement
}: LawyerCardProps) => (
  <Card>
    <CardHeader className="text-center">
      <Avatar className="mx-auto h-32 w-32 rounded-full">
        <AvatarImage src={avatar} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <CardTitle className="mt-4">{name}</CardTitle>
      <CardDescription>{position}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-3 text-sm">
        <div className="flex items-center">
          <Icon name="Briefcase" className="mr-2 h-4 w-4 text-slate-400" />
          <span>{experience}</span>
        </div>
        <div className="flex items-center">
          <Icon name="GraduationCap" className="mr-2 h-4 w-4 text-slate-400" />
          <span>{education}</span>
        </div>
        <div className="flex items-center">
          <Icon name="Award" className="mr-2 h-4 w-4 text-slate-400" />
          <span>{achievement}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default Lawyers;

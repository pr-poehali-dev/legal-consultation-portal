
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Навигация */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-blue-900">
            <Icon name="Scale" className="h-6 w-6 text-blue-900" />
            <span className="text-xl tracking-tight">ПравоОнлайн</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-sm font-medium hover:text-blue-700">Услуги</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-blue-700">Как мы работаем</a>
            <a href="#lawyers" className="text-sm font-medium hover:text-blue-700">Юристы</a>
            <a href="#reviews" className="text-sm font-medium hover:text-blue-700">Отзывы</a>
            <a href="#faq" className="text-sm font-medium hover:text-blue-700">Вопросы</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:88001234567" className="text-sm font-medium text-blue-900 md:text-base">
              8 (800) 123-45-67
            </a>
            <Button>Заказать звонок</Button>
          </div>
        </div>
      </nav>

      {/* Главный блок */}
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
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-blue-700 p-2">
                    <Icon name="PiggyBank" className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">Фиксированные цены</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-blue-700 p-2">
                    <Icon name="Trophy" className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">Опыт от 10 лет</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-blue-700 p-2">
                    <Icon name="ShieldCheck" className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">Конфиденциальность</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
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
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
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
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Экспресс-консультация</CardTitle>
                    <CardDescription>30 минут с юристом</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">1 500 ₽</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-green-500" />
                        <span>Оперативный анализ ситуации</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-green-500" />
                        <span>Рекомендации по первым шагам</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-green-500" />
                        <span>Консультация в Zoom</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Записаться</Button>
                  </CardFooter>
                </Card>

                <Card className="border-amber-500 shadow-lg">
                  <CardHeader>
                    <div className="w-full rounded bg-amber-500 py-1 text-center text-xs font-semibold text-white">
                      Популярный выбор
                    </div>
                    <CardTitle className="mt-3">Полный разбор ситуации</CardTitle>
                    <CardDescription>60 минут с юристом</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">3 000 ₽</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-green-500" />
                        <span>Детальный анализ документов</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-green-500" />
                        <span>Пошаговый план действий</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-green-500" />
                        <span>Консультация в Zoom</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-green-500" />
                        <span>Письменные рекомендации</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Записаться</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Пакет из 3 консультаций</CardTitle>
                    <CardDescription>Выгода 15%</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">7 500 ₽</p>
                    <p className="text-sm text-slate-500 line-through">8 850 ₽</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-green-500" />
                        <span>3 консультации по 60 минут</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-green-500" />
                        <span>Приоритетная запись</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-green-500" />
                        <span>Доступ к шаблонам документов</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Заказать пакет</Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="mt-10 rounded-lg bg-slate-50 p-6">
                <h3 className="text-lg font-semibold">Как это работает:</h3>
                <div className="mt-4 grid gap-6 md:grid-cols-4">
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      <Icon name="MousePointerClick" className="h-6 w-6" />
                    </div>
                    <h4 className="mt-2 font-medium">Выбираете тему</h4>
                    <p className="mt-1 text-sm text-slate-600">
                      Укажите тему и предпочтительное время
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      <Icon name="CreditCard" className="h-6 w-6" />
                    </div>
                    <h4 className="mt-2 font-medium">Оплачиваете</h4>
                    <p className="mt-1 text-sm text-slate-600">
                      Безопасная онлайн-оплата картой
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      <Icon name="Mail" className="h-6 w-6" />
                    </div>
                    <h4 className="mt-2 font-medium">Получаете ссылку</h4>
                    <p className="mt-1 text-sm text-slate-600">
                      Ссылка на Zoom-встречу и календарь
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      <Icon name="Video" className="h-6 w-6" />
                    </div>
                    <h4 className="mt-2 font-medium">Консультируетесь</h4>
                    <p className="mt-1 text-sm text-slate-600">
                      В удобное время в Zoom с юристом
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="documents" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-center p-2">
                      <Icon name="Users" className="h-10 w-10 text-blue-900" />
                    </div>
                    <CardTitle className="text-center">Семейное право</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-between">
                        <span className="text-sm">Брачный договор</span>
                        <span className="font-medium">от 5 000 ₽</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-sm">Соглашение о детях</span>
                        <span className="font-medium">от 4 000 ₽</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-sm">Раздел имущества</span>
                        <span className="font-medium">от 6 000 ₽</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Заказать документ</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-center p-2">
                      <Icon name="Home" className="h-10 w-10 text-blue-900" />
                    </div>
                    <CardTitle className="text-center">Жилищные споры</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-between">
                        <span className="text-sm">Претензия к УК</span>
                        <span className="font-medium">от 3 000 ₽</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-sm">Договор аренды</span>
                        <span className="font-medium">от 3 500 ₽</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-sm">Иск по ЖКХ</span>
                        <span className="font-medium">от 7 000 ₽</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Заказать документ</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-center p-2">
                      <Icon name="Scroll" className="h-10 w-10 text-blue-900" />
                    </div>
                    <CardTitle className="text-center">Наследство</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-between">
                        <span className="text-sm">Завещание</span>
                        <span className="font-medium">от 4 500 ₽</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-sm">Иск об оспаривании</span>
                        <span className="font-medium">от 9 000 ₽</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-sm">Сопровождение</span>
                        <span className="font-medium">от 15 000 ₽</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Заказать документ</Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="mt-10 rounded-lg bg-slate-50 p-6">
                <h3 className="text-lg font-semibold">Процесс заказа документа:</h3>
                <div className="mt-4 grid gap-6 md:grid-cols-4">
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      <Icon name="FileText" className="h-6 w-6" />
                    </div>
                    <h4 className="mt-2 font-medium">Выбор типа документа</h4>
                    <p className="mt-1 text-sm text-slate-600">
                      Выберите нужный вам документ
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      <Icon name="ClipboardList" className="h-6 w-6" />
                    </div>
                    <h4 className="mt-2 font-medium">Заполнение анкеты</h4>
                    <p className="mt-1 text-sm text-slate-600">
                      Заполните онлайн-форму с деталями
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      <Icon name="CreditCard" className="h-6 w-6" />
                    </div>
                    <h4 className="mt-2 font-medium">Оплата</h4>
                    <p className="mt-1 text-sm text-slate-600">
                      Безопасная оплата онлайн
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      <Icon name="Send" className="h-6 w-6" />
                    </div>
                    <h4 className="mt-2 font-medium">Получение</h4>
                    <p className="mt-1 text-sm text-slate-600">
                      Документ на email + звонок юриста
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Для кого */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Для кого это?</h2>
            <p className="mt-4 text-slate-600">
              Решаем юридические проблемы для разных категорий клиентов
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Icon name="Home" className="h-8 w-8 text-blue-900" />
                  </div>
                </div>
                <CardTitle className="mt-3">Собственники жилья</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Споры с УК, соседями, застройщиками. Вопросы ремонта, перепланировки и коммунальных услуг.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Icon name="Scroll" className="h-8 w-8 text-blue-900" />
                  </div>
                </div>
                <CardTitle className="mt-3">Наследники</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Оформление наследства, споры о наследстве, составление завещаний и защита прав наследников.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Icon name="Users" className="h-8 w-8 text-blue-900" />
                  </div>
                </div>
                <CardTitle className="mt-3">Супруги</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Брачные договоры, раздел имущества, алименты и соглашения о детях при разводе.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Icon name="ShoppingCart" className="h-8 w-8 text-blue-900" />
                  </div>
                </div>
                <CardTitle className="mt-3">Потребители</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Защита прав потребителей, возврат товаров, претензии по качеству услуг и товаров.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-900">Не можете взыскать долг с управляющей компании?</h3>
              <p className="mt-2 text-slate-600">
                Поможем составить юридически грамотную претензию и исковое заявление для эффективного взыскания долга с УК.
              </p>
              <Button className="mt-4">Получить консультацию</Button>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-900">Нужно срочно оформить завещание?</h3>
              <p className="mt-2 text-slate-600">
                Подготовим юридически безупречное завещание в течение 24 часов с учетом всех особенностей вашей ситуации.
              </p>
              <Button className="mt-4">Заказать завещание</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Как мы работаем */}
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
              <div className="relative md:grid md:grid-cols-8 md:gap-6">
                <div className="md:col-span-3">
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-blue-900 text-3xl font-bold text-white shadow-lg md:absolute md:left-0 md:top-0 md:-translate-x-1/2">
                    1
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="rounded-lg border bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold">Вы оставляете заявку</h3>
                    <p className="mt-2 text-slate-600">
                      Заполните короткую форму на сайте, указав свои контактные данные и вид требуемой помощи. Это займет всего 1 минуту.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative md:grid md:grid-cols-8 md:gap-6">
                <div className="md:col-span-3">
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-blue-900 text-3xl font-bold text-white shadow-lg md:absolute md:left-0 md:top-0 md:-translate-x-1/2">
                    2
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="rounded-lg border bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold">Юрист связывается с вами</h3>
                    <p className="mt-2 text-slate-600">
                      В течение 15 минут с вами свяжется профильный юрист с опытом в нужной вам отрасли права для уточнения деталей.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative md:grid md:grid-cols-8 md:gap-6">
                <div className="md:col-span-3">
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-blue-900 text-3xl font-bold text-white shadow-lg md:absolute md:left-0 md:top-0 md:-translate-x-1/2">
                    3
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="rounded-lg border bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold">Уточняем детали</h3>
                    <p className="mt-2 text-slate-600">
                      Юрист задаст необходимые вопросы, уточнит обстоятельства и соберет информацию для подготовки решения вашей проблемы.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative md:grid md:grid-cols-8 md:gap-6">
                <div className="md:col-span-3">
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-blue-900 text-3xl font-bold text-white shadow-lg md:absolute md:left-0 md:top-0 md:-translate-x-1/2">
                    4
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="rounded-lg border bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold">Готовим решение</h3>
                    <p className="mt-2 text-slate-600">
                      В течение 1-24 часов (в зависимости от сложности) вы получаете готовое юридическое решение - документ или консультацию.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-blue-50 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-900 p-2 text-white">
                  <Icon name="CheckCircle" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Гарантия качества</h3>
                  <p className="mt-2 text-slate-600">
                    Если документ не примут в государственных органах — бесплатно исправим все выявленные недочеты и предоставим обновленную версию.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-blue-50 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-900 p-2 text-white">
                  <Icon name="Shield" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Конфиденциальность</h3>
                  <p className="mt-2 text-slate-600">
                    Гарантируем полную конфиденциальность ваших данных в соответствии с Федеральным законом №152-ФЗ "О персональных данных".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Наши юристы */}
      <section id="lawyers" className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Наши юристы</h2>
            <p className="mt-4 text-slate-600">
              Команда профессионалов с опытом более 10 лет
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="mx-auto h-32 w-32 rounded-full">
                  <AvatarImage src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" />
                  <AvatarFallback>АИ</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4">Анна Иванова</CardTitle>
                <CardDescription>Руководитель практики гражданского права</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Icon name="Briefcase" className="mr-2 h-4 w-4 text-slate-400" />
                    <span>12 лет опыта в гражданском праве</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="GraduationCap" className="mr-2 h-4 w-4 text-slate-400" />
                    <span>МГЮА им. О.Е. Кутафина</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Award" className="mr-2 h-4 w-4 text-slate-400" />
                    <span>Более 500 успешных дел</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Avatar className="mx-auto h-32 w-32 rounded-full">
                  <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" />
                  <AvatarFallback>ПС</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4">Петр Сидоров</CardTitle>
                <CardDescription>Жилищные споры и недвижимость</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Icon name="Briefcase" className="mr-2 h-4 w-4 text-slate-400" />
                    <span>10 лет в жилищных спорах</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="GraduationCap" className="mr-2 h-4 w-4 text-slate-400" />
                    <span>СПбГУ, юридический факультет</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Award" className="mr-2 h-4 w-4 text-slate-400" />
                    <span>Автор книги по жилищному праву</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Avatar className="mx-auto h-32 w-32 rounded-full">
                  <AvatarImage src="https://images.unsplash.com/photo-1580518337843-f959e992563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" />
                  <AvatarFallback>МК</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4">Мария Козлова</CardTitle>
                <CardDescription>Семейные и наследственные дела</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Icon name="Briefcase" className="mr-2 h-4 w-4 text-slate-400" />
                    <span>15 лет в семейном праве</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="GraduationCap" className="mr-2 h-4 w-4 text-slate-400" />
                    <span>МГУ им. М.В. Ломоносова</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Award" className="mr-2 h-4 w-4 text-slate-400" />
                    <span>Кандидат юридических наук</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">
              Познакомиться со всеми юристами
            </Button>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Отзывы клиентов</h2>
            <p className="mt-4 text-slate-600">
              Истории успеха наших клиентов
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" />
                    <AvatarFallback>ЕВ</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Елена В.</CardTitle>
                    <div className="flex text-amber-400">
                      <Icon name="Star" className="h-4 w-4" />
                      <Icon name="Star" className="h-4 w-4" />
                      <Icon name="Star" className="h-4 w-4" />
                      <Icon name="Star" className="h-4 w-4" />
                      <Icon name="Star" className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Обратилась с вопросом о разделе имущества после развода. Получила полную консультацию и грамотно составленное исковое заявление. Дело разрешилось в мою пользу. Спасибо за профессионализм!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" />
                    <AvatarFallback>АП</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Александр П.</CardTitle>
                    <div className="flex text-amber-400">
                      <Icon name="Star" className="h-4 w-4" />
                      <Icon name="Star" className="h-4 w-4" />
                      <Icon name="Star" className="h-4 w-4" />
                      <Icon name="Star" className="h-4 w-4" />
                      <Icon name="Star" className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Помогли взыскать с застройщика компенсацию за задержку сдачи дома. Результат превзошел ожидания - удалось получить 300 000 рублей. Рекомендую всем, кто столкнулся с недобросовестными застройщиками.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" />
                    <AvatarFallback>ОК</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Ольга К.</CardTitle>
                    <div className="flex text-amber-400">
                      <Icon name="Star" className="h-4 w-4" />
                      <Icon name="Star" className="h-4 w-4" />
                      <Icon name="Star" className="h-4 w-4" />
                      <Icon name="Star" className="h-4 w-4" />
                      <Icon name="Star" className="h-4 w-4 text-slate-200" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Заказывала составление завещания для моей мамы. Юрист Мария очень внимательно отнеслась к нашей ситуации, подготовила документ быстро и профессионально. Понравилось, что все общение было онлайн.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">
              Больше отзывов
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Частые вопросы</h2>
            <p className="mt-4 text-slate-600">
              Ответы на популярные вопросы наших клиентов
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Как быстро я получу документ?</AccordionTrigger>
              <AccordionContent>
                Скорость подготовки документа зависит от его сложности. Простые документы (претензии, жалобы) готовы в течение 1-3 часов. Более сложные (исковые заявления, договоры) - от 12 до 24 часов. В экстренных случаях мы можем ускорить процесс, просто сообщите нам о срочности.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Можно ли получить консультацию в нерабочее время?</AccordionTrigger>
              <AccordionContent>
                Да, мы работаем в режиме 24/7. Вы можете заказать консультацию на любое удобное время, включая выходные и праздничные дни. Для срочных консультаций в нерабочее время может потребоваться дополнительная плата в размере 20% от стандартной стоимости.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Какие гарантии, что документ пройдет проверку?</AccordionTrigger>
              <AccordionContent>
                Мы гарантируем качество подготовленных документов. Если документ не примут в государственных органах из-за юридических ошибок с нашей стороны, мы бесплатно исправим все недочеты и предоставим обновленную версию. Наши юристы имеют многолетний опыт и следят за изменениями в законодательстве.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Как проходит онлайн-консультация?</AccordionTrigger>
              <AccordionContent>
                Консультация проводится в Zoom или другом удобном для вас мессенджере. После оплаты вы получаете ссылку на видеовстречу. Во время консультации юрист задаст уточняющие вопросы, проанализирует вашу ситуацию и предложит варианты решения. После консультации вы получаете письменное заключение на email.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Можно ли оплатить услуги частями?</AccordionTrigger>
              <AccordionContent>
                Да, для услуг стоимостью от 15 000 рублей предусмотрена возможность оплаты в два этапа: 50% предоплата и 50% после выполнения работы. Для регулярных клиентов мы также предлагаем индивидуальные условия оплаты и скидки.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
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

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-slate-300">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 text-white">
                <Icon name="Scale" className="h-6 w-6" />
                <span className="text-xl font-bold">ПравоОнлайн</span>
              </div>
              <p className="mt-4 text-sm">
                Профессиональная юридическая помощь онлайн 24/7. Консультации и документы в кратчайшие сроки.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Услуги</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Онлайн-консультации</a></li>
                <li><a href="#" className="hover:text-white">Подготовка документов</a></li>
                <li><a href="#" className="hover:text-white">Семейные споры</a></li>
                <li><a href="#" className="hover:text-white">Жилищные вопросы</a></li>
                <li><a href="#" className="hover:text-white">Наследственные дела</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Компания</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">О нас</a></li>
                <li><a href="#" className="hover:text-white">Юристы</a></li>
                <li><a href="#" className="hover:text-white">Отзывы</a></li>
                <li><a href="#" className="hover:text-white">Блог</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Контакты</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <a href="tel:88001234567" className="hover:text-white">8 (800) 123-45-67</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <a href="mailto:info@pravo-online.ru" className="hover:text-white">info@pravo-online.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MessageCircle" className="h-4 w-4" />
                  <a href="#" className="hover:text-white">Онлайн-чат</a>
                </li>
              </ul>
              <div className="mt-4 flex gap-4">
                <a href="#" className="rounded-full bg-slate-800 p-2 hover:bg-blue-800">
                  <Icon name="MessageSquare" className="h-5 w-5" />
                </a>
                <a href="#" className="rounded-full bg-slate-800 p-2 hover:bg-blue-800">
                  <Icon name="Send" className="h-5 w-5" />
                </a>
                <a href="#" className="rounded-full bg-slate-800 p-2 hover:bg-blue-800">
                  <Icon name="Mail" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm">
            <p>© 2025 ПравоОнлайн. Все права защищены.</p>
            <div className="mt-2 flex justify-center gap-4">
              <a href="#" className="hover:text-white">Публичная оферта</a>
              <a href="#" className="hover:text-white">Политика конфиденциальности</a>
            </div>
            <div className="mt-4 flex justify-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6 w-10 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Mastercard-logo.svg" alt="Mastercard" className="h-6 w-10 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/MIR-logo.svg" alt="Мир" className="h-6 w-10 object-contain" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

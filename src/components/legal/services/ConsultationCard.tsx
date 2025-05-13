
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { ConsultationCardProps } from "./types";

const ConsultationCard = ({ 
  title, 
  description, 
  price, 
  oldPrice, 
  features, 
  featured = false,
  buttonText = "Записаться" 
}: ConsultationCardProps) => (
  <Card className={featured ? "border-amber-500 shadow-lg" : ""}>
    <CardHeader>
      {featured && (
        <div className="w-full rounded bg-amber-500 py-1 text-center text-xs font-semibold text-white">
          Популярный выбор
        </div>
      )}
      <CardTitle className={featured ? "mt-3" : ""}>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-3xl font-bold">{price}</p>
      {oldPrice && <p className="text-sm text-slate-500 line-through">{oldPrice}</p>}
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Icon name="Check" className="h-4 w-4 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button className="w-full">{buttonText}</Button>
    </CardFooter>
  </Card>
);

export default ConsultationCard;


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { DocumentCategoryCardProps } from "./types";

const DocumentCategoryCard = ({ 
  icon, 
  title, 
  items 
}: DocumentCategoryCardProps) => (
  <Card>
    <CardHeader>
      <div className="flex items-center justify-center p-2">
        <Icon name={icon} className="h-10 w-10 text-blue-900" />
      </div>
      <CardTitle className="text-center">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-between">
            <span className="text-sm">{item.name}</span>
            <span className="font-medium">{item.price}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button className="w-full">Заказать документ</Button>
    </CardFooter>
  </Card>
);

export default DocumentCategoryCard;

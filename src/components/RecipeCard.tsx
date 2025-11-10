import { Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  cookTime: string;
  servings: number;
  difficulty: string;
}

export function RecipeCard({ id, title, image, category, cookTime, servings, difficulty }: RecipeCardProps) {
  return (
    <Link to={`/recipe/${id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-card-hover cursor-pointer">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
            {category}
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{cookTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{servings}</span>
            </div>
            <Badge variant="secondary" className="ml-auto">
              {difficulty}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

import pastaDish from "@/assets/pasta-dish.jpg";
import saladBowl from "@/assets/salad-bowl.jpg";
import grilledChicken from "@/assets/grilled-chicken.jpg";
import chocolateDessert from "@/assets/chocolate-dessert.jpg";
import asianNoodles from "@/assets/asian-noodles.jpg";
import freshBread from "@/assets/fresh-bread.jpg";

export interface Recipe {
  id: string;
  title: string;
  image: string;
  category: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Classic Italian Pasta",
    image: pastaDish,
    category: "Italian",
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Easy",
    description: "A delicious traditional Italian pasta dish with homemade tomato sauce, fresh basil, and parmesan cheese.",
    ingredients: [
      "400g spaghetti pasta",
      "500g fresh tomatoes",
      "4 cloves garlic",
      "Fresh basil leaves",
      "100g parmesan cheese",
      "Olive oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Bring a large pot of salted water to boil and cook pasta according to package directions.",
      "While pasta cooks, heat olive oil in a large pan over medium heat.",
      "Add minced garlic and cook until fragrant, about 1 minute.",
      "Add diced tomatoes and simmer for 15 minutes until sauce thickens.",
      "Season with salt and pepper, then add fresh basil leaves.",
      "Drain pasta and toss with sauce.",
      "Serve topped with grated parmesan cheese and extra basil.",
    ],
  },
  {
    id: "2",
    title: "Fresh Garden Salad",
    image: saladBowl,
    category: "Healthy",
    cookTime: "15 mins",
    servings: 2,
    difficulty: "Easy",
    description: "A vibrant and nutritious salad packed with fresh vegetables, avocado, and a light vinaigrette dressing.",
    ingredients: [
      "Mixed salad greens",
      "1 avocado, sliced",
      "Cherry tomatoes, halved",
      "1 cucumber, sliced",
      "Red onion, thinly sliced",
      "Feta cheese (optional)",
      "Olive oil",
      "Lemon juice",
      "Salt and pepper",
    ],
    instructions: [
      "Wash and dry all vegetables thoroughly.",
      "Arrange salad greens in a large bowl.",
      "Add sliced avocado, cherry tomatoes, and cucumber.",
      "Sprinkle with thinly sliced red onion.",
      "Crumble feta cheese on top if using.",
      "Drizzle with olive oil and fresh lemon juice.",
      "Season with salt and pepper to taste and toss gently.",
    ],
  },
  {
    id: "3",
    title: "Grilled Herb Chicken",
    image: grilledChicken,
    category: "Main Course",
    cookTime: "45 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Juicy grilled chicken breast marinated in herbs and served with roasted vegetables.",
    ingredients: [
      "4 chicken breasts",
      "Fresh rosemary",
      "Fresh thyme",
      "4 cloves garlic, minced",
      "Olive oil",
      "Lemon juice",
      "Mixed vegetables (bell peppers, zucchini, carrots)",
      "Salt and pepper",
    ],
    instructions: [
      "Mix olive oil, lemon juice, minced garlic, and chopped herbs in a bowl.",
      "Add chicken breasts and marinate for at least 30 minutes.",
      "Preheat grill to medium-high heat.",
      "Grill chicken for 6-7 minutes per side until cooked through.",
      "While chicken cooks, toss vegetables with olive oil, salt, and pepper.",
      "Roast vegetables at 200°C (400°F) for 25 minutes.",
      "Let chicken rest for 5 minutes before serving with roasted vegetables.",
    ],
  },
  {
    id: "4",
    title: "Decadent Chocolate Cake",
    image: chocolateDessert,
    category: "Dessert",
    cookTime: "60 mins",
    servings: 8,
    difficulty: "Hard",
    description: "A rich and moist chocolate cake with velvety chocolate ganache and fresh berries.",
    ingredients: [
      "200g dark chocolate",
      "175g butter",
      "4 eggs",
      "200g sugar",
      "100g flour",
      "50g cocoa powder",
      "1 tsp baking powder",
      "Fresh berries for garnish",
      "Mint leaves for decoration",
    ],
    instructions: [
      "Preheat oven to 180°C (350°F). Grease and line a cake pan.",
      "Melt chocolate and butter together, then let cool slightly.",
      "Beat eggs and sugar until pale and fluffy.",
      "Fold in the melted chocolate mixture.",
      "Sift in flour, cocoa powder, and baking powder. Mix until combined.",
      "Pour into prepared pan and bake for 40-45 minutes.",
      "Let cool completely before adding chocolate ganache topping.",
      "Garnish with fresh berries and mint leaves before serving.",
    ],
  },
  {
    id: "5",
    title: "Asian Stir-Fry Noodles",
    image: asianNoodles,
    category: "Asian",
    cookTime: "25 mins",
    servings: 3,
    difficulty: "Easy",
    description: "Quick and flavorful stir-fry noodles with colorful vegetables and a savory sauce.",
    ingredients: [
      "300g noodles",
      "2 bell peppers, sliced",
      "2 carrots, julienned",
      "Green onions, chopped",
      "3 tbsp soy sauce",
      "2 tbsp sesame oil",
      "1 tbsp rice vinegar",
      "Sesame seeds for garnish",
      "Fresh ginger, minced",
    ],
    instructions: [
      "Cook noodles according to package directions, then drain.",
      "Heat sesame oil in a large wok or pan over high heat.",
      "Add minced ginger and stir-fry for 30 seconds.",
      "Add sliced peppers and carrots, stir-fry for 3-4 minutes.",
      "Add cooked noodles to the pan.",
      "Pour in soy sauce and rice vinegar, toss everything together.",
      "Cook for 2-3 minutes until everything is heated through.",
      "Garnish with sesame seeds and chopped green onions before serving.",
    ],
  },
  {
    id: "6",
    title: "Artisan Sourdough Bread",
    image: freshBread,
    category: "Bakery",
    cookTime: "4 hours",
    servings: 1,
    difficulty: "Hard",
    description: "Homemade artisan sourdough bread with a crispy crust and soft, airy interior.",
    ingredients: [
      "500g bread flour",
      "350ml water",
      "100g sourdough starter",
      "10g salt",
      "Extra flour for dusting",
    ],
    instructions: [
      "Mix flour, water, and sourdough starter in a large bowl. Let rest for 30 minutes.",
      "Add salt and knead for 10 minutes until smooth and elastic.",
      "Place dough in a lightly oiled bowl, cover, and let rise for 3-4 hours.",
      "Shape the dough and place in a banneton basket or bowl lined with a floured towel.",
      "Let proof for 2-3 hours at room temperature or overnight in the fridge.",
      "Preheat oven to 230°C (450°F) with a Dutch oven inside.",
      "Score the top of the loaf with a sharp knife.",
      "Bake covered for 30 minutes, then uncovered for 15-20 minutes until golden.",
      "Cool completely on a wire rack before slicing.",
    ],
  },
];

export const categories = ["All", "Italian", "Healthy", "Main Course", "Dessert", "Asian", "Bakery"];

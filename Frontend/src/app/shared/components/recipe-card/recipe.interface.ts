export interface Recipe {
  id: string;
  title: string;
  description: string;
  photoUrl: string;
  ingredients: string[];
  instructions: string;
  categoryId: string;
  likes: number;
}

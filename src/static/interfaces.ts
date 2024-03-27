export enum Category {
  "Marteting" = "marketing",
  "Animal" = "animal",
  "Food" = "food",
  "Free" = "free",
  "Nature" = "nature",
  "Star" = "star",
  "Technology" = "technology",
  "Workout" = "workout",
}

export interface Error {
  code: string;
  message: string;
}

export interface PostAuthor {
  email: string;
  role?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string[];
  datetime: string;
  category: Category;
  author: PostAuthor;
}

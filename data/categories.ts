interface ICategory {
   name: string;
   year: number;
   symbol: string;
   amount: number;
   totalAmount: number;
   porcent: number;
   primaryCategory: string;
}

export const categoriesData: ICategory[] =
   [
      {
         name: "Casa",
         year: 2025,
         symbol: "S/.",
         amount: 200,
         porcent: 30,
         totalAmount: 1025,
         primaryCategory: "Hidrandina"
      },
      {
         name: "Streaming",
         year: 2025,
         symbol: "S/.",
         amount: 50,
         porcent: 30,
         totalAmount: 1025,
         primaryCategory: "Prime Video"
      },
      {
         name: "Google",
         year: 2025,
         symbol: "S/.",
         amount: 50,
         porcent: 30,
         totalAmount: 1025,
         primaryCategory: "Youtube Premium"
      },
      {
         name: "Otros",
         year: 2025,
         symbol: "S/.",
         amount: 45,
         porcent: 30,
         totalAmount: 1025,
         primaryCategory: "Juegos Steam"
      }
   ]
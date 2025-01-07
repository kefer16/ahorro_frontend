
interface ITotalAmount {
   name: string;
   colorCard: string;
   colorText: string;
   symbol: string;
   totalAmount: number;
}

export const totalAmountsData: ITotalAmount[] =
   [
      {
         name: "Ingresos",
         colorCard: "bg-red-600/20 border-red-600/40",
         colorText: "text-red-600",
         symbol: "S/.",
         totalAmount: 1025
      },
      {
         name: "Gastos",
         colorCard: "bg-green-600/20 border-green-600/40",
         colorText: "text-green-600",
         symbol: "S/.",
         totalAmount: 550
      },
      {
         name: "Ahorros",
         colorCard: "bg-blue-600/20 border-blue-600/40",
         colorText: "text-blue-600",
         symbol: "S/.",
         totalAmount: 475
      }
   ]
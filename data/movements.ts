export interface IDataMovements {
   code: `#${string}`;
   date: string;
   concep: string;
   money: string;
   amount: number;
   type: boolean;
}

export const dataMovements: IDataMovements[] =
   [
      {
         code: "#RT3080",
         date: new Date().toISOString(),
         concep: "Pago Sedalib",
         money: "S/.",
         amount: 56.43,
         type: true,
      },
      {
         code: "#RT3080",
         date: new Date().toISOString(),
         concep: "Pago Sedalib",
         money: "S/.",
         amount: 56.43,
         type: false,
      },
      {
         code: "#RT3080",
         date: new Date().toISOString(),
         concep: "Pago Sedalib",
         money: "S/.",
         amount: 56.43,
         type: true,
      },
      {
         code: "#RT3080",
         date: new Date().toISOString(),
         concep: "Pago Sedalib",
         money: "S/.",
         amount: 56.43,
         type: true,
      }
   ]
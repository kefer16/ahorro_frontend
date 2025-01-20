interface Transaction {
   id: string,
   name: string;
   date: string;
   is_charge: boolean;
   money: string;
   amount: number;
}

export const transactionsData: Transaction[] =
   [
      {
         id: "trx001",
         name: "Hidrandina",
         date: "12 de Enero, 2025",
         is_charge: true,
         money: "S/.",
         amount: 20
      },
      {
         id: "trx002",
         name: "Mantenimiento",
         date: "12 de Enero, 2025",
         is_charge: false,
         money: "S/.",
         amount: 300
      },
      {
         id: "trx003",
         name: "Youtube",
         date: "12 de Enero, 2025",
         is_charge: true,
         money: "S/.",
         amount: 23.99
      },
      {
         id: "trx004",
         name: "Google Fotos",
         date: "12 de Enero, 2025",
         is_charge: true,
         money: "S/.",
         amount: 23.99
      },
      {
         id: "trx005",
         name: "Spotify",
         date: "12 de Enero, 2025",
         is_charge: true,
         money: "S/.",
         amount: 10.99
      },
      {
         id: "trx006",
         name: "Pan",
         date: "12 de Enero, 2025",
         is_charge: true,
         money: "S/.",
         amount: 5.20
      },
      {
         id: "trx007",
         name: "Yape",
         date: "12 de Enero, 2025",
         is_charge: true,
         money: "S/.",
         amount: 2.40
      }
   ];

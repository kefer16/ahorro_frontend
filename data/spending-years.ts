import { SpendingChartProps } from "@/components/spending/charts/spending-chart";

interface SavingYear {
   year: number;
   config: SpendingChartProps[];
}

export const spendingYearsData: SavingYear[] =
   [
      {
         year: 2024,
         config: [
            {
               cardTitle: "Enero",
               cardDescription: "Semana 1 - Semana 4",
               footerTitle: "Se gastó mas la semana 3",
               footerDescription: "Total de gastos en el mes",
               chartConfig:
               {
                  amount: {
                     label: "Monto",
                     color: "hsl(var(--chart-1))",
                  }
               }
               ,
               chartData: [
                  { week: "sem1", amount: 400 },
                  { week: "sem2", amount: 200 },
                  { week: "sem3", amount: 300 },
                  { week: "sem4", amount: 50 },
               ]

            },
            {
               cardTitle: "Febrero",
               cardDescription: "Semana 1 - Semana 4",
               footerTitle: "Footer",
               footerDescription: "description",
               chartConfig:
               {
                  amount: {
                     label: "Monto",
                     color: "hsl(var(--chart-1))",
                  }
               }
               ,
               chartData: [
                  { week: "sem1", amount: 400 },
                  { week: "sem2", amount: 200 },
                  { week: "sem3", amount: 300 },
                  { week: "sem4", amount: 50 },
               ]
            },
            {
               cardTitle: "Marzo",
               cardDescription: "Semana 1 - Semana 4",
               footerTitle: "Footer",
               footerDescription: "description",
               chartConfig:
               {
                  amount: {
                     label: "Monto",
                     color: "hsl(var(--chart-1))",
                  }
               }
               ,
               chartData: [
                  { week: "sem1", amount: 400 },
                  { week: "sem2", amount: 200 },
                  { week: "sem3", amount: 300 },
                  { week: "sem4", amount: 50 },
               ]
            },
            {
               cardTitle: "Abril",
               cardDescription: "Semana 1 - Semana 4",
               footerTitle: "Footer",
               footerDescription: "description",
               chartConfig:
               {
                  amount: {
                     label: "Monto",
                     color: "hsl(var(--chart-1))",
                  }
               }
               ,
               chartData: [
                  { week: "sem1", amount: 400 },
                  { week: "sem2", amount: 200 },
                  { week: "sem3", amount: 300 },
                  { week: "sem4", amount: 50 },
               ]
            },
            {
               cardTitle: "Mayo",
               cardDescription: "Semana 1 - Semana 4",
               footerTitle: "Footer",
               footerDescription: "description",
               chartConfig:
               {
                  amount: {
                     label: "Monto",
                     color: "hsl(var(--chart-1))",
                  }
               }
               ,
               chartData: [
                  { week: "sem1", amount: 400 },
                  { week: "sem2", amount: 200 },
                  { week: "sem3", amount: 300 },
                  { week: "sem4", amount: 50 },
               ]
            },
            {
               cardTitle: "Junio",
               cardDescription: "Semana 1 - Semana 4",
               footerTitle: "Footer",
               footerDescription: "description",
               chartConfig:
               {
                  amount: {
                     label: "Monto",
                     color: "hsl(var(--chart-1))",
                  }
               }
               ,
               chartData: [
                  { week: "sem1", amount: 400 },
                  { week: "sem2", amount: 200 },
                  { week: "sem3", amount: 300 },
                  { week: "sem4", amount: 50 },
               ]
            },
            {
               cardTitle: "Julio",
               cardDescription: "Semana 1 - Semana 4",
               footerTitle: "Footer",
               footerDescription: "description",
               chartConfig:
               {
                  amount: {
                     label: "Monto",
                     color: "hsl(var(--chart-1))",
                  }
               }
               ,
               chartData: [
                  { week: "sem1", amount: 400 },
                  { week: "sem2", amount: 200 },
                  { week: "sem3", amount: 300 },
                  { week: "sem4", amount: 50 },
               ]
            },
            {
               cardTitle: "Agosto",
               cardDescription: "Semana 1 - Semana 4",
               footerTitle: "Footer",
               footerDescription: "description",
               chartConfig:
               {
                  amount: {
                     label: "Monto",
                     color: "hsl(var(--chart-1))",
                  }
               }
               ,
               chartData: [
                  { week: "sem1", amount: 400 },
                  { week: "sem2", amount: 200 },
                  { week: "sem3", amount: 300 },
                  { week: "sem4", amount: 50 },
               ]
            },
            {
               cardTitle: "Septiembre",
               cardDescription: "Semana 1 - Semana 4",
               footerTitle: "Footer",
               footerDescription: "description",
               chartConfig:
               {
                  amount: {
                     label: "Monto",
                     color: "hsl(var(--chart-1))",
                  }
               }
               ,
               chartData: [
                  { week: "sem1", amount: 400 },
                  { week: "sem2", amount: 200 },
                  { week: "sem3", amount: 300 },
                  { week: "sem4", amount: 50 },
               ]
            },
            {
               cardTitle: "Octubre",
               cardDescription: "Semana 1 - Semana 4",
               footerTitle: "Footer",
               footerDescription: "description",
               chartConfig:
               {
                  amount: {
                     label: "Monto",
                     color: "hsl(var(--chart-1))",
                  }
               }
               ,
               chartData: [
                  { week: "sem1", amount: 400 },
                  { week: "sem2", amount: 200 },
                  { week: "sem3", amount: 300 },
                  { week: "sem4", amount: 50 },
               ]
            },
            {
               cardTitle: "Noviembre",
               cardDescription: "Semana 1 - Semana 4",
               footerTitle: "Footer",
               footerDescription: "description",
               chartConfig:
               {
                  amount: {
                     label: "Monto",
                     color: "hsl(var(--chart-1))",
                  }
               }
               ,
               chartData: [
                  { week: "sem1", amount: 400 },
                  { week: "sem2", amount: 200 },
                  { week: "sem3", amount: 300 },
                  { week: "sem4", amount: 50 },
               ]
            },
            {
               cardTitle: "Diciembre",
               cardDescription: "Semana 1 - Semana 4",
               footerTitle: "Footer",
               footerDescription: "description",
               chartConfig:
               {
                  amount: {
                     label: "Monto",
                     color: "hsl(var(--chart-1))",
                  }
               }
               ,
               chartData: [
                  { week: "sem1", amount: 400 },
                  { week: "sem2", amount: 200 },
                  { week: "sem3", amount: 300 },
                  { week: "sem4", amount: 50 },
               ]
            }
         ]

      },
   ]  
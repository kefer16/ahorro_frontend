"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import {
   ChartConfig,
   ChartContainer,
   ChartTooltip,
   ChartTooltipContent,
} from "@/components/ui/chart"


interface Idata {
   week: "Sn01" | "February" | "March" | "April";
   amount: number;
}
const chartData: Idata[] = [
   { week: "Sn01", amount: 186 },
   { week: "February", amount: 305 },
   { week: "March", amount: 237 },
   { week: "April", amount: 73 }
]

const chartConfig: ChartConfig = {
   amount: {
      label: "Monto",
      color: "hsl(var(--chart-1))",
   },
}

export function Prueba() {
   return (
      <Card>
         <CardHeader>
            <CardTitle>dsds</CardTitle>
            <CardDescription>dsds</CardDescription>
         </CardHeader>
         <CardContent>
            <ChartContainer config={chartConfig}>
               <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                     top: 20,
                     left: 12,
                     right: 12,
                  }}
               >
                  <CartesianGrid vertical={false} />
                  <XAxis
                     dataKey="week"
                     tickLine={false}
                     axisLine={false}
                     tickMargin={8}
                     tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                     cursor={false}
                     content={<ChartTooltipContent indicator="line" />}
                  />
                  <Line
                     dataKey="amount"
                     type="natural"
                     stroke="var(--color-amount)"
                     strokeWidth={2}
                     dot={{
                        fill: "var(--color-amount)",
                     }}
                     activeDot={{
                        r: 6,
                     }}
                  >
                     <LabelList
                        position="top"
                        offset={12}
                        className="fill-foreground"
                        fontSize={12}
                     />
                  </Line>
               </LineChart>
            </ChartContainer>
         </CardContent>
         <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
               Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
               Showing total visitors for the last 6 months
            </div>
         </CardFooter>
      </Card>
   )
}

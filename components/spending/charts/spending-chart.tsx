"use client"

import { TrendingDown } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

function SpendingChart({ cardTitle, cardDescription, footerTitle, footerDescription, chartData, chartConfig }: SpendingChartProps) {
   return (
      <Card>
         <CardHeader>
            <CardTitle>{cardTitle}</CardTitle>
            <CardDescription>{cardDescription}</CardDescription>
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
                     tickFormatter={(value) => value.slice(0, 4)}
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
               {footerTitle} <TrendingDown className="text-red-500 h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
               {footerDescription}
            </div>
         </CardFooter>
      </Card>
   )
}

export interface amountWeek {
   week: "S1" | "S2" | "S3" | "S4";
   amount: number;
}

export interface SpendingChartProps {
   cardTitle: string;
   cardDescription: string;
   footerTitle: string;
   footerDescription: string;
   chartData: amountWeek[];
   chartConfig: ChartConfig
}

export default SpendingChart
import Link from "next/link";
import { twMerge } from "tailwind-merge";

function TotalAmountCard({ name, colorCard, colorText, symbol, amount = 0 }: TotalAmountCardProps) {
   return (
      <div className={twMerge("flex flex-col gap-2 rounded-xl border p-4", colorCard)}>
         <p className="text-muted-foreground text-sm">{name}</p>
         <p className={twMerge("text-md md:text-xl lg:text-2xl font-bold", colorText)}>{`${symbol} ${amount.toFixed(2)}`}</p>
         <Link className="underline text-sm text-muted-foreground" href="#">Ver más</Link>
      </div>
   )
}

interface TotalAmountCardProps {
   name: string;
   colorCard: string;
   colorText: string;
   symbol: string;
   amount: number;
}

export default TotalAmountCard
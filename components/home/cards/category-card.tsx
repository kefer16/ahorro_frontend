function CategoryCard({ name, year, symbol, amount, totalAmount, primaryCategory }: CategoryCardProps) {
   const percent = (amount * 100) / totalAmount;
   return (
      <div className="flex flex-col rounded-lg border bg-card shadow-sm">
         <div className="flex items-center gap-4  px-4 min-h-[72px] py-2 justify-between">
            <div className="flex flex-col justify-center">
               <p className="text-sm font-medium  ">{name}</p>
               <p className="text-muted-foreground text-sm font-normal">{year}</p>
            </div>
            <div className="shrink-0"><p className="text-base font-normal ">{`${symbol} ${amount.toFixed(2)}`}</p></div>
         </div>
         <div className="flex flex-col gap-3 p-4">
            <div className="flex gap-6 justify-between">
               <p className=" text-base font-medium ">{`${percent.toFixed(2)} %`}</p>
               <p className=" text-sm font-normal ">{`${symbol} ${totalAmount.toFixed(2)}`}</p>
            </div>
            <div className="rounded bg-gray-300/50"><div className="h-2 rounded bg-primary" style={{ width: `${percent}%` }}></div></div>
            <p className="text-muted-foreground text-sm font-normal ">{primaryCategory}</p>
         </div>
      </div>
   )
}

interface CategoryCardProps {
   name: string;
   year: number;
   symbol: string;
   amount: number;
   totalAmount: number;
   primaryCategory: string;
}


export default CategoryCard
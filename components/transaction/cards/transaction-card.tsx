function TransactionCard({ name, amount, date, is_charge, money }: TransactionCardProps) {
   return (
      <div className="flex gap-2 p-4 items-center justify-between">
         <div className="flex flex-col">
            <p>{name}</p>
            <div className="flex">
               <span className="text-sm text-muted-foreground">{date}</span>
            </div>
         </div>
         <div>
            {
               is_charge ?
                  <span className="text-xl text-red-500">{`- ${money} ${amount.toFixed(2)}`}</span>
                  :
                  <span className="text-xl">{`${money} ${amount.toFixed(2)}`}</span>
            }
         </div>
      </div>
   )
}

interface TransactionCardProps {
   name: string;
   date: string;
   is_charge: boolean;
   money: string;
   amount: number;
}

export default TransactionCard
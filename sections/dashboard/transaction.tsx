import DateRangePicker from "@/components/date-range-picker"
import SubtitleSection from "@/components/subtitle-section"
import TitleSection from "@/components/title-section"
import TransactionCard from "@/components/transaction/cards/transaction-card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { transactionsData } from "@/data/transactions"
import { Search } from "lucide-react"

function TransactionSection() {
   const transactions = transactionsData;
   return (
      <div className="py-4 flex flex-col gap-4">
         <TitleSection title="Transacciones" />
         <SubtitleSection title="Filtrar" />
         <div className="flex gap-2 items-center justify-between">
            <DateRangePicker />
            <Button variant="outline">
               <Search size={24} />
            </Button>
         </div>
         <SubtitleSection title="Movimientos" />
         <div className="flex flex-col gap-2">
            {
               transactions && transactions.map((item, index) => (
                  <div key={item.id}>
                     <TransactionCard
                        key={item.id}
                        name={item.name}
                        date={item.date}
                        amount={item.amount}
                        is_charge={item.is_charge}
                        money={item.money}
                     />
                     {
                        (index + 1 === transactions.length) ?
                           <></>
                           :
                           <Separator />
                     }
                  </div>

               ))
            }
         </div>

      </div>
   )
}

export default TransactionSection
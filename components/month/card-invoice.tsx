import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import { IDataMovements } from "@/data/movements"

function CardInvoice({ data }: CardInvoiceProps) {
   const { code, date, concep, money, amount, type } = data;
   return (
      <Card className="p-4 flex items-center justify-between">
         <div className="w-full flex gap-4">
            <span className="w-1/12 font-bold text-sm">{code}</span>
            <span className="w-3/12 text-muted-foreground text-sm">{date}</span>
            <span className="w-4/12 text-muted-foreground text-sm">{concep}</span>
            <span className="w-2/12 font-bold text-xl text-right">{`${money} ${amount}`}</span>
            <div className="w-2/12 flex justify-center">
               {type ?
                  <Badge className="bg-green-500 hover:bg-green-500">Ingreso</Badge> :
                  <Badge className="bg-red-500 hover:bg-red-500">Salida</Badge>
               }
            </div>
         </div>
         <div className="flex justify-center">
            <ChevronRight size={20} className="text-gray-400" />
         </div>
      </Card >

   )
}

interface CardInvoiceProps {
   data: IDataMovements
}

export default CardInvoice
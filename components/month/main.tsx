import CardInvoice from "@/components/month/card-invoice"
import Combobox from "@/components/combobox"
import { Input } from "@/components/ui/input"
import { dataMovements } from "@/data/movements"

function Main() {
   const movements = dataMovements;
   return (
      <div className="bg-background px-4 lg:px-0">
         <div className="flex items-end justify-between">
            <div className="flex flex-col gap-2">
               <h2 className="text-3xl font-bold">Enero - 2024</h2>
               <p className="text-muted-foreground text-sm">Total de movimientos son 7</p>
            </div>
            <div className="flex gap-2">
               <Combobox textSelected="Elija el estado" list={[{ label: "Ingreso", value: "in" }, { label: "Salida", value: "sa" }]} />
               <Input id="import" type="file" />
            </div>
         </div>
         <div className="py-4 flex flex-col gap-2">
            {
               movements && movements.map((item) => (
                  <CardInvoice key={item.code} data={item} />
               ))
            }
         </div>
      </div>
   )
}

export default Main
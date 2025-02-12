import { ChartPie, House, Plus, ReceiptText, Settings } from "lucide-react"
import Link from "next/link"
import { Separator } from "../ui/separator"

function Footer() {
   return (
      <footer className="fixed bottom-0 left-0 w-full h-[60px] flex justify-around shadow-sm bg-card">
         <div className="w-full">
            <Separator />
            <div className="w-full flex gap-2 px-4 pb-3 pt-2">
               <Link href="/dashboard" className="just flex flex-1 flex-col items-center justify-end gap-1 text-muted-foreground " >
                  <House size={22} />
                  <p className="text-xs font-medium  ">Principal</p>
               </Link>
               <Link href="/dashboard/transactions" className="just flex flex-1 flex-col items-center justify-end gap-1 text-muted-foreground">
                  <ReceiptText size={22} />
                  <p className="text-xs font-medium  ">Transacciones</p>
               </Link>
               <Link href="/dashboard/add" className="just flex flex-1 flex-col items-center justify-end gap-1 text-muted-foreground">
                  <Plus size={22} />
                  <p className="text-xs font-medium  ">Agregar</p>
               </Link>
               <Link href="/dashboard/spending" className="just flex flex-1 flex-col items-center justify-end gap-1 text-muted-foreground">
                  <ChartPie size={22} />
                  <p className="text-xs font-medium  ">Gráficos</p>
               </Link>
               <Link href="/dashboard/configuration" className="just flex flex-1 flex-col items-center justify-end gap-1 text-muted-foreground">
                  <Settings size={22} />
                  <p className="text-xs font-medium  ">Configuración</p>
               </Link>
            </div>
         </div>

      </footer>
   )
}

export default Footer
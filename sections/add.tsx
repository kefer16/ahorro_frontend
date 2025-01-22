import Combobox from "@/components/combobox"
import DatePicker from "@/components/date-picker"
import SubtitleSection from "@/components/subtitle-section"
import TitleSection from "@/components/title-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import Link from "next/link"

function AddSection() {
   return (
      <div className="py-4 flex flex-col gap-4">
         <TitleSection title="Agregar" />
         {/* <div className="flex flex-col gap-4 border bg-card p-4 rounded-md"> */}
         <div className="flex flex-col gap-2">
            <SubtitleSection title="Datos de Transacción" />
            <p className="text-muted-foreground text-sm">Agrege un pago o ingreso que haya realizado</p>
         </div>
         <div className="flex flex-col gap-2">
            <Label>Fecha</Label>
            <DatePicker />
         </div>
         <div className="flex flex-col gap-2">
            <Label>Titulo</Label>
            <Input value={""} placeholder="Eje. Pago Universidad..." />
         </div>
         <div className="flex flex-col gap-2">
            <Label>Categoría</Label>
            <div className="flex gap-2 items-center">
               <Combobox textSelected="Select. Categoría" list={[{ label: "Casa", value: "01" }, { label: "Streaming", value: "02" }]} />
               <Link className="flex gap-2 underline" href="#">
                  <Plus size={24} />
                  Agregar más
               </Link>
            </div>
         </div>
         <div className="flex flex-col gap-2">
            <Label>Monto</Label>
            <Input value={""} placeholder="Eje. 30.00" />
         </div>
         <Button variant="default" >Agregar</Button>
         {/* </div> */}


      </div>
   )
}

export default AddSection
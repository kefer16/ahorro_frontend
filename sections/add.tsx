import Combobox from "@/components/combobox"
import DatePicker from "@/components/date-picker"
import SubtitleSection from "@/components/subtitle-section"
import TitleSection from "@/components/title-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

function AddSection() {
   return (
      <div className="py-4 flex flex-col gap-4">
         <TitleSection title="Agregar" />
         <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
               <SubtitleSection title="Datos de Transacción" />
               <p className="text-muted-foreground text-sm">Agrege una transaccion que halla realizao en su cuenta:</p>
            </div>
            <div className="flex flex-col gap-2">
               <Label>Fecha</Label>
               <div className="w-[250px]">
                  <DatePicker />
               </div>
               <p className="text-muted-foreground text-sm">Ingrese la fecha de la trasancción</p>
            </div>
            <div className="flex flex-col gap-2">
               <Label htmlFor="title">Titulo</Label>
               <Input type="text" id="title" name="title" />
               <p className="text-muted-foreground text-sm">Eje: Pago de la universidad</p>
            </div>
            <div className="flex flex-col gap-2">
               <Label>Categoría</Label>
               <div className="flex justify-between gap-2 items-center">
                  <div className="w-[250px]">
                     <Combobox
                        textPlaceholder="Select. Categoría"
                        textTitleList="Categoría"
                        list={[{ label: "Casa", value: "01" }, { label: "Streaming", value: "02" }]}
                     />
                  </div>
                  <Link className="text-sm text-muted-foreground underline" href="#">
                     Agregar más
                  </Link>
               </div>
               <p className="text-muted-foreground text-sm">La categoría le servirá para agrupar sus pagos</p>
            </div>
            <div className="flex flex-col gap-2">
               <Label>Tipo Pago</Label>
               <div className="w-[250px]">
                  <Combobox
                     textPlaceholder="Select. tipo pago"
                     textTitleList="Tipo pago"
                     list={[{ label: "Ingreso", value: "01" }, { label: "Salida", value: "02" }]}
                  />
               </div>
               <div>
                  <p className="text-muted-foreground text-sm">Información:</p>
                  <ol className="w-full">
                     <li className="text-muted-foreground text-sm">- Ingreso: suma a saldo</li>
                     <li className="text-muted-foreground text-sm">- Salida: resta a su saldo</li>
                  </ol>
               </div>
            </div>
            <div className="flex flex-col gap-2">
               <Label htmlFor="amount">Monto</Label>
               <Input type="number" id="amount" name="amount" placeholder="0.00" />
               <p className="text-muted-foreground text-sm">La moneda del monto sera la misma de la cuenta</p>
            </div>
            <Button variant="default" >Agregar</Button>
         </div>


      </div>
   )
}

export default AddSection
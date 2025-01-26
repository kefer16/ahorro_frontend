import SubtitleSection from "@/components/subtitle-section"
import TitleSection from "@/components/title-section"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

function ChangeHomeSection() {
   return (
      <div className="py-4 flex flex-col gap-4">
         <TitleSection title="Principal" />
         <div className="flex flex-col gap-2">
            <SubtitleSection title="Configuración" />
            <p className="text-muted-foreground">Escoge que apartado se mostrará en tu pantalla principal</p>
         </div>
         <form className="flex flex-col gap-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
               <div className="space-y-0.5">
                  <Label htmlFor="">Hace 3 meses</Label>
                  <p className="text-muted-foreground text-sm">
                     Muestra las cantidades total de consumo, de hace 3 meses.
                  </p>
               </div>
               <div>
                  <Switch
                     checked={true}
                  />
               </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
               <div className="space-y-0.5">
                  <Label htmlFor="">Categorías</Label>
                  <p className="text-muted-foreground text-sm">
                     Muestra 3 categorías en que se gasto más.
                  </p>
               </div>
               <div>
                  <Switch
                     checked={true}
                  />
               </div>
            </div>
            <Button variant="default" className="w-full">Guardar</Button>
         </form>
      </div>

   )
}

export default ChangeHomeSection
import SubtitleSection from "@/components/subtitle-section"
import TitleSection from "@/components/title-section"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { updateHomeConfiguration } from "@/services/configuration/change-home"

function ChangeHomeSection() {
   return (
      <div className="py-4 flex flex-col gap-4">
         <TitleSection title="Principal" />
         <div className="flex flex-col gap-2">
            <SubtitleSection title="Configuración" />
            <p className="text-muted-foreground text-sm">Escoge que apartado se mostrará en tu pantalla principal</p>
         </div>
         <form
            className="flex flex-col gap-4"
            action={updateHomeConfiguration}
         >
            <div className="flex items-center justify-between rounded-lg border p-4">
               <div className="space-y-0.5">
                  <Label className="leading-3">Hace 3 meses</Label>
                  <p className="text-muted-foreground text-sm">
                     Muestra las cantidades total de consumo, de hace 3 meses.
                  </p>
               </div>
               <div>
                  <Switch
                     name="months_ago"
                  />
               </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
               <div className="flex flex-col gap-2">
                  <Label className="leading-3">Categorías</Label>
                  <p className="text-muted-foreground text-sm">
                     Muestra 3 categorías en que se gasto más.
                  </p>
               </div>
               <div>
                  <Switch
                     name="categories"
                  />
               </div>
            </div>
            <Button variant="default" className="w-full">Guardar</Button>
         </form>
      </div>

   )
}

export default ChangeHomeSection
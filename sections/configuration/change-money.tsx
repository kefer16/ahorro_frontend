import SubtitleSection from "@/components/subtitle-section"
import TitleSection from "@/components/title-section"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

function ChangeMoneySection() {
   return (
      <div className="py-4 flex flex-col gap-4">
         <TitleSection title="Moneda" />
         <div className="flex flex-col gap-2">
            <SubtitleSection title="Instrucciones" />
            <p className="text-muted-foreground text-sm">Elija la moneda en la que quiere visualizar sus transacciones.</p>
         </div>
         <form
            className="flex flex-col gap-4"
         // action={importFileTransactions}
         >
            <div className="flex flex-col gap-2">
               <ToggleGroup className="flex gap-5" type="single">
                  <ToggleGroupItem className="flex flex-col p-10 text-xl" variant="outline" value="sol"><span className="text-muted-foreground text-sm">S/.</span>SOLES </ToggleGroupItem>
                  <ToggleGroupItem className="flex flex-col p-10 text-xl" variant="outline" value="dol"><span className="text-muted-foreground text-sm">$.</span>DOLARES </ToggleGroupItem>
               </ToggleGroup>
            </div>
            <Button variant="default" type="submit">Guardar</Button>
         </form>
      </div>
   )
}

export default ChangeMoneySection
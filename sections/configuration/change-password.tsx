import SubtitleSection from "@/components/subtitle-section"
import TitleSection from "@/components/title-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { changePassword } from "@/services/configuration/change-password"

function ChangePasswordSection() {
   return (
      <div className="py-4 flex flex-col gap-4">
         <TitleSection title="Contraseña" />
         <div className="flex flex-col gap-2">
            <SubtitleSection title="Instrucciones" />
            <p className="text-muted-foreground text-sm">Se te pedira que ingreses tu contraseña actual para verificar que realmente eres tú:</p>
         </div>
         <form className="flex flex-col gap-4" action={changePassword}>
            <div className="flex flex-col gap-2">
               <Label htmlFor="current_password">Contraseña actual</Label>
               <Input type="password" id="current_password" name="current_password" placeholder="" />
            </div>
            <div className="flex flex-col">
               <p className="text-muted-foreground text-sm">Ingrese una contraseña segura:</p>
               <ol className="w-full">
                  <li className="text-muted-foreground text-sm">- Mínimo 8 caracteres</li>
                  <li className="text-muted-foreground text-sm">- Una mayúscula</li>
                  <li className="text-muted-foreground text-sm">- Una minúscula</li>
                  <li className="text-muted-foreground text-sm">- Un número</li>
                  <li className="text-muted-foreground text-sm">- Un carácter especial (@, #, $, etc.)</li>
               </ol>
            </div>
            <div className="flex flex-col gap-2">
               <Label htmlFor="new_password">Contraseña Nueva</Label>
               <Input type="password" id="new_password" name="new_password" placeholder="" />
            </div>
            <div className="flex flex-col gap-2">
               <Label htmlFor="repeat_password">Repita Contraseña </Label>
               <Input type="password" id="repeat_password" name="repeat_password" placeholder="" />
            </div>
            <Button >Guardar</Button>
         </form>
      </div>

   )
}

export default ChangePasswordSection
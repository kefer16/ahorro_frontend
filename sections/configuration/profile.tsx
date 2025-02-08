import SubtitleSection from "@/components/subtitle-section"
import TitleSection from "@/components/title-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { updateDataProfile } from "@/services/configuration/profile"

async function ProfileSection() {
   return (
      <div className="py-4 flex flex-col gap-4">
         <TitleSection title="Perfil" />
         <div className="flex flex-col gap-2">
            <SubtitleSection title="Datos" />
            <p className="text-muted-foreground text-sm">Datos principales del usuario.</p>
         </div>
         <form
            className="flex flex-col gap-4"
            action={updateDataProfile}
         >
            <div className="flex flex-col gap-2">
               <Label htmlFor="user">Usuario</Label>
               <Input type="text" id="user" name="user" />
               <p className="text-muted-foreground text-sm">Eje: Juan04</p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
               <div className="flex flex-col gap-2 md:w-1/2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input type="text" id="name" name="name" />
                  <p className="text-muted-foreground text-sm">Eje: Juan</p>
               </div>
               <div className="flex flex-col gap-2 md:w-1/2">
                  <Label htmlFor="last_name">Apellido</Label>
                  <Input id="last_name" name="last_name" />
                  <p className="text-muted-foreground text-sm">Eje: Gonzales</p>
               </div>
            </div>
            <div className="flex flex-col gap-2">
               <Label htmlFor="email">Correo</Label>
               <Input id="email" name="email" placeholder="email@gmail.com" />
               <p className="text-muted-foreground text-sm">Tener en cuenta que el correo que se ingrese, se le enviará un mensaje de verificación</p>
            </div>
            <Button className="w-full" type="submit">Guardar</Button>
         </form >
         <div className="flex flex-col gap-2">
            <SubtitleSection title="Eliminar Cuenta" />
            <p className="text-muted-foreground text-sm">Una vez que elimine su cuenta, no hay vuelta atrás. Por favor, tenga la certeza.</p>
         </div>
         <Button variant="destructive" className="w-full" type="submit">Eliminar Cuenta</Button>
      </div >
   )
}

export default ProfileSection
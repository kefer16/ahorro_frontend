import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function RegisterSection() {
   return (
      <div className="flex flex-col gap-6">
         <div>
            <h2 className="font-bold text-xl">Bienvenido a Save</h2>
            <p className="text-sm max-w-sm">Ingrese sus datos para disfrutar de Save</p>
         </div>
         <form className="flex flex-col gap-6" >
            <div className="flex flex-col md:flex-row gap-2">
               <div className="md:w-1/2">
                  <Label htmlFor="firstname">Nombre</Label>
                  <Input id="firstname" name="firstname" placeholder="Juan" type="text" />
               </div>
               <div className="md:w-1/2">
                  <Label htmlFor="lastname">Apellido</Label>
                  <Input id="lastname" name="lastname" placeholder="Gonzales" type="text" />
               </div>
            </div>
            <div>
               <Label htmlFor="email">Corrreo</Label>
               <Input id="email" name="email" placeholder="correo@dominio.com" type="email" />
            </div>
            <div>
               <Label htmlFor="password">Contraseña</Label>
               <Input id="password" name="password" type="password" />
            </div>
            <div>
               <Label htmlFor="repeat_password">Repita su contraseña</Label>
               <Input id="repeat_password" name="repeat_password" type="password"
               />
            </div>
            <Button type="submit" variant="default">Registrarse</Button>
         </form>
      </div>
   )
}

export default RegisterSection
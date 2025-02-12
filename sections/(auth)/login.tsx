import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import Link from "next/link"

function LoginSection({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
   return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
         <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Login</h2>
            <p className="text-sm text-muted-foreground">Ingrese su correo electrónico a continuación para iniciar sesión en su cuenta</p>
         </div>
         <form>
            <div className="flex flex-col gap-6">
               <div className="grid gap-2">
                  <Label htmlFor="email">Correo</Label>
                  <Input
                     id="email"
                     type="email"
                     placeholder="correo@example.com"
                     required
                  />
               </div>
               <div className="grid gap-2">
                  <div className="flex items-center">
                     <Label htmlFor="password">Contraseña</Label>
                     <Link href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline" >
                        Olvidó su contraseña?
                     </Link>
                  </div>
                  <Input id="password" type="password" required />
               </div>
               <Link href="/dashboard/">
                  <Button type="submit" className="w-full">
                     Login
                  </Button>
               </Link>
            </div>
            <div className="mt-4 text-center text-sm">
               Aún no tiene cuenta?
               <Link href="/register" className="ml-2 underline underline-offset-4">
                  Registrate
               </Link>
            </div>
         </form>
      </div>

   )
}

export default LoginSection
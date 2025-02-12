import { Button } from "@/components/ui/button"
import Link from "next/link"

function WelcomeSection() {
   return (
      <div>
         <main className="relative h-screen overflow-auto ">
            <div className="px-4 container mx-auto lg:px-0">
               <div className="h-[60px]" />
               <div className="flex flex-col items-center gap-4">
                  <h1 className="text-2xl text-center">Bienvenido a Save</h1>
                  <Link href="/login">
                     <Button variant="default"> Ir a Login</Button>
                  </Link>
               </div>
               <div className="h-[60px]" />
            </div>
         </main>
      </div>
   )
}

export default WelcomeSection
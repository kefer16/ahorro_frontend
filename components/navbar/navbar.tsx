import ModeToggle from "@/components/navbar/mode-toggle"
import NavbarAvatar from "@/components/navbar/navbar-avatar"
import NavbarNameCompany from "@/components/navbar/navbar-name-company"
import { Separator } from "@/components/ui/separator"

function Navbar() {
   return (
      <header className="absolute top-0 left-0 z-50 w-full h-[60px] bg-card">
         <div className="w-full h-[60px] flex justify-around">
            <div className="px-4 w-full flex items-center gap-4 justify-between">
               <NavbarNameCompany />
               <ModeToggle />
            </div>
            <div>
               <Separator orientation="vertical" />
            </div>
            <div className="px-4 flex items-center justify-center">
               <NavbarAvatar />
            </div>
         </div>
         <Separator />
      </header>
   )
}

export default Navbar
import { PiggyBank } from "lucide-react"
import Link from "next/link"

function NavbarNameCompany() {
   return (
      <Link href="/" className="flex gap-2 font-extrabold text-2xl">
         <PiggyBank className="text-primary" size={30} strokeWidth={2} />
         {/* <h1 className="bg-gradient-to-tl from-pink-600 to-yellow-600 inline-block text-transparent bg-clip-text"></h1> */}
      </Link>

   )
}

export default NavbarNameCompany
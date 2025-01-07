import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";

function ConfigurationCard({ isDanger, icon, link, title, description }: ConfigurationCardProps) {
   return (
      <>
         {
            isDanger ?
               <Link href={link} className="flex justify-between items-center rounded-xl border bg-red-500/10 border-red-500/30 p-4">
                  <div className="flex gap-4 items-center">
                     {icon}
                     <div className="flex flex-col">
                        <p className="font-semibold text-md text-red-500">{title}</p>
                        <p className="text-muted-foreground font-normal text-sm">{description}</p>
                     </div>
                  </div>
                  <ChevronRight size={22} className="text-red-500" />
               </Link>
               :
               <Link href={link} className="flex justify-between items-center rounded-xl border bg-card p-4">
                  <div className="flex gap-4 items-center">
                     {icon}
                     <div className="flex flex-col">
                        <p className="font-semibold text-md">{title}</p>
                        <p className="text-muted-foreground font-normal text-sm">{description}</p>
                     </div>
                  </div>
                  <ChevronRight size={22} className="text-muted-foreground" />
               </Link>
         }
      </>

   )
}

interface ConfigurationCardProps {
   isDanger: boolean;
   icon: ReactElement;
   link: string;
   title: string;
   description: string;
}

export default ConfigurationCard
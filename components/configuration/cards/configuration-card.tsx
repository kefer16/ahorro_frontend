import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";

function ConfigurationCard({ isDanger, icon, link, title, description }: ConfigurationCardProps) {
   return (
      <>
         {
            isDanger ?
               <Link href="../login" className="flex justify-between items-center rounded-xl border bg-red-500/10 border-red-500/30 p-4">
                  <div className="flex gap-4 items-center w-full">
                     <div className="flex justify-center items-center w-[30px]">
                        {icon}
                     </div>
                     <div className="flex flex-col w-full">
                        <p className="font-semibold text-md text-red-500">{title}</p>
                        <p className="text-muted-foreground font-normal text-sm">{description}</p>
                     </div>
                  </div>
                  <div className="flex justify-center items-center w-[30px]">
                     <ChevronRight size={22} className="text-red-500" />
                  </div>
               </Link>
               :
               <Link href={`/dashboard/configuration/${link}`} className="flex justify-between gap-4 items-center rounded-xl border bg-card p-4">
                  <div className="flex gap-4 items-center w-full">
                     <div className="flex justify-center items-center w-[30px]">
                        {icon}
                     </div>
                     <div className="flex flex-col w-full">
                        <p className="font-semibold text-md">{title}</p>
                        <p className="text-muted-foreground font-normal text-sm">{description}</p>
                     </div>
                  </div>
                  <div className="flex justify-center items-center w-[30px]">
                     <ChevronRight size={22} className="text-muted-foreground" />
                  </div>

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
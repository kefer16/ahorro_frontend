"use client"

import SubtitleSection from "@/components/subtitle-section"
import { useTheme } from "next-themes"
import TitleSection from "@/components/title-section"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Moon, Sun } from "lucide-react"


function ChangeThemeSection() {
   const { setTheme } = useTheme();

   const changeThemeLight = () => {
      setTheme("light")
   }
   const changeThemeDark = () => {
      setTheme("dark")
   }
   return (
      <div className="py-4 flex flex-col gap-4">
         <TitleSection title="Tema" />
         <div className="flex flex-col gap-2">
            <SubtitleSection title="Instrucciones" />
            <p className="text-muted-foreground text-sm">Elija su tema de preferencia, para visualizar en toda la aplicación:</p>
         </div>
         <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
               <ToggleGroup className="flex gap-5" type="single">
                  <ToggleGroupItem
                     className="flex flex-col p-10"
                     variant="outline"
                     value="light"
                     onClick={changeThemeLight}
                  >
                     <span className="text-muted-foreground text-sm">
                        <Moon size={24} />
                     </span>CLARO
                  </ToggleGroupItem>
                  <ToggleGroupItem
                     className="flex flex-col p-10"
                     variant="outline"
                     value="dark"
                     onClick={changeThemeDark}
                  >
                     <span className="text-muted-foreground text-sm">
                        <Sun size={24} />
                     </span>OSCURO
                  </ToggleGroupItem>
               </ToggleGroup>
            </div>
         </div>
      </div>

   )
}

export default ChangeThemeSection
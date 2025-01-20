import Combobox from "@/components/combobox"
import { Prueba } from "@/components/saving/charts/prueba"
import SubtitleSection from "@/components/subtitle-section"
import TitleSection from "@/components/title-section"

function SavingSection() {
   return (
      <div className="py-4 flex flex-col gap-4">
         <TitleSection title="Ahorros" />
         <SubtitleSection title="Año" />
         <Combobox textSelected="Select. Año" list={[{ label: "2025", value: "2025" }, { label: "2024", value: "2024" }]} />
         <SubtitleSection title="Meses" />
         <div>
            <Prueba />
         </div>
      </div>
   )
}

export default SavingSection
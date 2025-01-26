import ConfigurationCard from "@/components/configuration/cards/configuration-card"
import TitleSection from "@/components/title-section"
import { configurationData } from "@/data/configuration"

function ConfigurationSection() {
   const configurations = configurationData;
   return (
      <div className="py-4 flex flex-col gap-4">
         <TitleSection title="Configuración" />
         <div className="flex flex-col gap-2">
            {
               configurations && configurations.map((item) => (
                  <ConfigurationCard key={item.title} isDanger={item.isDanger} icon={item.icon} title={item.title} description={item.description} link={item.link} />
               ))
            }
         </div>

      </div>
   )
}

export default ConfigurationSection
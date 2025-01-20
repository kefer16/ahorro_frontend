import Combobox from "@/components/combobox"
import SpendingChart from "@/components/spending/charts/spending-chart"
import SubtitleSection from "@/components/subtitle-section"
import TitleSection from "@/components/title-section"
import { spendingYearsData } from "@/data/spending-years";

function SpendingSection() {
   const spending = spendingYearsData[0].config;
   return (
      <div className="py-4 flex flex-col gap-4">
         <TitleSection title="Gastos" />
         <SubtitleSection title="Año" />
         <Combobox textSelected="Select. Año" list={[{ label: "2025", value: "2025" }, { label: "2024", value: "2024" }]} />
         <SubtitleSection title="Meses" />
         <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {
               spending && spending.map((item) => (
                  <SpendingChart
                     key={item.cardTitle}
                     cardTitle={item.cardTitle}
                     cardDescription={item.cardDescription}
                     footerTitle={item.footerTitle}
                     footerDescription={item.footerDescription}
                     chartConfig={item.chartConfig}
                     chartData={item.chartData}
                  />
               ))
            }
         </div>

      </div>
   )
}

export default SpendingSection
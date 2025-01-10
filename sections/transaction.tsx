import DateRangePicker from "@/components/date-range-picker"
import SubtitleSection from "@/components/subtitle-section"
import TitleSection from "@/components/title-section"

function TransactionSection() {
   // const anios = aniosData;
   // const months = monthsData;
   return (
      <div className="py-4 flex flex-col gap-4">
         <TitleSection title="Transacciones" />
         <SubtitleSection title="Filtrar" />
         <div className="flex gap-2">
            <DateRangePicker />
         </div>
      </div>
   )
}

export default TransactionSection
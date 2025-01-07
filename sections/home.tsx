import CategoryCard from "@/components/home/cards/category-card"
import TotalAmountCard from "@/components/home/cards/total-amount-card";
import SubtitleSection from "@/components/subtitle-section";
import SubtitleLinkSection from "@/components/subtitle-section copy";
import TitleSection from "@/components/title-section"
import { categoriesData } from "@/data/categories";
import { totalAmountsData } from "@/data/total_amounts";

function HomeSection() {
   const categories = categoriesData;
   const totalAmounts = totalAmountsData;
   return (
      <div className="py-4 flex flex-col gap-4">
         <TitleSection title="Principal" />
         <SubtitleSection title="Hace 3 meses" />
         <div className="grid grid-cols-3 gap-2">
            {
               totalAmounts && totalAmounts.map((item) => (
                  <TotalAmountCard
                     key={item.name}
                     name={item.name}
                     colorCard={item.colorCard}
                     colorText={item.colorText}
                     symbol={item.symbol}
                     amount={item.totalAmount}
                  />
               ))
            }
         </div>
         <SubtitleLinkSection title="Categorías" link="#" linkText="Mostrar más" />
         <div className="flex flex-col gap-2">
            {
               categories && categories.map((item) => (
                  <CategoryCard
                     key={item.name}
                     name={item.name}
                     year={item.year}
                     symbol={item.symbol}
                     amount={item.amount}
                     totalAmount={item.totalAmount}
                     primaryCategory={item.primaryCategory}
                  />
               ))
            }
         </div>
      </div>
   )
}

export default HomeSection
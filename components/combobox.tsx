import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"

function Combobox({ activeTitleList = false, textPlaceholder, textTitleList, list }: ComboboxProps) {

   return (
      <Select>
         <SelectTrigger className="w-full">
            <SelectValue placeholder={textPlaceholder} />
         </SelectTrigger>
         <SelectContent>
            <SelectGroup>
               {activeTitleList && <SelectLabel>{textTitleList}</SelectLabel>}
               {
                  list.map((item) => (
                     <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                  ))
               }
            </SelectGroup>
         </SelectContent>
      </Select>
   )
}

export interface ICombobox {
   value: string;
   label: string;
}

interface ComboboxProps {
   textPlaceholder: string;
   activeTitleList?: boolean;
   textTitleList: string;
   list: ICombobox[]
}

export default Combobox
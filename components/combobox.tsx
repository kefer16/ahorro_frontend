"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from "react"


function Combobox({ textSelected, list }: ComboboxProps) {
   const [open, setOpen] = useState(false)
   const [value, setValue] = useState("")

   return (
      <Popover open={open} onOpenChange={setOpen}>
         <PopoverTrigger asChild>
            <Button
               variant="outline"
               role="combobox"
               aria-expanded={open}
               className="w-[200px] justify-between"
            >
               {value
                  ? list.find((item) => item.value === value)?.label
                  : textSelected}
               <ChevronsUpDown className="opacity-50" />
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-[200px] p-0">
            <Command>
               <CommandInput placeholder="Search framework..." />
               <CommandList>
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                     {list.map((item) => (
                        <CommandItem
                           key={item.value}
                           value={item.value}
                           onSelect={(currentValue) => {
                              setValue(currentValue === value ? "" : currentValue)
                              setOpen(false)
                           }}
                        >
                           {item.label}
                           <Check
                              className={cn(
                                 "ml-auto",
                                 value === item.value ? "opacity-100" : "opacity-0"
                              )}
                           />
                        </CommandItem>
                     ))}
                  </CommandGroup>
               </CommandList>
            </Command>
         </PopoverContent>
      </Popover>
   )
}

interface ICombobox {
   value: string;
   label: string;
}

interface ComboboxProps {
   textSelected: string;
   list: ICombobox[]
}

export default Combobox
import Combobox from "../combobox"

function ModeToggle() {

   return (
      <div className="w-[250px]">
         <Combobox
            textPlaceholder="Select. Cuenta"
            textTitleList="Cuentas"
            list={[{ label: "Cuenta SOLES - S/. 2000.00", value: "00001" }, { label: "Cuenta DOLARES - $. 199.00", value: "00002" }]}
         />
      </div>
   )
}

export default ModeToggle
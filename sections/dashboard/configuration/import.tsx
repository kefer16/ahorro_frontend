import DocumentUploader from "@/components/inputs/file/document-uploader"
import SubtitleSection from "@/components/subtitle-section"
import TitleSection from "@/components/title-section"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { importFileTransactions } from "@/services/configuration/importar"

function ImportSection() {
   return (
      <div className="py-4 flex flex-col gap-4">
         <TitleSection title="Importar" />
         <div className="flex flex-col gap-2">
            <SubtitleSection title="Instrucciones" />
            <p className="text-muted-foreground text-sm">Elija el archivo de su explorador y genere para cargar las transacciones.</p>
         </div>
         <form
            className="flex flex-col gap-4"
            action={importFileTransactions}
         >

            <div className="flex flex-col gap-2">
               <Label htmlFor="user">Archivo</Label>
               <DocumentUploader inputName="file" />
            </div>
            <Button variant="default" type="submit">Generar</Button>
         </form>
      </div>

   )
}

export default ImportSection
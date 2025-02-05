"use client";

import { cn } from "@/lib/utils";
import { useFileInput } from "./use-file-input";
import { Button } from "@/components/ui/button";

export function DocumentUploader({ inputName }: DocumentUploaderProps) {
   const { fileName, error, fileInputRef, handleFileSelect, clearFile } = useFileInput({ accept: ".pdf,.doc,.docx", maxSize: 10 });
   return (
      <div className="space-y-4">
         <div
            className={cn(
               "border-2 border-dashed rounded-lg p-8 text-center",
               "hover:border-brand/50 transition-colors cursor-pointer",
               error && "border-red-500"
            )}
            onClick={() => fileInputRef.current?.click()}
         >
            {fileName ? (
               <div className="space-y-2">
                  <p className="text-sm font-medium">{fileName}</p>
                  <Button
                     onClick={(e) => {
                        e.stopPropagation();
                        clearFile();
                     }}
                     variant="secondary"
                     size="sm"
                  >
                     Eliminar
                  </Button>
               </div>
            ) : (
               <p className="text-sm text-muted-foreground">
                  Haga clic para cargar el archivo<br />
                  PDF, DOC hasta 10MB
               </p>
            )}
         </div>

         <input
            name={inputName}
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileSelect}
         />

         {error && (
            <p className="text-sm text-red-500">
               Error: {error}
            </p>
         )}
      </div>
   );
}

interface DocumentUploaderProps {
   inputName: string;
}

export default DocumentUploader;
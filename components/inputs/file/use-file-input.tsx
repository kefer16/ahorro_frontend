import { useState, useRef } from "react";

interface UseFileInputOptions {
   accept?: string;
   maxSize?: number;
}

export function useFileInput({ accept = "", maxSize = 0 }: UseFileInputOptions) {
   const [fileName, setFileName] = useState<string>("");
   const [error, setError] = useState<string>("");
   const fileInputRef = useRef<HTMLInputElement>(null);
   const [fileSize, setFileSize] = useState<number>(0);

   const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      validateAndSetFile(file);
   };

   const validateAndSetFile = (file: File | undefined) => {
      setError("");

      if (file) {
         if (maxSize && file.size > maxSize * 1024 * 1024) {
            setError(`El tamaño del archivo debe ser menor que ${maxSize}MB`);
            return;
         }
         const regex = new RegExp(`(${accept.split(",").map(ext => ext.replace(".", "\\.")).join("|")})$`, "i");
         if (
            accept &&
            !file.name.match(regex)
         ) {
            setError(`El tipo de archivo debe ser ${accept}`);
            return;
         }

         setFileSize(file.size);
         setFileName(file.name);
      }
   };

   const clearFile = () => {
      setFileName("");
      setError("");
      setFileSize(0);
      if (fileInputRef.current) {
         fileInputRef.current.value = "";
      }
   };

   return {
      fileName,
      error,
      fileInputRef,
      handleFileSelect,
      validateAndSetFile,
      clearFile,
      fileSize,
   };
}
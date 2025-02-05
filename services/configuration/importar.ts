"use server"

export const importFileTransactions = async (formData: FormData) => {

   const rawFormData = {
      file: formData.get("file"),
   };

   console.log(rawFormData);
}
"use server"

export const updateHomeConfiguration = async (formData: FormData) => {

   const rawFormData = {
      months_ago: formData.get("months_ago"),
      categories: formData.get("categories"),
   };

   console.log(rawFormData);
}
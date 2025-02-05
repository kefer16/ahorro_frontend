"use server"

export const updateDataProfile = async (formData: FormData) => {

   const rawFormData = {
      user: formData.get("user"),
      name: formData.get("name"),
      last_name: formData.get("last_name"),
      email: formData.get("email")
   };

   console.log(rawFormData);
}
"use server"

export const changePassword = async (formData: FormData) => {

   const rawFormData = {
      current_password: formData.get("current_password"),
      new_password: formData.get("new_password"),
      repeat_password: formData.get("repeat_password"),
   };

   console.log(rawFormData);
}
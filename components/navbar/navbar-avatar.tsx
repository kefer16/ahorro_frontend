import {
   Avatar,
   AvatarFallback,
   AvatarImage,
} from "@/components/ui/avatar"

function NavbarAvatar() {
   return (
      <Avatar>
         <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
         <AvatarFallback>CN</AvatarFallback>
      </Avatar>
   )
}
export default NavbarAvatar

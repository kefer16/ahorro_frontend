import { DollarSign, Home, Import, Lock, LogOut, UserRound } from "lucide-react";
import { ReactElement } from "react";

interface IConfiguration {
   isDanger: boolean;
   link: string;
   title: string;
   description: string;
   icon: ReactElement;
}

export const configurationData: IConfiguration[] =
   [
      {
         isDanger: false,
         link: "/profile",
         title: "Perfil",
         description: "Configuraciones del perfil",
         icon: <UserRound size={22} className="text-muted-foreground" />
      },
      {
         isDanger: false,
         link: "/change_home",
         title: "Casa",
         description: "Configurar su pantalla principal",
         icon: <Home size={22} className="text-muted-foreground" />
      },
      {
         isDanger: false,
         link: "/import",
         title: "Importar",
         description: "Importa los estados de cuenta de tu banco preferido",
         icon: <Import size={22} className="text-muted-foreground" />
      },
      {
         isDanger: false,
         link: "/change_money",
         title: "Moneda",
         description: "Cambiar la moneda en la que quiere visualizar sus transacciones",
         icon: <DollarSign size={22} className="text-muted-foreground" />
      },
      {
         isDanger: false,
         link: "/change_password",
         title: "Contraseña",
         description: "Fortalezca su cuenta asegurándose de que su contraseña sea segura",
         icon: <Lock size={22} className="text-muted-foreground" />
      },
      {
         isDanger: true,
         link: "/logout",
         title: "Cerrar Sesión",
         description: "",
         icon: <LogOut size={22} className="text-red-500" />
      },

   ] 
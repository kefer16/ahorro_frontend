import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function Layout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div>
         <Navbar />
         <main className="relative h-screen overflow-auto ">
            <div className="px-4 container mx-auto lg:px-0">
               <div className="h-[60px]" />
               {children}
               <div className="h-[60px]" />
            </div>
         </main>
         <Footer />
      </div>
   );
}

export default function Layout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div>
         <main className="relative h-screen overflow-auto ">
            <div className="px-4 container mx-auto lg:px-0">
               <div className="h-[60px]" />
               {children}
               <div className="h-[60px]" />
            </div>
         </main>
      </div>
   );
}


function Home() {
   return (
      <div>
         <div className="flex items-center p-4 pb-2 justify-between">
            <h2 className="text-lg font-bold flex-1 text-center">Casa</h2>
         </div>
         <div className="flex flex-wrap gap-4 px-4 py-6">
            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#dce0e5] p-6">
               <p className="text-base font-medium">Last 12 months</p>
               <p className="tracking-light text-[32px] font-bold leading-tight truncate">$3,120</p>
               <div className="flex gap-1">
                  <p className="text-[#637588] text-base font-normal ">Last 12 Months</p>
                  <p className="text-[#078838] text-base font-medium ">+8%</p>
               </div>
            </div>
         </div>
         <h3 className="text-lg font-bold px-4 pb-2 pt-4">Categories</h3>
         <div className="flex items-center gap-4  px-4 min-h-[72px] py-2 justify-between">
            <div className="flex flex-col justify-center">
               <p className=" text-base font-medium  ">Home</p>
               <p className="text-[#637588] text-sm font-normal">2019</p>
            </div>
            <div className="shrink-0"><p className="text-base font-normal ">$800.00</p></div>
         </div>
         <div className="flex flex-col gap-3 p-4">
            <div className="flex gap-6 justify-between">
               <p className=" text-base font-medium ">80%</p>
               <p className=" text-sm font-normal ">640</p>
            </div>
            <div className="rounded "><div className="h-2 rounded bg-[#111418]" ></div></div>
            <p className="text-[#637588] text-sm font-normal ">Household</p>
         </div>
         <div className="flex items-center gap-4  px-4 min-h-[72px] py-2 justify-between">
            <div className="flex flex-col justify-center">
               <p className=" text-base font-medium  ">Health</p>
               <p className="text-[#637588] text-sm font-normal">2019</p>
            </div>
            <div className="shrink-0"><p className=" text-base font-normal ">$600.00</p></div>
         </div>
         <div className="flex flex-col gap-3 p-4">
            <div className="flex gap-6 justify-between">
               <p className=" text-base font-medium ">60%</p>
               <p className=" text-sm font-normal ">$360</p>
            </div>
            <div className="rounded "><div className="h-2 rounded bg-[#111418]" ></div></div>
            <p className="text-[#637588] text-sm font-normal ">Gym and other activities</p>
         </div>
         <div className="flex items-center gap-4  px-4 min-h-[72px] py-2 justify-between">
            <div className="flex flex-col justify-center">
               <p className=" text-base font-medium  ">Food</p>
               <p className="text-[#637588] text-sm font-normal">2019</p>
            </div>
            <div className="shrink-0"><p className=" text-base font-normal ">$500.00</p></div>
         </div>
         <div className="flex flex-col gap-3 p-4">
            <div className="flex gap-6 justify-between">
               <p className=" text-base font-medium ">40%</p>
               <p className=" text-sm font-normal ">200</p>
            </div>
            <div className="rounded "><div className="h-2 rounded bg-[#111418]" ></div></div>
            <p className="text-[#637588] text-sm font-normal ">Groceries and dining out</p>
         </div>
      </div>
   )
}

export default Home
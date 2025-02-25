function TitleSection({ title }: TitleSectionProps) {
   return (
      <div className="w-full">
         <h2 className="text-xl font-bold text-center">{title}</h2>
      </div>
   )
}

interface TitleSectionProps {
   title: string;
}

export default TitleSection
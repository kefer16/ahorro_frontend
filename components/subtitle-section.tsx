function SubtitleSection({ title }: SubtitleSectionProps) {
   return (
      <div className="w-full">
         <h3 className="text-lg font-bold">{title}</h3>
      </div>
   )
}

interface SubtitleSectionProps {
   title: string;
}

export default SubtitleSection
import Link from "next/link";

function SubtitleLinkSection({ title, link, linkText }: SubtitleSectionProps) {
   return (
      <div className="w-full flex justify-between">
         <h3 className="text-lg font-bold">{title}</h3>
         <Link className="flex items-center underline text-sm text-muted-foreground" href={link} >{linkText}</Link>
      </div>
   )
}

interface SubtitleSectionProps {
   title: string;
   linkText: string;
   link: string;
}

export default SubtitleLinkSection
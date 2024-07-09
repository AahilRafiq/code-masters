import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

interface Props {
    langs: string[];
}

export default function SelectLang({langs}: Props) {
    return (
        <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          
            {langs.map((lang) => (
                <SelectItem key={lang} value={lang}>
                {lang}
                </SelectItem>
            ))}

        </SelectGroup>
      </SelectContent>
    </Select>
    )
}
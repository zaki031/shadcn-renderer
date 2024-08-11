import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function ComponentSelect({ setComponent }: any) {
  return (
    <div>
      <Select name="component" onValueChange={setComponent}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Button" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="button">Button</SelectItem>
          <SelectItem value="toast">Toast</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

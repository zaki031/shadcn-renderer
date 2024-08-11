"use client";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function ButtonForm({ buttonFields, buttonFuncs }: any) {
  function isLoading() {
    buttonFuncs.setLoading((prevLoading: boolean) => !prevLoading);
  }
  return (
    <div className="flex flex-col gap-6">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="variant">Variant</Label>
        <Select name="variant" onValueChange={buttonFuncs.setVariant}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={buttonFields.variant} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="destructive">Destructive</SelectItem>
            <SelectItem value="outline">Outline</SelectItem>
            <SelectItem value="link">Link</SelectItem>
            <SelectItem value="ghost">Ghost</SelectItem>
            <SelectItem value="secondary">Secondary</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="text">Button text</Label>
        <Input
          value={buttonFields.text}
          name="text"
          onChange={(e) => {
            buttonFuncs.setText(e.target.value);
          }}
          type="text"
          placeholder={buttonFields.text}
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="size">Size</Label>
        <Select name="size" onValueChange={buttonFuncs.setSize}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={buttonFields.size} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="lg">Lg</SelectItem>
            <SelectItem value="sm">Sm</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          checked={buttonFields.loading}
          onCheckedChange={isLoading}
          id="terms"
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Loading State
        </label>
      </div>
      <div className="grid w-full max-w-sm items-center gap-2.5">
        <Label htmlFor="border-radius">Border radius</Label>
        <Slider
          name="border-radius"
          defaultValue={[buttonFields.borderRadiusVal]}
          onValueChange={(i) => {
            buttonFuncs.setBorderRadiusVal(i[0]);
          }}
          max={20}
          step={1}
        />
      </div>
    </div>
  );
}

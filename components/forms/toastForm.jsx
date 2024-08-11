import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ToastForm({ toastFields, toastFuncs }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid w-full max-w-sm gap-4">
        <Label htmlFor="position">Position</Label>
        <Select name="position" onValueChange={toastFuncs.setPosition}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={toastFields.position} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="topLeft">Top Left</SelectItem>
            <SelectItem value="topRight">Top Right</SelectItem>
            <SelectItem value="bottomLeft">Bottom Left</SelectItem>
            <SelectItem value="bottomRight">Bottom Right</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid w-full max-w-sm gap-4">
        <Label htmlFor="toastType">Type</Label>
        <Select name="toastType" onValueChange={toastFuncs.setToastType}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={toastFields.toastType} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="destructive">Destructive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid w-full max-w-sm gap-4">
        <Label htmlFor="description">Toast Description</Label>
        <Textarea
          value={toastFields.toastDescription}
          name="description"
          onChange={(e) => {
            toastFuncs.setToastDescription(e.target.value);
          }}
          type="text"
          placeholder={toastFields.toastDescription}
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={toastFields.isTitle}
            onCheckedChange={toastFuncs.setIsTitle}
            id="isTitle"
          />
          <label
            htmlFor="isTitle"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Title
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={toastFields.isAction}
            onCheckedChange={toastFuncs.setIsAction}
            id="isAction"
          />
          <label
            htmlFor="isAction"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Action
          </label>
        </div>
      </div>

      {toastFields.isTitle && (
        <div className="grid w-full max-w-sm gap-4">
          <Label htmlFor="text">Toast Title</Label>
          <Input
            value={toastFields.title}
            name="text"
            onChange={(e) => {
              toastFuncs.setTitle(e.target.value);
            }}
            type="text"
            placeholder={toastFields.title}
          />
        </div>
      )}

      {toastFields.isAction && (
        <div className="grid w-full max-w-sm gap-4">
          <Label htmlFor="action">Action Title</Label>
          <Input
            value={toastFields.actionTitle}
            name="action"
            onChange={(e) => {
              toastFuncs.setActionTitle(e.target.value);
            }}
            type="text"
            placeholder={toastFields.actionTitle}
          />
        </div>
      )}
    </div>
  );
}

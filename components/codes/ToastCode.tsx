import { positions } from "@/lib/positions";
const ToastCode = ({
  variant,
  toastType,
  position,
  title,
  description,
  actionTitle,
  isAction,
  isTitle,
}: any) => `
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
${isAction ? 'import { ToastAction } from "@/components/ui/toast";' : ""}
export function Toast(){
  const { toast } = useToast();
  <Button
    onClick={() => {
      toast({
        variant: '${toastType}',
        className: " max-w-[420px] fixed ${toastType === "default" ? "bg-white" : ""}",
        style: {${position === "topRight" ? ` top: '${positions.topRight.top}', right:'${positions.topRight.right}'` : ""} ${position === "topLeft" ? `top: '${positions.topLeft.top}', left:'${positions.topLeft.left}'` : ""}${position === "bottomLeft" ? `bottom: '${positions.bottomLeft.bottom}', left:'${positions.bottomLeft.left}'` : ""}${position === "bottomRight" ? `bottom: '${positions.bottomRight.bottom}', right:'${positions.bottomRight.right}'` : ""} },
        description: '${description}',
        ${isTitle ? `title: '${title}',` : ""}
        ${
          isAction
            ? `action: (
          <ToastAction altText="Goto schedule to undo">
            ${actionTitle}
          </ToastAction>
        ), `
            : ""
        }
      });
    }}
  >
    Toast
  </Button>
}`;

export default ToastCode;

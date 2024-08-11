"use client";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { positions } from "@/lib/positions";
export default function ComponentToRender({
  buttonFields,
  component,
  toastFuncs,
  toastFields,
}: any) {
  const { toast } = useToast();

  if (!component) {
    return null;
  } else if (component == "button") {
    return (
      <Button
        disabled={buttonFields.loading}
        style={{ borderRadius: `${buttonFields.borderRadiusVal}px` }}
        variant={buttonFields.variant}
        size={buttonFields.size}
      >
        {!buttonFields.loading ? (
          buttonFields.text
        ) : (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
          </>
        )}
      </Button>
    );
  } else if (component == "toast") {
    console.log("meow");
    return (
      <>
        <Button
          onClick={() => {
            toast({
              variant: toastFields.toastType,
              className: `max-w-[420px] fixed ${toastFields.toastType === "default" ? "bg-white" : ""}`,
              style: positions[toastFields.position],
              title: toastFields.title,
              description: toastFields.toastDescription,
              action: toastFields.isAction ? (
                <ToastAction altText="Goto schedule to undo">
                  {toastFields.actionTitle}
                </ToastAction>
              ) : null,
            });
          }}
        >
          Toast
        </Button>
      </>
    );
  }
}

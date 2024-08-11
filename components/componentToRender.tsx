"use client";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { positions } from "@/lib/positions";
import { PositionKey } from "@/lib/types";

interface ComponentProps {
  buttonFields: {
    loading: boolean;
    borderRadiusVal: number;
    variant: string;
    size: string;
    text: string;
  };
  component: string;
  toastFields: {
    toastType: string;
    position: PositionKey;
    title: string;
    toastDescription: string;
    isAction: boolean;
    actionTitle: string;
  };
}

export default function ComponentToRender({
  buttonFields,
  component,
  toastFields,
}: ComponentProps) {
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
              ) : undefined,
            });
          }}
        >
          Toast
        </Button>
      </>
    );
  }
}

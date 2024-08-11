"use client";
import { useState } from "react";
import ComponentSelect from "@/components/forms/componentSelect";
import ComponentToRender from "@/components/componentToRender";
import { Label } from "@/components/ui/label";
import EditingForm from "@/components/forms/editingForm";
import Code from "@/components/codes/code";
import ButtonCode from "@/components/codes/ButtonCode";
import ToastCode from "@/components/codes/ToastCode";
export default function Home() {
  const [component, setComponent] = useState("button");
  const [variant, setVariant] = useState("default");
  const [text, setText] = useState("Button");
  const [loading, setLoading] = useState(false);
  const [borderRadiusVal, setBorderRadiusVal] = useState(4);
  const [size, setSize] = useState("default");
  const [title, setTitle] = useState("");
  const [position, setPosition] = useState("bottomRight");
  const [toastType, setToastType] = useState("default");
  const [isTitle, setIsTitle] = useState(false);
  const [isAction, setIsAction] = useState(false);
  const [actionTitle, setActionTitle] = useState("Undo");
  const [toastDescription, setToastDescription] = useState(
    "Hello, I am a toast message!",
  );
  let buttonFields = {
    variant,
    text,
    loading,
    borderRadiusVal,
    size,
  };
  let buttonFuncs = {
    setVariant,
    setText,
    setBorderRadiusVal,
    setSize,
    setLoading,
  };
  let toastFuncs = {
    setPosition,
    setToastType,
    setTitle,
    setToastDescription,
    setIsTitle,
    setIsAction,
    setActionTitle,
  };
  let toastFields = {
    position,
    toastType,
    title,
    toastDescription,
    isTitle,
    isAction,
    actionTitle,
  };
  return (
    <main className="min-h-screen  p-8">
      <div className="flex gap-x-10 ">
        <div className="flex flex-2.5 border-2 border-black rounded-lg flex-col gap-8   p-12">
          <h2 className=" font-semibold -ml-4 text-2xl">Options :</h2>
          <div className="flex flex-col gap-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="component">Component</Label>
              <ComponentSelect setComponent={setComponent} />
            </div>
            <EditingForm
              component={component}
              buttonFields={buttonFields}
              buttonFuncs={buttonFuncs}
              toastFuncs={toastFuncs}
              toastFields={toastFields}
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4 ">
          <div className="flex-0.5 flex justify-center border-2 border-black rounded-lg p-4">
            <ComponentToRender
              component={component}
              buttonFields={buttonFields}
              toastFields={toastFields}
            />
          </div>
          <div className="flex-1 border-2 border-black rounded-lg p-4">
            <Code
              code={
                component === "button"
                  ? ButtonCode({
                      text: text,
                      variant: variant,
                      size: size,
                      loading: loading,
                      borderRadiusVal: borderRadiusVal,
                    })
                  : ToastCode({
                      position: position,
                      toastType: toastType,
                      title: title,
                      description: toastDescription,
                      isTitle: isTitle,
                      isAction: isAction,
                      actionTitle: actionTitle,
                    })
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
}

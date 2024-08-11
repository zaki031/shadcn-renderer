import ButtonForm from "./buttonForm";
import ToastForm from "./toastForm";
export default function editingForm({
  component,
  buttonFuncs,
  buttonFields,
  toastFuncs,
  toastFields,
}: any) {
  if (component == "button") {
    return <ButtonForm buttonFields={buttonFields} buttonFuncs={buttonFuncs} />;
  } else if (component == "toast") {
    return <ToastForm toastFuncs={toastFuncs} toastFields={toastFields} />;
  }
}

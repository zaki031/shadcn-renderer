const ButtonCode = ({ loading, borderRadiusVal, text, size, variant }: any) =>
  `
       import { Button } from "@/components/ui/button"\n${loading ? 'import { Loader2 } from "lucide-react";' : ""}

   export function Button(){
     <Button
       style={{ borderRadius: ${borderRadiusVal}px }}
       variant=${variant}
       size=${size}
       ${loading ? "disabled" : ""}
     >
       ${
         !loading
           ? `${text}`
           : '<Loader2 className="mr-2 h-4 w-4 animate-spin"/>' +
             "\n\tPlease wait"
       }
     </Button>
   } `;
export default ButtonCode;

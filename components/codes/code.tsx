import { CodeBlock } from "react-code-block";
export default function Code({ code }: any) {
  return (
    <CodeBlock code={code} language="js">
      <CodeBlock.Code className="bg-black h-full rounded-md p-2">
        <CodeBlock.LineContent>
          <CodeBlock.Token />
        </CodeBlock.LineContent>
      </CodeBlock.Code>
    </CodeBlock>
  );
}

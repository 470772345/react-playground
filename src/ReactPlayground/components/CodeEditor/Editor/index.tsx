import MonacoEditor, { OnMount } from "@monaco-editor/react";
import { createATA } from './ata';

export default function Editor() {
  const code = `
  import lodash from 'lodash';
  export default function App() {
    return <div>xxx</div>
}
    `;

  const handleEditorMount: OnMount = (editor, monaco) => {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      esModuleInterop: true,
    });


    const ata = createATA((code, path) => {
        monaco.languages.typescript.typescriptDefaults.addExtraLib(code, `file://${path}`)
    })

    editor.onDidChangeModelContent(() => {
        ata(editor.getValue());
    });

    ata(editor.getValue());

  };

  return (
    <MonacoEditor
      height="100%"
      path={"guang.tsx"}
      language={"typescript"}
      onMount={handleEditorMount}
      value={code}
    />
  );
}

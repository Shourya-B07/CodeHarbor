import { CodeEditorState } from "./../types/index";
import { LANGUAGE_CONFIG } from "@/app/(root)/_constants";
import { create } from "zustand";
import * as monaco from "monaco-editor"; // ✅ use this instead of Monaco from react

/** Override with NEXT_PUBLIC_JUDGE0_EXECUTE_URL when using self-hosted Judge0. */
function getJudge0Url(): string {
  const fromEnv = process.env.NEXT_PUBLIC_JUDGE0_EXECUTE_URL?.trim();
  return fromEnv || "https://ce.judge0.com/submissions?base64_encoded=false&wait=true";
}

const getInitialState = () => {
  if (typeof window === "undefined") {
    return {
      language: "javascript",
      fontSize: 16,
      theme: "vs-dark",
    };
  }

  const savedLanguage = localStorage.getItem("editor-language") || "javascript";
  const savedTheme = localStorage.getItem("editor-theme") || "vs-dark";
  const savedFontSize = localStorage.getItem("editor-font-size") || 16;

  return {
    language: savedLanguage,
    theme: savedTheme,
    fontSize: Number(savedFontSize),
  };
};

export const useCodeEditorStore = create<CodeEditorState>((set, get) => {
  const initialState = getInitialState();

  return {
    ...initialState,
    output: "",
    isRunning: false,
    error: null,
    editor: null as monaco.editor.IStandaloneCodeEditor | null, // ✅ FIXED
    executionResult: null,

    getCode: () => get().editor?.getValue() || "",

    setEditor: (editor: monaco.editor.IStandaloneCodeEditor) => { // ✅ FIXED
      const savedCode = localStorage.getItem(`editor-code-${get().language}`);
      if (savedCode) editor.setValue(savedCode);

      set({ editor });
    },

    setTheme: (theme: string) => {
      localStorage.setItem("editor-theme", theme);
      set({ theme });
    },

    setFontSize: (fontSize: number) => {
      localStorage.setItem("editor-font-size", fontSize.toString());
      set({ fontSize });
    },

    setLanguage: (language: string) => {
      const currentCode = get().editor?.getValue();
      if (currentCode) {
        localStorage.setItem(`editor-code-${get().language}`, currentCode);
      }

      localStorage.setItem("editor-language", language);

      set({
        language,
        output: "",
        error: null,
      });
    },

    runCode: async () => {
      const { language, getCode } = get();
      const code = getCode();

      if (!code) {
        set({ error: "Please enter some code" });
        return;
      }

      set({ isRunning: true, error: null, output: "" });

      try {
        const judge0Id = LANGUAGE_CONFIG[language].judge0Id;
        const response = await fetch(getJudge0Url(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            language_id: judge0Id,
            source_code: code,
            stdin: "",
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          const msg = data.error || data.message || "Execution failed";
          set({ error: msg, executionResult: { code, output: "", error: msg } });
          return;
        }

        if (data.compile_output) {
          const error = data.compile_output;
          set({
            error,
            executionResult: { code, output: "", error },
          });
          return;
        }

        if (data.stderr) {
          const error = data.stderr;
          set({
            error,
            executionResult: { code, output: "", error },
          });
          return;
        }

        const output = data.stdout || "";
        set({
          output: output.trim(),
          error: null,
          executionResult: { code, output: output.trim(), error: null },
        });
      } catch (error) {
        console.log("Error running code:", error);
        set({
          error: "Error running code",
          executionResult: { code, output: "", error: "Error running code" },
        });
      } finally {
        set({ isRunning: false });
      }
    },
  };
});

export const getExecutionResult = () => useCodeEditorStore.getState().executionResult;

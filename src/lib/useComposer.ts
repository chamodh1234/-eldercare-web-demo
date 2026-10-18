"use client";

import { useState } from "react";

/** A text input that submits on Enter or the send button, then clears. */
export function useComposer(onSend: (text: string) => void) {
  const [text, setText] = useState("");
  return {
    value: text,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setText(e.target.value),
    submit: (e?: React.FormEvent | React.MouseEvent) => {
      e?.preventDefault();
      if (!text.trim()) return;
      onSend(text);
      setText("");
    },
  };
}

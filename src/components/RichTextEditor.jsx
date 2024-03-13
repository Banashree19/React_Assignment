import { Container } from "@mui/material";
import JoditEditor from "jodit-react";
import { useState, useEffect } from "react";
import { useRef } from "react";

const RichTextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  return (
    <Container>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
      {content}
    </Container>
  );
};

export default RichTextEditor;

import { BubbleMenu, EditorContent, FloatingMenu, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { twMerge } from "tailwind-merge";

// define TipTap extensions
const extensions = [StarterKit];

/**
 * TipTapEditor component
 * @returns
 */
export function TipTapEditor({ className }: { className?: string }) {
  const editor = useEditor({
    extensions,
    content: `
      <p>
        Welcome !
      </p>
    `,
    editorProps: {
      attributes: {
        class: "min-h-40 p-3 prose max-w-full",
      },
    },
  });

  return (
    <div className={twMerge("rounded-lg overflow-hidden shadow-xl", className)}>
      <div className="px-4 py-2 bg-gray-900 text-gray-500 text-sm">
        <p className="font-medium">Your editor</p>
      </div>
      <EditorContent editor={editor} className="p-1" />
      <div className="border-t border-gray-300 py-2 px-4">
        <button
          type="button"
          className="inline-flex items-center px-2 py-1 bg-gray-50 hover:bg-gray-100 border border-gray-200 shadow rounded-md text-sm font-medium"
        >
          Upload Image
        </button>
      </div>
    </div>
  );
}

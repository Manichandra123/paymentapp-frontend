import React from "react";

interface InputBoxProps {
  label: string;
  placeholder: string;
}

// ✅ Correct forwardRef usage
export const InputBox = React.forwardRef<HTMLInputElement, InputBoxProps>(
  ({ label, placeholder }, ref) => {
    return (
      <div>
        <div className="text-sm font-medium text-left py-2">
          {label}
        </div>
        <input
          ref={ref}  // ✅ this actually attaches the ref
          placeholder={placeholder}
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
    );
  }
);

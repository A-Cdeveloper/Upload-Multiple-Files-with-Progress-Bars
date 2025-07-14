import { Plus } from "lucide-react";

type FileInputProps = {
  ref: React.RefObject<HTMLInputElement | null>;
  disabled: boolean;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileInput = ({ ref, disabled, onFileSelect }: FileInputProps) => {
  return (
    <>
      <input
        type="file"
        ref={ref}
        onChange={onFileSelect}
        multiple
        className="hidden"
        id="file-upload"
        disabled={disabled}
      />
      <label
        htmlFor="file-upload"
        className="flex cursor-pointer items-center gap-2 rounded-md bg-grayscale-700 px-6 py-2 hover:opacity-90"
      >
        <Plus size={20} /> Select Files
      </label>
    </>
  );
};

export default FileInput;

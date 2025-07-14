import { Trash2, Upload } from "lucide-react";

type ActionButtonsProps = {
  disabled: boolean;
  onUpload: () => void;
  onClear: () => void;
};

const ActionButtons = ({ disabled, onUpload, onClear }: ActionButtonsProps) => {
  return (
    <>
      <button
        onClick={onUpload}
        disabled={disabled}
        className="flex items-center gap-2"
      >
        <Upload size={18} />
        Upload
      </button>
      <button
        onClick={onClear}
        className="flex items-center gap-2"
        disabled={disabled}
      >
        <Trash2 size={18} />
        Clear All
      </button>
    </>
  );
};
export default ActionButtons;

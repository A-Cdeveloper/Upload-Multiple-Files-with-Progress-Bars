import FileItem from "./FileItem";
import type { FileWithProgress } from "./FileUpload";

type FilesListProps = {
  files: FileWithProgress[];
  onRemove: (id: string) => void;
  uploading: boolean;
};

const FilesList = ({ files, onRemove, uploading }: FilesListProps) => {
  if (files.length === 0) {
    return null;
  }
  return (
    <div className="space-y-2">
      <h3 className="font-semibold">Files:</h3>
      <div className="space-y-2">
        {files.map((file) => (
          <FileItem
            key={file.id}
            file={file}
            onRemove={onRemove}
            uploading={uploading}
          />
        ))}
      </div>
    </div>
  );
};

export default FilesList;

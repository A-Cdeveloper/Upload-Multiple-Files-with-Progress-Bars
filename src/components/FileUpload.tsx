import axios from "axios";
import { useRef, useState } from "react";
import ActionButtons from "./ActionButtons";
import FilesList from "./FilesList";
import FileInput from "./FileInput";

export type FileWithProgress = {
  id: string;
  file: File;
  progress: number;
  uploaded: boolean;
};

const FileUpload = () => {
  const [files, setFiles] = useState<FileWithProgress[]>([]);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }

    const newFiles = Array.from(e.target.files).map((file) => ({
      id: crypto.randomUUID(),
      file,
      progress: 0,
      uploaded: false,
    }));

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const removeFile = (id: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
  };

  const handleClear = () => {
    setFiles([]);
  };

  const handleUpload = async () => {
    if (files.length === 0 || uploading) {
      return;
    }
    setUploading(true);

    const uploadPromises = files.map(async (fileWithProgress) => {
      const formData = new FormData();
      formData.append("file", fileWithProgress.file);
      try {
        await axios.post("https://httpbin.org/post", formData, {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / (progressEvent.total || 1)
            );
            setFiles((prevFiles) =>
              prevFiles.map((file) =>
                file.id === fileWithProgress.id ? { ...file, progress } : file
              )
            );
          },
        });

        setFiles((prevFiles) =>
          prevFiles.map((file) =>
            file.id === fileWithProgress.id ? { ...file, uploaded: true } : file
          )
        );
      } catch (error) {
        console.error(error);
      }
    });

    await Promise.all(uploadPromises);
    setUploading(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">File Upload</h2>
      <div className="flex gap-2">
        <FileInput
          ref={inputRef}
          disabled={uploading}
          onFileSelect={handleFileSelect}
        />
        <ActionButtons
          disabled={files.length === 0 || uploading}
          onUpload={handleUpload}
          onClear={handleClear}
        />
      </div>
      <FilesList files={files} onRemove={removeFile} uploading={uploading} />
    </div>
  );
};

export default FileUpload;

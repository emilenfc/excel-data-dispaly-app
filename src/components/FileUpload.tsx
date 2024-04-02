import React from 'react';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      onFileUpload(selectedFile);
    }
  };

  return (
    <div className="mt-4">
          <input type="file" onChange={handleFileChange} className="border border-gray-200  bg-gray-900 px-4 py-2 rounded" />
    </div>
  );
};

export default FileUpload;

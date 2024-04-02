"use client";
import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import EditableTableGrid from '../components/EditableTableGrid';
import * as XLSX from 'xlsx';

const IndexPage: React.FC = () => {
  const [fileData, setFileData] = useState<any[] | null>(null);

  const handleFileUpload = async (file: File) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = e.target?.result as string;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const excelData = XLSX.utils.sheet_to_json<any[]>(workbook.Sheets[sheetName], { header: 1 });
        console.log("sheetname",excelData[0]);

      if (Array.isArray(excelData[0])) {
        setFileData(excelData);
      } else {
        console.error('Invalid data format');
      }
    };
    reader.readAsBinaryString(file);
  };

  const handleCopyToClipboard = () => {
    if (fileData) {
      console.log(fileData);
      const text = fileData.map(row => row.join('\t')).join('\n');
      navigator.clipboard.writeText(text);
      alert('Data copied to clipboard!');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Excell</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {fileData && <EditableTableGrid data={fileData} />}
      {fileData && (
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
      )}
    </div>
  );
};
export default IndexPage;

import React from 'react';

interface EditableTableGridProps {
  data: string[][];
}

const EditableTableGrid: React.FC<EditableTableGridProps> = ({ data }) => {
  return (
    <div className="mt-4">
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            {data[0].map((cell, index) => (
              <th key={index} className="border border-red-400 px-4 py-2">{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border border-gray-400 px-4 py-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableTableGrid;

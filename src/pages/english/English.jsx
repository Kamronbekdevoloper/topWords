import React from "react";
import { files } from "../../Files/files";

const English = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">English Learning Files</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {files.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-medium mb-2">{item.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{item.type} fayli</p>
            <a
              href={item.file}
              download
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Yuklab olish
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default English;

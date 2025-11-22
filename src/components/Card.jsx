import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
      {title && (
        <h3 className="font-bold text-lg mb-4 text-gray-800">{title}</h3>
      )}
      {children}
    </div>
  );
}

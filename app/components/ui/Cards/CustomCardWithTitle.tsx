import React from "react";

interface CustomCardProps {
  children?: React.ReactNode;
  title?: string;
}

const CustomCard = ({ children, title }: CustomCardProps) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow p-6">
      {title && (
        <h1 className="font-semibold uppercase text-gray-800">{title}</h1>
      )}
      {children}
    </div>
  );
};

export default CustomCard;

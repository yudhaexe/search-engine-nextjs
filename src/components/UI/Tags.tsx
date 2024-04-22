import React from "react";

interface TagProps {
  tags: string[];
}

const Tags: React.FC<TagProps> = ({ tags }) => {
  return (
    <div className="flex gap-1 mt-3">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="bg-[#8DD4CC] px-3 py-1 text-white font-bold text-xs rounded-full text-center"
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;

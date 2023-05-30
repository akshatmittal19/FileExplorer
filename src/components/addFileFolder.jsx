import React, { useState } from "react";

const fileTypes = [
  {
    id: "file",
    name: "File"
  },
  {
    id: "folder",
    name: "Folder"
  }
];

export default function AddFileFolder({ level, data, setData, setModalOpen }) {
  const [activeType, setActiveType] = useState("file");
  const [name, setName] = useState("");

  const handleCreate = () => {
    if (name) {
      setData(
        data.concat({
          id: name.toLowerCase(),
          name: name,
          parentId: level,
          type: activeType
        })
      );
      setModalOpen(false);
    }
  };

  return (
    <div className="addFileFolder">
      <div>Create new</div>
      <div className="type-box">
        {fileTypes.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                backgroundColor: activeType === item.id ? "lightblue" : "white",
                cursor: "pointer"
              }}
              className="toggle"
              onClick={() => setActiveType(item.id)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
}

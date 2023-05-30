import React from "react";

const contextMenuItems = [
  {
    id: "rename",
    name: "Rename"
  },
  {
    id: "delete",
    name: "Delete"
  }
];

export default function ContextMenu({
  top,
  left,
  data,
  setData,
  itemClicked,
  setRenameModalOpen
}) {
  const handleActionClick = (e, item) => {
    if (item.id === "delete") {
      setData(data.filter((dataItem) => dataItem.id !== itemClicked.id));
    } else if (item.id === "rename") {
      setRenameModalOpen(true);
    }
  };

  return (
    <div className="context-menu" style={{ top: top, left: left }}>
      {contextMenuItems.map((item) => {
        return (
          <div key={item.id} onClick={(e) => handleActionClick(e, item)}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

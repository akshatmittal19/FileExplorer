import React, { useState } from "react";
import Image from "./images";
import file from "../images/file.png";
import folder from "../images/folder.png";
import addNewButton from "../images/addNewButton.png";
import useContextMenu from "../hooks/useContextMenu";
import ContextMenu from "./contextMenu";
import Modal from "react-modal";
import { customStyles } from "../utils/utils";

export default function Explorer({
  data,
  setData,
  level,
  onLevelChange,
  searchQuery,
  setSearchQuery,
  setModalOpen
}) {
  const { clicked, setClicked, points, setPoints } = useContextMenu();
  const [itemClicked, setItemClicked] = useState({});
  const [renameModalOpen, setRenameModalOpen] = useState(false);
  const [newName, setNewName] = useState("");

  const handleLevelChange = (e, item) => {
    if (item.type === "file") {
      alert(`File ${item.name} opened`);
    } else {
      onLevelChange(item.id);
    }
    setSearchQuery("");
  };

  const handleContextMenuClick = (e, item) => {
    e.preventDefault();
    setClicked(true);
    setItemClicked(item);
    setPoints({
      x: e.pageX,
      y: e.pageY
    });
  };

  const handleRename = (e) => {
    if (newName) {
      setData(
        data.map((item) =>
          item.id === itemClicked.id ? { ...item, name: newName } : item
        )
      );
      setRenameModalOpen(false);
    }
  };

  return (
    <div className="explorer">
      <Modal
        isOpen={renameModalOpen}
        onRequestClose={() => setRenameModalOpen(false)}
        style={customStyles}
      >
        <div className="rename-modal">
          <div>Rename File/Folder</div>
          <input
            type="text"
            placeholder="New Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={handleRename}>Submit</button>
        </div>
      </Modal>
      {data
        .filter((item) => item.parentId === level)
        .filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((item) => {
          return (
            <div
              key={item.id}
              className="file-container"
              onClick={(e) => handleLevelChange(e, item)}
              onContextMenu={(e) => handleContextMenuClick(e, item)}
            >
              <Image src={item.type === "folder" ? folder : file} />
              <div className="file-name">{item.name}</div>
            </div>
          );
        })}
      <div onClick={() => setModalOpen(true)}>
        <Image src={addNewButton} />
      </div>
      {clicked && (
        <ContextMenu
          top={points.y}
          left={points.x}
          data={data}
          setData={setData}
          itemClicked={itemClicked}
          setRenameModalOpen={setRenameModalOpen}
        />
      )}
    </div>
  );
}

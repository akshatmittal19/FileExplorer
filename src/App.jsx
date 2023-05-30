import React, { useState } from "react";
import "./styles.css";
import { filesAndFolders } from "./utils/testData";
import Header from "./components/header";
import Explorer from "./components/explorer";
import Modal from "react-modal";
import AddFileFolder from "./components/addFileFolder";
import { customStyles } from "./utils/utils";

/* Please Note that the Search implemented is per folder search */

export default function App() {
  const [appData, setAppData] = useState(filesAndFolders);
  const [currentLevel, setCurrentLevel] = useState("root");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <AddFileFolder
          level={currentLevel}
          data={appData}
          setData={setAppData}
          setModalOpen={setModalOpen}
        />
      </Modal>
      <Header
        data={appData}
        level={currentLevel}
        onLevelChange={setCurrentLevel}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
      />
      <Explorer
        data={appData}
        setData={setAppData}
        level={currentLevel}
        onLevelChange={setCurrentLevel}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setModalOpen={setModalOpen}
      />
    </div>
  );
}

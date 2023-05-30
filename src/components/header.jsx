import React, { useMemo } from "react";
import Image from "./images";
import backButton from "../images/backButton.png";
import Breadcrumbs from "./breadcrumbs";
import SearchBar from "./searchBar";

export default function Header({
  data,
  level,
  onLevelChange,
  searchQuery,
  onSearch
}) {
  const currentData = useMemo(() => {
    return data.find((item) => item.id === level);
  }, [data, level]);

  const handleBackClick = () => {
    onLevelChange(currentData.parentId);
    onSearch("");
  };

  return (
    <div className="header">
      <div className="links">
        {level !== "root" && (
          <div className="back-button" onClick={handleBackClick}>
            <Image src={backButton} height="20" />
          </div>
        )}
        <Breadcrumbs
          level={level}
          data={data}
          onLevelChange={onLevelChange}
          onSearch={onSearch}
        />
      </div>
      <SearchBar searchQuery={searchQuery} onSearch={onSearch} />
    </div>
  );
}

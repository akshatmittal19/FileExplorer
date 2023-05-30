import { getBreadcrumbLinks } from "../utils/utils";

export default function Breadcrumbs({ data, level, onLevelChange, onSearch }) {
  const links = getBreadcrumbLinks(data, level);

  const handleBreadcrumbClick = (item) => {
    if (item.id !== level) {
      onLevelChange(item.id);
      onSearch("");
    }
  };

  return (
    <div>
      {links.map((item, index) => {
        return (
          <span
            key={item.id}
            style={{ cursor: "pointer" }}
            onClick={() => handleBreadcrumbClick(item)}
          >{`${item.name} ${index !== links.length - 1 ? "/" : ""} `}</span>
        );
      })}
    </div>
  );
}

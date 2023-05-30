export const getBreadcrumbLinks = (data, level) => {
  const links = [];
  let currentId = level;

  while (currentId) {
    const currentData = data.find((item) => item.id === currentId);
    links.push({
      name: currentData.name,
      id: currentData.id
    });
    currentId = currentData.parentId;
  }

  return links.reverse();
};

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 400
  }
};

import { List } from "@mui/material";
import ListItemComponent from "./ListItemComponent";

function MainList({ data, searchTerm, expandedItem, handleToggle }) {
  const filteredData = data.filter(
    (datum) =>
      datum.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      datum.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <List>
      {filteredData.map((datum) => (
        <ListItemComponent
          key={datum.id}
          datum={datum}
          expandedItem={expandedItem}
          handleToggle={handleToggle}
        />
      ))}
    </List>
  );
}

export default MainList;

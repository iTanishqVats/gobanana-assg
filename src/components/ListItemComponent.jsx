import {
  ListItem,
  ListItemText,
  ListItemButton,
  Collapse,
  List,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

function ListItemComponent({ datum, expandedItem, handleToggle }) {
  return (
    <div>
      <ListItem>
        <ListItemButton onClick={() => handleToggle(datum.id)}>
          <ListItemText
            primary={datum.title}
            secondary={`User ID: ${datum.userId}`}
          />
          {expandedItem === datum.id ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={expandedItem === datum.id} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText primary={datum.body} />
          </ListItem>
        </List>
      </Collapse>
    </div>
  );
}

export default ListItemComponent;

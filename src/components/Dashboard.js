import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Button from "@material-ui/core/Button";
import ConfirmActionModal from "./ConfirmActionModal";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    margin: "0 auto",
    backgroundColor: theme.palette.background.paper,
  },
}));

const Dashboard = ({ widgetList = [], onDeleteWidget }) => {
  const classes = useStyles();
  const [selectedWidget, setSelectedWidget] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen((open)=>!open);
  };
  const handleConfirm = () => {
    setOpen((open) => !open);
    onDeleteWidget(selectedWidget);
  };
  const onDelete = (name, id) => {
    setOpen((open) => !open);
    setSelectedWidget({ name, id });
  };

  return (
    <>
      {open && (
        <ConfirmActionModal
          open={open}
          handleClose={handleClose}
          handleConfirm={handleConfirm}
        />
      )}
      <List className={classes.root}>
        {widgetList.map(({ name, language, id }) => (
          <ListItem key={id}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={language} />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => onDelete(name, id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Dashboard;

import { Grid, Typography } from "@mui/material";
import SiteDialog from "./dialog";

const SiteDialogAlert = ({ onClose, open, title, message, icon }) => {
  return (
    <SiteDialog title={title} onClose={onClose} open={open}>
      <Grid container direction="column" justify="center" alignItems="center">
        {icon}
        <Typography variant="body1">{message}</Typography>
      </Grid>
    </SiteDialog>
  );
};

export default SiteDialogAlert;
import { Card, CardHeader, Dialog, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";

function SiteCard({
    children,
    title,
    margin = 8,
    action = null,
    noMargin = false,
    noPadding = false,
    ...props
  }) {
    // const classes = useStyles();
    margin = noMargin === true ? 0 : margin;
    return (
      <Card
        elevation={3}
        style={{ marginTop: margin }}
        {...props}
      >
        <CardHeader
          title={title}
          // className={classes.header}
          titleTypographyProps={{ variant: "h5", component: "h5" }}
          action={action}
        />
        <Box p={noPadding == true ? 0 : 2} pb={noPadding == true ? 0 : 3}>
          {children}
        </Box>
      </Card>
    );
  }


export default function SiteDialog({ title, onClose, open, children }) {
  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="dialog-alert"
      open={open}
      maxWidth="xs"
    >
      <SiteCard
        margin={0}
        title={title}
        action={
          <IconButton
            aria-label="Close"
            onClick={onClose}
            style={{ color: "tertiary" }}
          >
            <CloseIcon />
          </IconButton>
        }
      >
        {children}
      </SiteCard>
    </Dialog>
  );
}
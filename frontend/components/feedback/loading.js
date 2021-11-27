import { Dialog, Box, Grid, CircularProgress } from "@mui/material";

function SiteLoading({ open }) {
    return (
        <Dialog
            // onClose={onClose}
            aria-labelledby="dialog-alert"
            open={open}
            maxWidth="xs"
        >
            <Grid
                container
                justify="center"
                alignItems="center"
                style={{ height: 120, width: 120 }}
            >
                <CircularProgress />
            </Grid>
        </Dialog>
    );
}

export default SiteLoading;
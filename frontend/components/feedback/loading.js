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
                justifyContent="center"
                alignItems="center"
                style={{ height: 120, width: 120 }}
            >
                <CircularProgress color="secondary" />
            </Grid>
        </Dialog>
    );
}

export default SiteLoading;
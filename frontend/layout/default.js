import Header from "./header"
import styles from '../styles/Home.module.css'
import Footer from "./footer"
import { useSelector } from "react-redux";
import { dispatch } from "../utils/redux/store";
import { alertSetError, alertSetMessage, alertSetSuccess } from "../utils/redux/slice/alert";
import SiteLoading from "../components/feedback/loading";
import SiteDialogAlert from "../components/feedback/alert";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

export default function Layout({ children }) {
    const loadingState = useSelector((state) => state.loading);
    const successState = useSelector((state) => state.alert.success);
    const errorState = useSelector((state) => state.alert.error);
    const messageState = useSelector((state) => state.alert.message);

    const reverseAlert = () => {
        // console.log("Clicked!");
        if (errorState) {
            dispatch(alertSetError(false));
        }
        if (successState) {
            dispatch(alertSetSuccess(false));
        }
        dispatch(alertSetMessage(""));
    };

    return (
        <>
            <Header />
            <SiteLoading open={loadingState} />
            <SiteDialogAlert
                open={errorState || successState}
                onClose={() => reverseAlert()}
                title={errorState ? "Error" : successState ? "Berhasil" : null}
                message={messageState}
                icon={
                    successState ? (
                        <CheckCircleIcon
                            color="secondary"
                            style={{ fontSize: 50, marginBottom: 12 }}
                        />
                    ) : (
                        <ErrorIcon
                            color="error"
                            style={{ fontSize: 50, marginBottom: 12 }}
                        />
                    )
                }
            />
            <div className={styles.container}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}
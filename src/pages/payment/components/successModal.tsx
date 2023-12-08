import { Modal, Box, Typography } from "@mui/material";

interface SuccessModelProps {
    open: boolean;
    handleClose: () => void;
}

const SuccessModel = (props: SuccessModelProps) => {
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}

        >
            <Box>
                <Typography>
                    Text in a modal
                </Typography>
                <Typography>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    );
};

export default SuccessModel;
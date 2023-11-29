import { Modal, Box, Typography } from "@mui/material";


interface cancelModelProps {
    open: boolean;
    handleClose: () => void;
}

const CancelModal = (props: cancelModelProps) => {
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

export default CancelModal;
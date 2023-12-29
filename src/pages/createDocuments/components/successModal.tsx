import { Modal, Box, Typography, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

interface SuccessModalProps {
    open: boolean;
    handleClose: () => void;
}

const SuccessModal = (props: SuccessModalProps) => {
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="success-modal-title"
            aria-describedby="success-modal-description"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    textAlign: 'center',
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={props.handleClose}>
                        <CloseIcon />
                    </Button>
                </Box>
                <Box sx={{ color: 'success.main', m: 2 }}>
                    <CheckCircleOutlineIcon sx={{ fontSize: 60 }} />
                </Box>
                <Typography id="success-modal-title" variant="h6" color="textSecondary">
                    ชำระเงินสำเร็จ!
                </Typography>
            </Box>
        </Modal>
    );
};

export default SuccessModal;

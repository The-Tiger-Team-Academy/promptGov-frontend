import { Modal, Box, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CancelModalProps {
    open: boolean;
    handleClose: () => void;
}

const CancelModal = (props: CancelModalProps) => {
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="cancel-modal-title"
            aria-describedby="cancel-modal-description"
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
                <Box sx={{ color: 'error.main', m: 2 }}>
                    <CloseIcon sx={{ fontSize: 60 }} />
                </Box>
                <Typography id="cancel-modal-title" variant="h6" color="textSecondary">
                    ขออภัย เกิดข้อผิดพลาดในขณะชำระเงิน
                </Typography>
                <Typography id="cancel-modal-description" sx={{ mt: 2 }}>
                    กรุณาลองใหม่ในภายหลัง !
                </Typography>
            </Box>
        </Modal>
    );
};

export default CancelModal;

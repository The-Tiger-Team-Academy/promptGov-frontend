import { SxProps } from '@mui/system';


const BoxHeadtext: SxProps = {
    paddingTop: '6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const TextOrderlist: SxProps = {
    marginLeft: '1rem',
    fontFamily: 'Kanit',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 'normal',
    width: 'max-content'
};

const BoxHeadButton: SxProps = {
    marginRight: '1rem',
    display: 'flex',
    gap: '16px'
};

const BoxCenter: SxProps = {
    borderRadius: '15px',
    overflow: 'hidden',
    backgroundColor: '#FFF',
};

const ButtonPay: SxProps = {
    backgroundColor: "#E53935",
    width: '152px',
    maxWidth: '100%',
    height: '40px'
};

const Gridcontainer: SxProps = {
    backgroundColor: "#E53935",
    padding: '1rem'
};

const Griditem: SxProps = {
    display: 'flex',
    justifyContent: 'flex-end'
};

const ImageContainer: SxProps = {
    padding: '2rem'
};

const ImageBox: SxProps = {
    display: 'flex',
    justifyContent: 'center'
};


const ImageBorder: SxProps = {
    border: '1px solid #000',
    display: 'inline-block'
};

const PaymentStyle = {
    BoxHeadtext,
    TextOrderlist,
    BoxHeadButton,
    BoxCenter,
    ButtonPay,
    Gridcontainer,
    Griditem,
    ImageContainer,
    ImageBox,
    ImageBorder

}

export default PaymentStyle;


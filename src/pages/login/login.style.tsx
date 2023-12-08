import { SxProps } from '@mui/system';


export const boxContainerStyles = (isSmallScreen: boolean): SxProps => ({
    backgroundImage: 'url(https://i.postimg.cc/rsvTfqNR/runs-on-paper-a.png)',
    backgroundPosition: 'bottom left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: isSmallScreen ? 'cover' : 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
});

export const gridItemStyles = (isSmallScreen: boolean, imageStyles: any): SxProps => ({
    backgroundImage: 'url(https://i.postimg.cc/mkTCtGHM/Vector.png)',
    backgroundPosition: 'top right',
    backgroundSize: isSmallScreen ? 'cover' : 'auto',
    ...imageStyles,
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
});

export const innerBoxStyles: SxProps = {
    backgroundColor: '#fff',
    padding: 0,
    borderRadius: 8,
    boxShadow: 0,
    zIndex: 2,
    mt: 2, // You can directly specify the value here instead of using isSmallScreen ? 2 : 0,
    marginBottom: '15rem',

};

export const logoBoxStyles: SxProps = {
    backgroundImage: 'url(https://i.postimg.cc/k41vFCpP/Logo-Prompt-Gov.png)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    width: '23rem',
    height: '5rem',
    zIndex: 1,
    backgroundSize: '85%',
};

export const typographyStyles: SxProps = {
    fontFamily: 'Kanit, sans-serif',
    textAlign: 'center',
    marginTop: '-0.5rem',
};

export const buttonStyles: SxProps = {
    backgroundColor: '#4285F4',
    borderRadius: 25,
    width: '16rem',
    height: '3rem',
    color: 'white',
    '&:hover': {
        backgroundColor: '#c1351a',
    },

};

export const useStyles = (() => ({
    root: {
        minHeight: '100vh',
        position: 'relative',
    },
    lowerLeftImage: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '40%',
        zIndex: -1,
    },
    topRightImage: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '40%',
        zIndex: -1,
    },
    loginForm: {
        padding: '20px'
    },
    googleButton: {
        backgroundColor: '#4285F4',
        borderRadius: 25,
        width: '16rem',
        height: '3rem',
        color: 'white',
        '&:hover': {
            backgroundColor: '#c1351a',
        },
    },
    kanitFont: {
        fontFamily: 'Kanit, sans-serif',
    },
}));

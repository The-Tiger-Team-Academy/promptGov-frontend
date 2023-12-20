import { SxProps } from '@mui/system';
import { useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';



const useLoginStyles = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const boxContainer = (isSmallScreen: boolean): SxProps => ({
        backgroundImage: 'url(https://i.postimg.cc/rsvTfqNR/runs-on-paper-a.png)',
        backgroundPosition: 'bottom left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: isSmallScreen ? 'cover' : 'auto',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'none',
        },
    });

    const gridItem = (isSmallScreen: boolean, imageStyles: any): SxProps => ({
        backgroundImage: 'url(https://i.postimg.cc/mkTCtGHM/Vector.png)',
        backgroundPosition: 'top right',
        backgroundSize: isSmallScreen ? 'cover' : 'auto',
        ...imageStyles,
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'none',
        },
    });

    const imageStyles = {
        width: isSmallScreen ? '80vw' : '392px',
        height: isSmallScreen ? 'auto' : '367px',
        flexShrink: 0,
      };

    return { boxContainer, gridItem, imageStyles,isSmallScreen };
};

export default useLoginStyles;
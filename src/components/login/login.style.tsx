import { SxProps } from '@mui/system';
import { useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const LoginStylePage = () => {};

const boxContainerStyles = (isSmallScreen: boolean): SxProps => ({
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
  
  const gridItemStyles = (isSmallScreen: boolean, imageStyles: any): SxProps => ({
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
  
  const innerBoxStyles: SxProps = {
    backgroundColor: '#fff',
    padding: 0,
    borderRadius: 8,
    boxShadow: 0,
    zIndex: 2,
    mt: 2, // You can directly specify the value here instead of using isSmallScreen ? 2 : 0,
    marginBottom: '15rem',
  };
  
  const logoBoxStyles: SxProps = {
    backgroundImage: 'url(https://i.postimg.cc/k41vFCpP/Logo-Prompt-Gov.png)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    width: '23rem',
    height: '5rem',
    zIndex: 1,
    backgroundSize: '85%',
  };
  
  const typographyStyles: SxProps = {
    fontFamily: 'Kanit, sans-serif',
    textAlign: 'center',
    marginTop: '-0.5rem',
  };
  
  const buttonStyles: SxProps = {
    backgroundColor: '#4285F4',
    borderRadius: 25,
    width: '16rem',
    height: '3rem',
    color: 'white',
    '&:hover': {
      backgroundColor: '#c1351a',
    },
  };
  
  const LoginStylePage = {
    boxContainerStyles,
    gridItemStyles,
    innerBoxStyles,
    logoBoxStyles,
    typographyStyles,
    buttonStyles,
  }

  export default LoginStylePage;

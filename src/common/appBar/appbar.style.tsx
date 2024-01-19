import appBarConstants from "./appBar.constants";




const styles = (open: boolean) => ({
    
    appBarStyle: {
        // marginLeft: open ? appBarConstants.drawerWidth : appBarConstants.minimizedWidth,
        // width: open ? `calc(100% - ${appBarConstants.drawerWidth}px)` : `calc(100% - ${appBarConstants.minimizedWidth}px)`,
        // transition: 'margin 0.3s ease, width 0.3s ease',
        margin: 0,
        backgroundColor: 'white',
        borderWidth: 0,
        borderColor: '#E5EAF2',
        borderStyle: 'solid',
        backdropFilter: 'blur(8px)',
        boxShadow: '0px 4px 12px -4px rgba(0, 0, 0, 0.25);',
        borderBottomWidth: 'thin',
        fontFamily: '"Kanit", sans-serif',
    },
    Logo_xs: {
        height: 27,
        width: 160,
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 },
        mr: 2,
        display: { xs: 'none', md: 'flex' },

    },
    Box_xs: {
        flexGrow: 1, 
        display: { xs: 'flex', md: 'none' }
    },
    Box_md: {
        flexGrow: 1, 
        display: { xs: 'none', md: 'flex' }
    },

    Logo_md: {
        height: 27,
        width: 160,
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 },
    },
    Menu: {
        display: { xs: 'block', md: 'none' },

    },
    Typography: {
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1,
    },

});

export default styles;


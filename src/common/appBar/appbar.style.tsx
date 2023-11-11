import appBarConstants from "./appBar.constants";

const styles = (open: boolean) => ({
    appBarStyle: {
        marginLeft: open ? appBarConstants.drawerWidth : appBarConstants.minimizedWidth, 
        width: open ? `calc(100% - ${appBarConstants.drawerWidth}px)` : `calc(100% - ${appBarConstants.minimizedWidth}px)`,
        transition: 'margin 0.3s ease, width 0.3s ease',
    },
});

export default styles;
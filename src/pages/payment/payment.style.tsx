const styles = (open: boolean) => ({
    BoxHeadtext: {
        paddingTop: '6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    TextOrderlist: {
        marginLeft: '1rem',
        fontFamily: 'Kanit',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: 'normal',
        width: 'max-content'
    },
    BoxHeadButton: {
        marginRight: '1rem',
        display: 'flex',
        gap: '16px'
    },
    BoxCenter: {
        borderRadius: '15px',
        overflow: 'hidden',
        backgroundColor: '#FFF',
        
    },
    ButtonPay: {
        backgroundColor: "#E53935",
        width: '152px',
        maxWidth: '100%',
        height: '40px'
    },
    Gridcontainer :{
        padding: '1rem'
    },
    Griditem: {
        display: 'flex', 
        justifyContent: 'flex-end'
    },
    ImageContainer: {
        padding: '2rem'
    },
    ImageBox: {
        display: 'flex', 
        justifyContent: 'center'
    },
    ImageBorder: {
        border: '1px solid #000', 
        display: 'inline-block' 
    }

})

export default styles;


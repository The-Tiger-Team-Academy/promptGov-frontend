import { useState } from "react";

interface SidbarHooks {
    open: boolean;
    handleDrawerOpen: () => void;
    handleDrawerClose: () => void;
}

const sidbarHooks = (): SidbarHooks => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {

        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return { open, handleDrawerOpen, handleDrawerClose }
};

export default sidbarHooks;
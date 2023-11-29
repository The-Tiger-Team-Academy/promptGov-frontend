import { useState } from "react";

interface SidbarHooks {
    open: boolean;
    handleDrawerToggle: () => void;
}

const useSidbarHooks = (): SidbarHooks => {
    const [open, setOpen] = useState(true);

    const handleDrawerToggle = () => {
        setOpen(!open); // This toggles the state
    };

    return { open, handleDrawerToggle }
};

export default useSidbarHooks;
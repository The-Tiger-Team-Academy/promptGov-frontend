import { useState, useRef, useEffect, MutableRefObject } from 'react';

interface UseScrollDialogHook {
  open: boolean;
  scroll: 'paper' | 'body';
  handleOpen: (scrollType:'body') => void;
  handleClose: () => void;
  descriptionElementRef: MutableRefObject<HTMLElement | null>;
}

const useScrollDialog = (): UseScrollDialogHook => {
  const [open, setOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState<'paper' | 'body'>('paper');
  const descriptionElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleOpen = (scrollType:'body'): void => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return { open, scroll, handleOpen, handleClose, descriptionElementRef };
};

export default useScrollDialog;

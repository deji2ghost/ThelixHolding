import { type JSX } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { useAppDispatch } from "@/store/hook";
import { closeModal } from "@/store/modal";


interface modalProps{
    open: boolean, 
    Header: string,
    body: JSX.Element,
    MainHeader: string
}

const Modal = ({ open, Header, body, MainHeader }: modalProps) => {
    const dispatch = useAppDispatch();
  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      if (!isOpen) dispatch(closeModal());
    }}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle className="py-3">{MainHeader}</DialogTitle>
          <DialogDescription>
            {Header}
          </DialogDescription>
        </DialogHeader>
        {body}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

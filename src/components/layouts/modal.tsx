import { type JSX } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";


interface modalProps{
    open: boolean, 
    Header: string,
    body: JSX.Element,
    MainHeader: string
}

const Modal = ({ open, Header, body, MainHeader }: modalProps) => {
    
  return (
    <Dialog open={open}>
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

import { type JSX } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";


interface modalProps{
    open: boolean, 
    Header: string,
    body: JSX.Element,
}

const Modal = ({ open, Header, body }: modalProps) => {
    
  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="py-3">Add Product</DialogTitle>
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

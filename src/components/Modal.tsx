import { Button } from "@/components/ui/button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Prop {
  username: JSX.Element;
}

const Modal = ({ username }: Prop) => {
  const [open, setOpen] = useState(false);
  return (
    <DialogRoot
      lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      placement="center"
    >
      <DialogTrigger asChild>
        <Button variant="outline">{username}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>User settings</DialogTitle>
        </DialogHeader>
        <Text></Text>
        <DialogBody>
          <Input type="text" />
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button>Save</Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default Modal;

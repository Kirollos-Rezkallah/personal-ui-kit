import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
};
export default meta;

const ModalExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal isOpen={open} title="Example Modal" onClose={() => setOpen(false)}>
        <p>This is a simple accessible modal window!</p>
      </Modal>
    </>
  );
};

export const Default: StoryObj = {
  render: () => <ModalExample />,
};

import { Button } from "@fizzog/ui";
import React from "react";
import SimpleUsersDialog from "../components/SimpleUsersDialog.tsx";

export default function IndexPage() {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <Button variant="outlined" onClick={toggleOpen}>
        Ayo!
      </Button>
      {open && <SimpleUsersDialog onClose={toggleOpen} open={open} title="Users" />}
    </>
  );
}

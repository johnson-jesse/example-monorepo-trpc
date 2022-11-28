import { SimpleDialog } from '@fizzog/sx';
import { Button } from '@fizzog/ui';
import React from 'react';

describe('SimpleDialog.cy.js', () => {
  it('playground', () => {
    function Wrapper() {
      const [open, setOpen] = React.useState(true);

      return (
        <>
          <Button variant='contained' onClick={() => setOpen(true)}>
            Open Dialog
          </Button>
          <SimpleDialog open={open} title='SimpleDialog Test' onClose={() => setOpen(false)}>
            Lorem Ipsum
          </SimpleDialog>
        </>
      );
    }
    cy.inject(<Wrapper />);
  });
});

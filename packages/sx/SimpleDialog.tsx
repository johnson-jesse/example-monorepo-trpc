import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@fizzog/ui';

export type SimpleDialogProps = {
  className?: string;
  children: React.ReactNode;
  onClose(): void;
  open: boolean;
  title: string;
};

export function SimpleDialog({ onClose = () => {}, ...props }: SimpleDialogProps) {
  return (
    <Dialog className={props.className} open={props.open} onClose={onClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent dividers>{props.children}</DialogContent>
    </Dialog>
  );
}

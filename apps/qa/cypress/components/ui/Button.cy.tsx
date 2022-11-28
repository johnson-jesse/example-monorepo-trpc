import { Button, ButtonProps, Paper } from '@fizzog/ui';

function Container({ variant }: { variant: ButtonProps['variant'] }) {
  return (
    <Paper
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 4,
        flexWrap: 'wrap',
        p: 4
      }}
    >
      <Button variant={variant}>primary</Button>
      <Button variant={variant} disabled>
        primary
      </Button>
      <Button variant={variant} color='secondary'>
        primary
      </Button>
      <Button variant={variant} color='secondary' disabled>
        secondary
      </Button>
      <Button variant={variant} color='error'>
        secondary
      </Button>
      <Button variant={variant} color='error' disabled>
        error
      </Button>
      <Button variant={variant} color='warning'>
        warning
      </Button>
      <Button variant={variant} color='warning' disabled>
        warning
      </Button>
      <Button variant={variant} color='success'>
        success
      </Button>
      <Button variant={variant} color='success' disabled>
        success
      </Button>
      <Button variant={variant} color='info'>
        info
      </Button>
      <Button variant={variant} color='info' disabled>
        info
      </Button>
    </Paper>
  );
}

describe('Button.cy.js', () => {
  it('playground', () => {
    cy.viewport(550, 1150);
    const Wrapper = () => (
      <>
        <Container variant='contained' />
        <Container variant='outlined' />
        <Container variant='text' />
      </>
    );
    cy.inject(<Wrapper />);
  });
});

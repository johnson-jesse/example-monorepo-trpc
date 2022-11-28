import { OptionFormControl } from '@fizzog/sx';
import { FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Typography } from '@fizzog/ui';

function Container() {
  return (
    <>
      <Typography variant='caption'>Radios using FormControl FormLabel RadioGroup and FormControlLabel</Typography>
      <Paper
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 4,
          flexWrap: 'wrap',
          p: 4
        }}
      >
        <OptionFormControl
          label='Primary'
          id='radio-buttons-group-label-primary'
          options={[
            {
              label: 'Small',
              value: 'small',
              size: 'small'
            },
            {
              label: 'Medium',
              value: 'medium',
              size: 'medium'
            },
            {
              label: 'Disabled',
              value: 'disabled',
              disabled: true
            }
          ]}
        />
        <OptionFormControl
          label='Secondary'
          id='radio-buttons-group-label-secondary'
          color='secondary'
          options={[
            {
              label: 'Small',
              value: 'small',
              size: 'small',
              color: 'secondary'
            },
            {
              label: 'Medium',
              value: 'medium',
              size: 'medium',
              color: 'secondary'
            },
            {
              label: 'Disabled',
              value: 'disabled',
              color: 'secondary',
              disabled: true
            }
          ]}
        />
        <OptionFormControl
          label='Error'
          id='radio-buttons-group-label-error'
          color='error'
          options={[
            {
              label: 'Small',
              value: 'small',
              size: 'small',
              color: 'error'
            },
            {
              label: 'Medium',
              value: 'medium',
              size: 'medium',
              color: 'error'
            },
            {
              label: 'Disabled',
              value: 'disabled',
              color: 'error',
              disabled: true
            }
          ]}
        />
        <OptionFormControl
          label='Success'
          id='radio-buttons-group-label-success'
          color='success'
          options={[
            {
              label: 'Small',
              value: 'small',
              size: 'small',
              color: 'success'
            },
            {
              label: 'Medium',
              value: 'medium',
              size: 'medium',
              color: 'success'
            },
            {
              label: 'Disabled',
              value: 'disabled',
              color: 'success',
              disabled: true
            }
          ]}
        />
        <OptionFormControl
          label='Warning'
          id='radio-buttons-group-label-warning'
          color='warning'
          options={[
            {
              label: 'Small',
              value: 'small',
              size: 'small',
              color: 'warning'
            },
            {
              label: 'Medium',
              value: 'medium',
              size: 'medium',
              color: 'warning'
            },
            {
              label: 'Disabled',
              value: 'disabled',
              color: 'warning',
              disabled: true
            }
          ]}
        />
        <OptionFormControl
          label='Info'
          id='radio-buttons-group-label-info'
          color='info'
          options={[
            {
              label: 'Small',
              value: 'small',
              size: 'small',
              color: 'info'
            },
            {
              label: 'Medium',
              value: 'medium',
              size: 'medium',
              color: 'info'
            },
            {
              label: 'Disabled',
              value: 'disabled',
              color: 'info',
              disabled: true
            }
          ]}
        />
      </Paper>
    </>
  );
}

describe('OptionFormControl.cy.js', () => {
  it('playground', () => {
    cy.viewport(550, 600);
    cy.inject(<Container />);
  });
});

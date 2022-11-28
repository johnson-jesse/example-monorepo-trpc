import { FormControl, FormControlProps, FormControlLabel, FormLabel, Radio, RadioGroup, RadioProps } from '@fizzog/ui';

export type OptionFormControlProps = {
  color?: FormControlProps['color'];
  label: string;
  id: string;
  defaultValue?: string;
  options: {
    label: string;
    value: string;
    disabled?: boolean;
    size?: RadioProps['size'];
    color?: RadioProps['color'];
  }[];
};

export function OptionFormControl(props: OptionFormControlProps) {
  return (
    <FormControl color={props.color}>
      <FormLabel id={props.id}>{props.label}</FormLabel>
      <RadioGroup aria-labelledby={props.id} defaultValue='small' name='radio-buttons-group'>
        {props.options.map(({ color, size, ...others }) => (
          <FormControlLabel key={others.value} control={<Radio size={size} color={color} />} {...others} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

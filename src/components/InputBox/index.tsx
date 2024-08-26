import {
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';

interface InputBoxProps {
  text: string;
  placeholder?: string;
  type?: string;
}

const InputBox = ({ text, placeholder = '', type = 'text', ...props }: InputBoxProps) => {
  return (
    <FormControl padding={1} isRequired>
      <FormLabel>{text}</FormLabel>
      {type === 'number' ? (
        <NumberInput min={1}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      ) : (
        <Input placeholder={placeholder} type={type} {...props} />
      )}
    </FormControl>
  );
};

export default InputBox;

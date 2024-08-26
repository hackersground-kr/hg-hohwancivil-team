import {
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

interface InputBoxProps {
  text: string;
  placeholder?: string;
  type?: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputBox = ({
  text,
  value,
  placeholder = "",
  type = "text",
  onChange,
  ...props
}: InputBoxProps) => {
  return (
    <FormControl padding={1} isRequired>
      <FormLabel>{text}</FormLabel>
      {type === "number" ? (
        <NumberInput min={1}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      ) : (
        <Input
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          {...props}
          value={value}
        />
      )}
    </FormControl>
  );
};

export default InputBox;

"use client";
interface MyInputProps {
  type?: string;
  disabled?: boolean;
  name?: string;
  placeholder?: string;
  label?: string;
  value?: string | number;
  error?: any;
  inlineElement?: JSX.Element;
  onInputChange: (name: string, value: string) => void;
}
const Input = ({
  type,
  error,
  disabled,
  name,
  value,
  inlineElement,
  placeholder,
  label,
  onInputChange,
}: MyInputProps): JSX.Element => {
  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.name, e.target.value);
  };
  return (
    <div>
      <div className="input-text-block">
        <input
          className={"input-text"}
          type={type}
          onChange={(e) => {
            _onChange(e);
          }}
          disabled={disabled}
          name={name}
          value={value}
          placeholder={placeholder}
        />
        {inlineElement}
      </div>
      <span className="invalid-message">{error && error[0]}</span>
    </div>
  );
};

export default Input;

"use client";
interface MyInputProps {
  type?: string;
  disabled?: boolean;
  name?: string;
  className?: string;
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
  className,
  onInputChange,
}: MyInputProps): JSX.Element => {
  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.name, e.target.value);
  };
  return (
    <div className={className}>
      <div className="input-text-wrapper">
        {label && <label>{label}</label>}
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
        <span className="invalid-message">{error && error[0]}</span>
      </div>
    </div>
  );
};

export default Input;

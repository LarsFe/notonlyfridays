type InputComponentProps = {
  inputType: string;
  identifier: string;
};

export default function InputComponent({
  inputType,
  identifier,
}: InputComponentProps) {
  return <input id={identifier} type={inputType} />;
}

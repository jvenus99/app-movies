import { Input } from '@ui5/webcomponents-react';

type Props = {
  type?: 'Text' | 'Email' | 'Number' | 'Password' | 'Tel' | 'URL'
  placeholder?: string
  disabled?: boolean
}  & JSX.IntrinsicElements['input']

const InputAtom: React.FC<Props> = (props: Props) => {
  return (
    <Input
      className="input-atom"
      data-testid="InputAtom"
      type={props.type}
      placeholder={props.placeholder}
      disabled={props.disabled}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
    />
  )
}

export default InputAtom
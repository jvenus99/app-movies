import { Button } from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/AllIcons.js";

type Props = {
  design?: 'Default' | 'Positive' | 'Negative' | 'Transparent' | 'Emphasized' | 'Attention'
  icon?:string
  disabled?: boolean
  onClick?: () => void
} & React.HTMLAttributes<HTMLButtonElement>

const ButtonAtom: React.FC<Props> = (props: Props) => (
  <Button
    design={props.design}
    icon={props.icon}
    disabled={props.disabled}
    onClick={props.onClick}
    className='button-atom'
  >
      {props.children}
  </Button>
)



export default ButtonAtom

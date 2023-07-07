import React, { HtmlHTMLAttributes } from 'react';
import './text.atom.scss';

import { Text } from '@ui5/webcomponents-react';

type Props = {
  children: string;
  size?: 'Small' | 'Medium' | 'Large';
  bold?: boolean;
} & HtmlHTMLAttributes<HTMLDivElement>;

const TextAtom: React.FC<Props> = (props: Props) => {
  const { size, bold } = props;

  const textClasses = [
    'text-atom',
    size?.toLowerCase(),
    bold && 'bold',
  ].filter(Boolean).join(' ');

  return (
    <Text className={textClasses} data-testid="TextAtom">
      {props.children}
    </Text>
  );
};

export default TextAtom;
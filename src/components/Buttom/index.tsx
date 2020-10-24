import React from 'react';
import { Wrapper } from './Buttom.styles';

// types
type Props = {
	text: string;
	callback: () => void;
};
const Buttom: React.FC<Props> = ({ text, callback }) => (
	<Wrapper type="button" onClick={callback}>
		{text}
	</Wrapper>
);
export default Buttom;

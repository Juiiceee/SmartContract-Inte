import {Button as ButtonAntd} from 'antd';

export default function Button({ children, onClick, className }: { children: React.ReactNode, onClick?: () => void, className?: string }) {
	return (
		<ButtonAntd onClick={onClick} className={className} type='primary'>
			{children}
		</ButtonAntd>
	);
}
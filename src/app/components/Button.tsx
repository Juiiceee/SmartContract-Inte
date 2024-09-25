import {Button as ButtonAntd} from 'antd';

export default function Button({ children, onClick, className, isLoading=false }: { children: React.ReactNode, onClick?: () => void, className?: string, isLoading?: boolean }) {
	return (
		<ButtonAntd onClick={onClick} className={className} type='primary' loading={isLoading} >
			{children}
		</ButtonAntd>
	);
}
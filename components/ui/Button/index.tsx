import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

export const Button: FC<PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>> = ({
	children,
	className,
	...props
}) => {
	return (
		<button
			{...props}
			className={`${className} border-1 rounded-md border-gray-300 p-2 leading-none text-gray-500 cursor-pointer hover:bg-gray-200 duration-200`}
		>
			{children}
		</button>
	);
};

export default Button;

import { ComponentPropsWithoutRef, forwardRef } from 'react';

export interface TextInputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'type'> {
	type?: 'text' | 'password';
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({ className, ...props }, ref) => {
	return <input ref={ref} className={className ?? 'input-basic'} {...props} />;
});

export default TextInput;

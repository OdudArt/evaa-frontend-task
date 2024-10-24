import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'w-full placeholder:text-white text-white focus-visible:outline-none bg-transparent text-3xl p-0 border-0 font-[500]',
  {
    variants: {
      size: {
        default: 'h-8'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
);
type BaseProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
type InputVariantProps = VariantProps<typeof inputVariants>;

interface InputProps extends Omit<BaseProps, keyof InputVariantProps>, InputVariantProps {
  suffix?: ReactNode;
  caption?: ReactNode;
  wrapClassName?: string;
  onChange?: (arg: string) => void;
}

const Input = ({ onChange, suffix, caption, size, className, wrapClassName, ...rest }: InputProps) => (
  <div className={cn('flex items-center gap-2 w-full bg-black rounded-sm py-4 px-6', wrapClassName)}>
    <div className="w-full">
      <input
        {...rest}
        className={cn(inputVariants({ size, className }))}
        onChange={(e) => {
          if (onChange) onChange(e.target.value);
        }}
      />
      {caption}
    </div>
    {suffix}
  </div>
);

export { Input };

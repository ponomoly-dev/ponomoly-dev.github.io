import clsx from 'clsx';
import Link from 'next/link';

//   className = clsx(
//     className,
//     'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
//     invert
//       ? 'bg-white text-neutral-950 hover:bg-neutral-200'
//       : 'bg-neutral-950 text-white hover:bg-neutral-800',
//   )

type ButtonProps = {
  buttonType?: 'primary' | 'secondary';
} & (
  | React.ComponentPropsWithRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & {
      href?: undefined;
    })
);

export function Button({
  buttonType = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    buttonType === 'primary'
      ? 'bg-neutral-950 text-white hover:bg-neutral-800'
      : 'bg-white text-netural-950 hover:bg-neutral-200',
  );
  const inner = <span className="relative top-px">{children}</span>;
  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    );
  }
  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  );
}

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { cn } from 'lib/utils';
import * as React from 'react';

const Checkbox = React.forwardRef(({ className, label, ...props }, ref) => {
  const [checked, setChecked] = React.useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div className={cn('flex items-center justify-start', className)} {...props}>
      <CheckboxPrimitive.Root
        ref={ref}
        className="peer h-3 w-3 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        checked={checked}
        onClick={handleToggle}
      >
        <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
          <CheckIcon className="h-3 w-3" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <button type="button" className="text-sm ml-3" onClick={handleToggle}>
        {label}
      </button>
    </div>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

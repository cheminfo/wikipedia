import * as Tooltip from '@radix-ui/react-tooltip';

interface TooltipProps {
  children: JSX.Element;
  info: string;
  className?: string;
}

export default function Hint({
  children,
  info,
  className,
}: TooltipProps): JSX.Element {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild className={className}>
        {children}
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className="rounded-md bg-tooltip px-2.5 py-1 text-sm text-white"
          sideOffset={5}
        >
          {info}
          <Tooltip.Arrow className="-mt-0.5 fill-tooltip" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

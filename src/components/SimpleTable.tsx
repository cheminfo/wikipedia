import clsx from 'clsx';
import { ReactElement } from 'react';

interface SimpleTableProps {
  title?: string;
  help?: ReactElement;
  footer?: ReactElement;
  option?: ReactElement;
  children: ReactElement;
  className?: string;
  height?: string;
}

export default function SimpleTable(props: SimpleTableProps) {
  return (
    <div
      className={clsx(
        'mb-2.5 sm:mb-5 flex flex-col rounded-lg bg-white sm:shadow-md',
        props.className,
      )}
    >
      <div className="flex items-center justify-between rounded-t-lg bg-lightblue px-5 py-2 text-darkblue">
        <div className="flex items-center space-x-3">
          <div className="font-semibold">{props.title}</div>
          <div>{props.help}</div>
        </div>
        <div className="font-normal">{props.option}</div>
      </div>
      <div className={props.height}>{props.children}</div>
      <div className="rounded-b-lg bg-lightblue text-darkblue">
        {props.footer}
      </div>
    </div>
  );
}

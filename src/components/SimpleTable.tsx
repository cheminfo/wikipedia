import clsx from 'clsx';

interface SimpleTableProps {
  title?: string;
  footer?: JSX.Element;
  option?: JSX.Element;
  content: JSX.Element;
  className?: string;
  height?: string;
}

export default function SimpleTable(props: SimpleTableProps): JSX.Element {
  return (
    <div
      className={clsx(
        'mb-5 flex flex-col rounded-lg bg-white shadow-md',
        props.className,
      )}
    >
      <div className="flex items-center justify-between rounded-t-lg bg-lightblue px-5 py-2 text-darkblue">
        <div className="font-semibold">{props.title}</div>
        <div className="font-normal">{props.option}</div>
      </div>
      <div className={props.height}>{props.content}</div>
      <div className="rounded-b-lg bg-lightblue text-darkblue">
        {props.footer}
      </div>
    </div>
  );
}

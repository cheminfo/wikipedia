import clsx from 'clsx';

export interface Props {
  title?: string;
  footer?: JSX.Element;
  option?: JSX.Element;
  content: JSX.Element;
  className?: string;
  height?: string;
}

export default function SimpleTable(props: Props): JSX.Element {
  return (
    <div
      className={clsx(
        'mb-5 flex flex-col rounded-lg bg-white shadow-md',
        props.className,
      )}
    >
      <div className="flex items-center justify-between rounded-t-lg bg-[#92BEDF] px-5 py-2 text-[#0A4E7A]">
        <div className="">{props.title}</div>
        <div className="">{props.option}</div>
      </div>
      <div className={props.height}>{props.content}</div>
      <div className="rounded-b-lg bg-[#92BEDF] text-[#0A4E7A]">
        {props.footer}
      </div>
    </div>
  );
}

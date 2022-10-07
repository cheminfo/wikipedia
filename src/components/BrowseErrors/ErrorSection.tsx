import clsx from 'clsx';

export interface Props {
  title: string;
  number: number;
  description: string;
  table: JSX.Element;
  height?: string;
}

export function ErrorSection(props: Props): JSX.Element {
  return (
    <div className="grid grid-rows-6">
      <div className="row-span-1">
        <div className="flex space-x-1 text-lg font-semibold text-[#0A4E7A]">
          <div className="">{props.title}</div>
          <div className="">({props.number})</div>
        </div>
        <div className="font-normal">{props.description}</div>
      </div>
      <div className={clsx('row-span-5 mt-2', props.height)}>{props.table}</div>
    </div>
  );
}

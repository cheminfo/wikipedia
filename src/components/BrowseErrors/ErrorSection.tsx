import clsx from 'clsx';

export interface Props {
  title: string;
  number: string;
  description: string;
  table: JSX.Element;
  height?: string;
}

export function ErrorSection(props: Props): JSX.Element {
  return (
    <div className="w-full lg:w-[45%] xl:w-[40%]">
      <div className="h-24">
        <div className="flex space-x-1 text-lg font-semibold text-[#0A4E7A]">
          <div className="">{props.title}</div>
          <div className="">({props.number})</div>
        </div>
        <div className="font-normal">{props.description}</div>
      </div>
      <div className={clsx('mt-2', props.height)}>{props.table}</div>
    </div>
  );
}

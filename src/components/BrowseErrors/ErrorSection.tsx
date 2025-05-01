import type { ReactElement } from 'react';

interface ErrorSectionProps {
  title: string;
  number: number;
  description: string;
  table: ReactElement;
  height?: string;
}

export function ErrorSection(props: ErrorSectionProps) {
  return (
    <div className="w-full md:w-[45%] xl:w-[40%]">
      <div className="mb-4 h-24">
        <div className="flex space-x-1 font-semibold text-darkblue lg:text-lg">
          {props.title} ({props.number})
        </div>
        <div className="text-sm font-normal lg:text-base">
          {props.description}
        </div>
      </div>
      <div className={props.height}>{props.table}</div>
    </div>
  );
}

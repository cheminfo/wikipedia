import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import clsx from 'clsx';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { Fragment } from 'react';
import { MdClose } from 'react-icons/md';

interface DialogWindowProps {
  title: string;
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  className?: string;
}

export default function DialogWindow({
  title,
  showDialog,
  setShowDialog,
  children,
  className,
}: DialogWindowProps) {
  return (
    <Transition show={showDialog} as={Fragment}>
      <Dialog
        className="fixed inset-0 flex items-center justify-center"
        open={showDialog}
        onClose={() => setShowDialog(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-black/50 transition-opacity sm:block" />
        </TransitionChild>

        <div className="mt-28 h-full sm:fixed sm:inset-0 sm:mt-0 sm:overflow-y-auto">
          <div className="flex h-full items-center justify-center sm:mx-4 sm:min-h-full">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                className={clsx(
                  'flex flex-col justify-center bg-white sm:rounded-xl sm:shadow-xl',
                  className,
                )}
              >
                <div className="flex justify-between space-x-2 bg-lightblue px-5 py-2 font-medium text-darkblue sm:rounded-t-xl sm:pt-2">
                  <DialogTitle>{title}</DialogTitle>
                  <button type="button" onClick={() => setShowDialog(false)}>
                    <MdClose size={20} />
                  </button>
                </div>
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

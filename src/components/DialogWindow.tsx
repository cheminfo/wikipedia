import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';
import { MdClose } from 'react-icons/md';

interface DialogWindowProps {
  title: string;
  showDialog: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
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
    <Transition.Root show={showDialog} as={Fragment}>
      <Dialog
        className="fixed inset-0 flex items-center justify-center"
        open={showDialog}
        onClose={() => setShowDialog(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-black bg-opacity-50 transition-opacity sm:block" />
        </Transition.Child>

        <div className="mt-28 h-full sm:fixed sm:inset-0 sm:mt-0 sm:overflow-y-auto">
          <div className="flex h-full items-center justify-center sm:mx-4 sm:min-h-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={clsx(
                  'flex flex-col justify-center bg-white sm:rounded-xl sm:shadow-xl',
                  className,
                )}
              >
                <div className="flex justify-between space-x-2 bg-lightblue px-5 py-2 font-medium text-darkblue sm:rounded-t-xl sm:pt-2">
                  <Dialog.Title>{title}</Dialog.Title>
                  <button type="button" onClick={() => setShowDialog(false)}>
                    <MdClose size={20} />
                  </button>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

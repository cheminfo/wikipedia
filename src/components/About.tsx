import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { MdClose } from 'react-icons/md';

interface AboutProps {
  showAbout: boolean;
  setShowAbout: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function About({ showAbout, setShowAbout }: AboutProps) {
  return (
    <Transition.Root show={showAbout} as={Fragment}>
      <Dialog
        className="fixed inset-0 flex items-center justify-center"
        open={showAbout}
        onClose={() => setShowAbout(false)}
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
              <Dialog.Panel className="flex h-full flex-col justify-center bg-white sm:h-fit sm:max-w-xl sm:rounded-xl sm:shadow-xl">
                <div className="flex justify-between space-x-2 bg-lightblue px-5 py-2 font-medium text-darkblue sm:rounded-t-xl sm:pt-2">
                  <Dialog.Title>
                    About Wikipedia Chemical Structure Explorer
                  </Dialog.Title>
                  <button type="button" onClick={() => setShowAbout(false)}>
                    <MdClose size={20} />
                  </button>
                </div>
                <AboutContent />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

function AboutContent() {
  return (
    <div className="scrollbar flex h-full flex-col space-y-5 overflow-y-auto p-5 pb-20 sm:h-auto sm:pb-5">
      <p>
        Wikipedia Chemical Structure Explorer: Substructure and similarity
        searching of molecules from Wikipedia Peter Ertl, Luc Patiny, Thomas
        Sander, Christian Rufener and Michaël Zasso,
        <i> Journal of Cheminformatics</i> <b>2015</b>.{' '}
        <a
          href="https://dx.doi.org/10.1186/s13321-015-0061-y"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          DOI: 10.1186/s13321-015-0061-y
        </a>
      </p>
      <p>
        Wikipedia, the world&apos;s largest and most popular encyclopedia is an
        indispensable source of chemistry information, containing among others
        also entries for over 15,000 chemicals including metabolites, drugs,
        agrochemicals or industrial chemicals. We provide here an easy access to
        this wealth of information by allowing substructure and similarity
        search tool for chemical structures referenced in Wikipedia.
      </p>
      <p>
        This project is the result of a collaboration between Novartis, Ecole
        Polytechnique Fédérale de Lausanne, Actelion and maintained by Zakodium
        Sàrl.
      </p>
    </div>
  );
}

import { Dispatch, SetStateAction } from 'react';

import DialogWindow from './DialogWindow.js';

interface AboutProps {
  showAbout: boolean;
  setShowAbout: Dispatch<SetStateAction<boolean>>;
}

export default function About({ showAbout, setShowAbout }: AboutProps) {
  return (
    <DialogWindow
      title="About Wikipedia Chemical Structure Explorer"
      showDialog={showAbout}
      setShowDialog={setShowAbout}
      className="h-full sm:h-fit sm:max-w-xl "
    >
      <AboutContent />
    </DialogWindow>
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

import { Dispatch, SetStateAction } from 'react';

import DialogWindow from './DialogWindow.js';

interface HelpDialogProps {
  showHelp: boolean;
  setShowHelp: Dispatch<SetStateAction<boolean>>;
}

export default function HelpDialog({ showHelp, setShowHelp }: HelpDialogProps) {
  return (
    <DialogWindow
      title="Osiris Structure Editor"
      showDialog={showHelp}
      setShowDialog={setShowHelp}
      className="h-full w-screen sm:h-[80vh] sm:w-[90vw] sm:max-w-xl"
    >
      <iframe src="./editor/editor.html" height="100%" width="100%" />
    </DialogWindow>
  );
}

import actelion from '../../public/logo/actelion.png';
import epfl from '../../public/logo/epfl.svg';
import novartis from '../../public/logo/novartis.svg';

export function Footer(): JSX.Element {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-10 px-4 pb-12 pt-6 lg:gap-x-52">
      <a
        href="https://www.novartis.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={novartis} alt="novartis" className="w-36 lg:w-48" />
      </a>
      <a
        href="https://www.epfl.ch/en/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={epfl} alt="epfl" className="w-28 lg:w-36" />
      </a>
      <a
        href="https://www.janssen.com/pulmonary-hypertension/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={actelion} alt="actelion" className="w-32 lg:w-40" />
      </a>
    </div>
  );
}

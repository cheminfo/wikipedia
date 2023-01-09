/* eslint-disable import/no-absolute-path */

import actelion from '/logo/actelion.png';
import epfl from '/logo/epfl.svg';
import novartis from '/logo/novartis.svg';
import zakodium from '/logo/zakodium.svg';

const logos = [
  {
    name: novartis,
    link: 'https://www.novartis.com/',
    className: 'w-36 lg:w-48',
  },
  {
    name: epfl,
    link: 'https://www.epfl.ch/en/',
    className: 'w-28 lg:w-36',
  },
  {
    name: actelion,
    link: 'https://www.janssen.com/pulmonary-hypertension/',
    className: 'w-32 lg:w-40',
  },
  {
    name: zakodium,
    link: 'https://www.zakodium.com/',
    className: 'w-36 lg:w-44',
  },
];

export function Footer(): JSX.Element {
  return (
    <div className="flex flex-wrap items-end justify-center gap-x-16 gap-y-14 px-6 pb-12 pt-6 lg:gap-x-32">
      {logos.map((logo) => (
        <a
          key={logo.name}
          href={logo.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo.name} alt={logo.name} className={logo.className} />
        </a>
      ))}
    </div>
  );
}

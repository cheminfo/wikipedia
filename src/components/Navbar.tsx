import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

interface NavbarProps {
  showAbout: boolean;
  setShowAbout: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Navbar({ showAbout, setShowAbout }: NavbarProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const sections = [
    { name: 'Explore structures', link: '/' },
    { name: 'Browse errors', link: '/errors' },
    { name: 'Download SMILES', link: '/smiles.txt', download: 'smiles.txt' },
  ];

  const NavbarLinks = sections.map((section) =>
    section.download ? (
      <a key={section.name} href={section.link} download={section.download}>
        {section.name}
      </a>
    ) : (
      <NavLink
        key={section.name}
        to={section.link}
        className={({ isActive }) =>
          clsx('hover:text-lightblue', { 'text-lightblue': isActive })
        }
      >
        {section.name}
      </NavLink>
    ),
  );

  return (
    <div className="fixed z-10 w-full">
      <div className="z-50 flex items-center justify-between bg-darkblue px-4 py-2 text-lightgray sm:px-16">
        <Link to="/" className="sm:text-lg 2xl:text-2xl">
          Wikipedia Chemical Structure Explorer
        </Link>
        <nav className="hidden space-x-12 xl:block">
          {NavbarLinks}
          <button
            type="button"
            className={clsx('hover:text-lightblue', {
              'text-lightblue': showAbout,
            })}
            onClick={() => setShowAbout(true)}
          >
            About
          </button>
        </nav>
        <a
          href="https://github.com/cheminfo/wikipedia"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="hidden rounded-lg border py-1.5 px-4 font-semibold transition duration-150 ease-in-out hover:bg-white hover:text-darkblue xl:block"
          >
            Fork me on GitHub
          </button>
        </a>
        {/* hamburger menu */}
        <div className="flex xl:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-y-5 oppacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-50 transform"
        leaveFrom="opacity-100"
        leaveTo="-translate-y-5 oppacity-0"
      >
        <div className="xl:hidden">
          <nav
            onClick={() => setIsOpen(false)}
            className="flex flex-col items-center gap-y-4 bg-darkblue py-6 text-white"
          >
            {NavbarLinks}
            <button
              type="button"
              className="hover:text-lightblue"
              onClick={() => setShowAbout(true)}
            >
              About
            </button>
            <a
              href="https://github.com/cheminfo/wikipedia"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="rounded-lg border py-1.5 px-4 font-semibold transition duration-150 ease-in-out hover:bg-white hover:text-darkblue"
              >
                Fork me on GitHub
              </button>
            </a>
          </nav>
        </div>
      </Transition>
    </div>
  );
}

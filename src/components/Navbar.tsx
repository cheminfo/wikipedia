import clsx from 'clsx';

export function Navbar(): JSX.Element {
  const sections = [
    { name: 'Explore structures', link: '/' },
    { name: 'Browse errors', link: '/errors' },
    { name: 'Download SMILES', link: '/smiles.txt' },
    { name: 'About', link: '/about' },
  ];

  const NavbarLinks = sections.map((section) => (
    <a
      key={section.name}
      href={section.link}
      className={clsx('hover:text-white', {
        'font-semibold text-white': window.location.pathname === section.link,
      })}
    >
      {section.name}
    </a>
  ));
  return (
    <div className="fixed z-50 flex w-full items-center justify-between bg-[#0A4E7A] px-16 py-2 text-[#EAEBED]">
      <a href="/" className="text-lg xl:text-2xl">
        Wikipedia Chemical Structure Explorer
      </a>
      <nav className="hidden space-x-12 xl:block">{NavbarLinks}</nav>
      <a
        href="https://github.com/cheminfo/wikipedia"
        target="_blank"
        rel="noreferrer"
      >
        <button
          type="button"
          className="rounded-lg border py-1.5 px-4 font-semibold transition duration-150 ease-in-out hover:bg-white hover:text-[#0A4E7A]"
        >
          Fork me on GitHub
        </button>
      </a>
    </div>
  );
}

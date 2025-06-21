const NavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    onClick={onClick}
    className='group relative font-medium text-gray-700 transition-colors hover:text-green-600'
  >
    {children}
    <span className='absolute -bottom-1 left-0 h-0.5 w-0 bg-green-600 transition-all group-hover:w-full'></span>
  </a>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    onClick={onClick}
    className='rounded-lg px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-green-50 hover:text-green-600'
  >
    {children}
  </a>
);

export { NavLink, MobileNavLink };

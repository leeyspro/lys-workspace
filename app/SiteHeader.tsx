import Link from 'next/link';

type Track = 'adsp' | 'sqld' | 'aws' | 'home';

type SubNavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  active: Track;
  subNav?: SubNavItem[];
  subNavLabel?: string;
};

const mainNav = [
  { key: 'adsp', label: 'ADsP', href: '/adsp#dashboard' },
  { key: 'sqld', label: 'SQLD', href: '/sqld#dashboard' },
  { key: 'aws', label: 'AWS', href: '/aws#dashboard' },
] as const;

export default function SiteHeader({ active, subNav = [], subNavLabel = '세부 메뉴' }: SiteHeaderProps) {
  return (
    <>
      <header className="topbar">
        <Link className="brand" href="/">
          Data Lab
        </Link>
        <nav className="globalNav" aria-label="학습 트랙">
          {mainNav.map((item) => (
            <Link className={active === item.key ? 'activeTrack' : undefined} href={item.href} key={item.key}>
              {item.label}
            </Link>
          ))}
        </nav>
        <button className="loginButton" type="button">
          login
        </button>
      </header>

      {subNav.length > 0 ? (
        <nav className="trackNav" aria-label={subNavLabel}>
          {subNav.map((item) => (
            <Link href={item.href} key={`${item.href}-${item.label}`}>
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </>
  );
}

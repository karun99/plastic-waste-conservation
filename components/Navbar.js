import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/plastics', label: 'Plastic Literacy' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/calculator', label: 'Impact Calculator' },
  { href: '/solutions', label: 'Solution Matcher' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/about', label: 'About' }
];

export default function Navbar() {
  return (
    <nav aria-label="Main navigation">
      <Link href="/" className="brand">
        ♻️ Plastic Waste Project
      </Link>
      <div className="links">
        {links.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

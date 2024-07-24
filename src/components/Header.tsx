import { Link } from "wouter";

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink = ({ href, text }: NavLinkProps) => {
  return <Link className="px-1 hover:bg-black hover:text-white transition-colors" href={href}>{text}</Link>;
};

const Header = () => {
  return (
    <nav className="flex flex-row justify-between mb-20">
      <h1 className="font-semibold text-3xl pr-2">
        Devashish Sood
        </h1>
      <div className="flex items-end">
        <NavLink href="/" text="Home"/>
        <NavLink href="/about" text="About"/>
      </div>
    </nav>
  );
}

export default Header;
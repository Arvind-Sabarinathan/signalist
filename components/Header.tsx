import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";

export default function Header() {
  return (
    <header className="header sticky top-0">
      <div className="header-wrapper container">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="signalist-logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>

        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        <UserDropdown />
      </div>
    </header>
  );
}

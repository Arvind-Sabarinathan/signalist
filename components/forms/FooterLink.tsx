import Link from "next/link";

export default function FooterLink({ text, linkText, href }: FooterLinkProps) {
  return (
    <div className="pt-4 text-center">
      <p className="text-sm text-gray-500">
        {text} {` `}
        <Link className="footer-link" href={href}>
          {linkText}
        </Link>
      </p>
    </div>
  );
}

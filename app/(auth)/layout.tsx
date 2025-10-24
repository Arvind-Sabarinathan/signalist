import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link href="/" className="auth-logo">
          <Image
            src="/assets/icons/logo.svg"
            alt="signalist-logo"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        <div className="flex-1 pb-6 lg:pb-8">{children}</div>
      </section>
      <section className="auth-right-section">
        <div className="relative z-10 lg:mt-4 lg:mb-16">
          <blockquote className="auth-blockquote">
            Signalist turned my watchlist into a winning list. The alerts are
            spot-on, and i feel more confident making moves in the market.
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <cite className="auth-testimonial-author">- Arvind S.</cite>
              <p className="text-gray-500 max-md:text-xs">Retail Investor</p>
            </div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Image
                  src="assets/icons/star.svg"
                  alt="star"
                  key={star}
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <Image
            src="/assets/images/dashboard.png"
            alt="dashboard-preview"
            width={1440}
            height={1150}
            className="auth-dashboard-preview absolute top-0"
          />
        </div>
      </section>
    </main>
  );
}

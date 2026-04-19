import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-cream mb-2">Bonsai Management</h3>
            <p className="text-sm text-cream/70 leading-relaxed">
              Professional property management for single-family rental homes in Columbus, Georgia.
              Growing steadily, one home at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-cream uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/properties" className="text-sm text-cream/70 hover:text-amber no-underline transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-cream/70 hover:text-amber no-underline transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/tenant-resources" className="text-sm text-cream/70 hover:text-amber no-underline transition-colors">
                  Tenant Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-cream/70 hover:text-amber no-underline transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-cream uppercase tracking-wider mb-3">Contact</h4>
            <p className="text-sm text-cream/70">Columbus, Georgia</p>
            <p className="text-sm text-cream/70 mt-1">
              <a href="mailto:info@bonsaimgmt.com" className="hover:text-amber no-underline transition-colors">
                info@bonsaimgmt.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-cream/10 text-center">
          <p className="text-xs text-cream/50">
            &copy; {currentYear} Bonsai Management LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

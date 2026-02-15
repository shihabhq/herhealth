import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">About</h4>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              heRhealth is revolutionizing women&apos;s health through innovative menstrual blood diagnostics.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/founders" className="text-neutral-400 hover:text-primary transition-colors">
                  Founders
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-neutral-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <p className="text-neutral-400 text-sm">
              Email: <a href="mailto:hello@herhealth.com" className="hover:text-primary">hello@herhealth.com</a>
            </p>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8">
          <p className="text-center text-neutral-400 text-sm">
            © {currentYear} heRhealth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'

const company = ['Home', 'Studio', 'Service', 'Blog']
const termsLinks = ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accesibility']
const social = ['Instagram', 'LinkedIn', 'Youtube', 'Twitter']

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#D4F0D4]">
      {/* Thin horizontal divider */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="border-t border-[#A8D4A8]" />
      </div>

      {/* 4-column grid */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[#0A0A0A] text-sm mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms & Policies */}
          <div>
            <h4 className="font-semibold text-[#0A0A0A] text-sm mb-5">Terms &amp; Policies</h4>
            <ul className="space-y-3">
              {termsLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-[#0A0A0A] text-sm mb-5">Follow Us</h4>
            <ul className="space-y-3">
              {social.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#0A0A0A] text-sm mb-5">Terms &amp; Policies</h4>
            <address className="not-italic space-y-3">
              <p className="text-sm text-[#0A0A0A]/60 leading-snug">
                1498w Fluton ste, STE<br />
                2D Chcago, IL 63867.
              </p>
              <p className="text-sm text-[#0A0A0A]/60">(123) 456789000</p>
              <a href="mailto:info@elementum.com" className="text-sm text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors">
                info@elementum.com
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 pb-8 text-center">
        <p className="text-xs text-[#0A0A0A]/50">
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </footer>
  )
}

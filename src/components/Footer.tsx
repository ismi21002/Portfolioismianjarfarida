export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              Ismi
            </h3>
            <p className="text-gray-400">
              Information Science Professional & Web Developer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:ismi@example.com" className="hover:text-blue-400 transition">
                  ismi@example.com
                </a>
              </li>
              <li>
                <a href="https://github.com/ismi21002" className="hover:text-blue-400 transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="hover:text-blue-400 transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>
              © {currentYear} Ismi Anjar Farida. All rights reserved.
            </p>
            <p>
              Designed & Built with ❤️ using React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

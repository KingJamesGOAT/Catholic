import { Facebook, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-white mb-4">Catholic Foundations</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              A clear and structured guide to understanding the Catholic faith, its history, and its teachings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-gray-200 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#what-it-means" className="text-gray-400 hover:text-gray-200 transition-colors">
                  What It Means to Be Catholic
                </a>
              </li>
              <li>
                <a href="#authority" className="text-gray-400 hover:text-gray-200 transition-colors">
                  Authority Structure
                </a>
              </li>
              <li>
                <a href="#history" className="text-gray-400 hover:text-gray-200 transition-colors">
                  Church History
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-4">Recommended Reading</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Catechism of the Catholic Church</li>
              <li>Vatican II Documents</li>
              <li>Papal Encyclicals</li>
              <li>Early Church Fathers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">contact@catholicfoundations.org</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Catholic Foundations. All rights reserved.</p>
          <p className="mt-2">For the greater glory of God • Ad Majorem Dei Gloriam</p>
        </div>
      </div>
    </footer>
  );
}

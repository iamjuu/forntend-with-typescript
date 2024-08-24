// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { 
  FacebookIcon, 
  InstagramIcon, 
  TwitterIcon, 
  MessageCircleIcon 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="text-teal-600">
            {/* <img className="w-52" src={Logo} alt="" /> */}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Get the latest news!
                </h2>

                <p className="mt-4 text-gray-500">
                A 5-star hotel offers luxury, exceptional service, and premium amenities for an elegant stay.







                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  Email
                </label>

                <div className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Ask me.."
                    className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                  />

                  <button className="mt-1 w-full bg-green-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                    message
                  </button>
                </div>
              </form>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
5 start                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    spacial visiters 
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Pickup service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    24x7
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    juu resturent
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Help</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Accessibility
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Returns Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Hiring Statistics
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Downloads</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Marketing Calendar
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    SEO Infographics
                  </a>
                </li>
              </ul>
            </div>

            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-between">
              <div>
                <a href="">
                  <p>moonunirath, kannur</p>
                </a>
              </div>
              <div className="flex gap-3">
                <li>
                  <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
                    <span className="sr-only">WhatsApp</span>
                    <MessageCircleIcon className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
                    <span className="sr-only">Instagram</span>
                    <InstagramIcon className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
                    <span className="sr-only">Facebook</span>
                    <FacebookIcon className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
                    <span className="sr-only">Twitter</span>
                    <TwitterIcon className="h-6 w-6" />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">
              &copy; 2022. Company Name. All rights reserved.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
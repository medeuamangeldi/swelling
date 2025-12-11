"use client";

import { CONTACT_INFO } from "@/lib/data";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-steel-900 border-t border-steel-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
              {CONTACT_INFO.companyName}
            </h3>
            <p className="text-steel-300 text-sm mb-4">
              Professional welding, fabrication, and manufacturing services
              serving Chicago and surrounding areas. Licensed, insured, and
              trusted by residential, commercial, and industrial clients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-steel-300 hover:text-spark-600 transition-colors text-sm"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#metals"
                  className="text-steel-300 hover:text-spark-600 transition-colors text-sm"
                >
                  Metals We Work With
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="text-steel-300 hover:text-spark-600 transition-colors text-sm"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-steel-300 hover:text-spark-600 transition-colors text-sm"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-steel-300 hover:text-spark-600 transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
              Featured Services
            </h4>
            <ul className="space-y-2 text-sm text-steel-300">
              <li>MIG & TIG Welding</li>
              <li>Mobile Welding</li>
              <li>Custom Fabrication</li>
              <li>Structural Repairs</li>
              <li>Truck & Trailer Work</li>
              <li>Manufacturing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start text-sm">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-spark-600 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${CONTACT_INFO.phones.ory}`}
                    className="text-steel-300 hover:text-spark-600 transition-colors block"
                  >
                    {CONTACT_INFO.phones.ory}
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phones.sultan}`}
                    className="text-steel-300 hover:text-spark-600 transition-colors block"
                  >
                    {CONTACT_INFO.phones.sultan}
                  </a>
                </div>
              </li>
              <li className="flex items-start text-sm">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-spark-600 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-steel-300 hover:text-spark-600 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start text-sm">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-spark-600 mt-0.5 flex-shrink-0" />
                <span className="text-steel-300">
                  {CONTACT_INFO.address.full}
                </span>
              </li>
              <li className="flex items-start text-sm">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-spark-600 mt-0.5 flex-shrink-0" />
                <span className="text-steel-300">{CONTACT_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-steel-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-steel-400 text-sm text-center md:text-left">
              © {currentYear} {CONTACT_INFO.companyName}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-steel-400">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>Serving Chicago & Suburbs</span>
              <span>•</span>
              <span>Same-Day Service Available</span>
            </div>
          </div>
        </div>

        {/* SEO Rich Text */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-steel-800">
          <div className="text-steel-500 text-xs leading-relaxed">
            <p className="mb-2">
              <strong className="text-steel-400">
                O&S Welding Fabrication LLC
              </strong>{" "}
              is a premier welding and metal fabrication company located in
              Mount Prospect, Illinois, serving Chicago and the surrounding
              Chicagoland area. We specialize in GMAW (MIG welding), GTAW (TIG
              welding), FCAW (flux-core welding), SMAW (stick welding), plasma
              cutting, mobile welding services, structural repairs, custom
              fabrication, and manufacturing.
            </p>
            <p>
              Our expert team works with mild steel, stainless steel, galvanized
              steel, aluminum, cast steel, and various alloys. We provide
              services for residential, commercial, and industrial clients
              including truck and trailer repair, heavy equipment repair, gate
              and fence repair, commercial gas line repair, and demolition work.
              We work with general contractors, follow architectural and
              engineering drawings, create AutoCAD designs, and handle
              high-volume manufacturing orders. Same-day emergency service
              available.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

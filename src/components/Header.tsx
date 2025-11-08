import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  X,
  Search,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
  subItems?: DropdownItem[];
}

interface MenuItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(
    null
  );
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showReachOutModal, setShowReachOutModal] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const subDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const menuItems: MenuItem[] = [
    {
      label: "OUR COURSES",
      href: "/courses",
      dropdown: [
        {
          label: "CHC TRAINING PACKAGE",
          href: "#",
          subItems: [
            {
              label: "CHC30121 – Certificate III in Early Childhood",
              href: "/early-childhood",
            },
            {
              label: "CHC50121 – Diploma of Early Childhood Education and Care",
              href: "/early-childhood-education",
            },
          ],
        },
        {
          label: "SIT TRAINING PACKAGE",
          href: "#",
          subItems: [
            {
              label: "SIT30821 – Certificate III in Commercial Cookery",
              href: "/commercial-cookery",
            },
            {
              label: "SIT40521 – Certificate IV in Kitchen Management",
              href: "/kitchen-management",
            },
            {
              label: "SIT50422 – Diploma of Hospitality Management",
              href: "/hospitality-management",
            },
          ],
        },
        {
          label: "CPC TRAINING PACKAGE",
          href: "#",
          subItems: [
            {
              label: "CPC30220 – Certificate III in Carpentry",
              href: "/carpentry",
            },
          ],
        },
        {
          label: "BSB TRAINING PACKAGE",
          href: "#",
          subItems: [
            {
              label: "BSB80120 - Graduate Diploma of Management",
              href: "/management-learning",
            },
          ],
        },
      ],
    },
    {
      label: "WHY ORANGE",
      href: "/whyorange",
    },
    {
      label: "HOW TO APPLY",
      href: "/howtoapply",
    },

    {
      label: "INFORMATION",
      dropdown: [
        {
          label: "Student Handbook",
          href: "#",
        },
        {
          label: "Forms & Policies",
          href: "#",
        },
        {
          label: "ESOS Framework",
          href: "#",
        },
        {
          label: "Agent Representatives",
          href: "#",
        },
      ],
    },
    {
      label: "ENQUIRE  NOW",
      href: "/enquiry",
    },
  ];

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      if (subDropdownTimeoutRef.current) {
        clearTimeout(subDropdownTimeoutRef.current);
      }
    };
  }, []);

  // ✅ Scroll listener to update background + text color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("nav")) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 hover:text-orange-200 transition-all duration-300 cursor-pointer">
                <Phone className="w-4 h-4" />
                <span>(02) 6365 7500</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-orange-200 transition-all duration-300 cursor-pointer">
                <Mail className="w-4 h-4" />
                <span>info@vat.vic.edu.au</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              <a
                href="#"
                className="hover:text-orange-200 transition-all duration-300"
              >
                Staff Portal
              </a>
              <a
                href="#"
                className="hover:text-orange-200 transition-all duration-300"
              >
                Student Portal
              </a>
              <a
                href="#"
                className="hover:text-orange-200 transition-all duration-300"
              >
                Library
              </a>
              <button
                onClick={() => setShowApplyModal(true)}
                className="bg-white text-orange-600 px-6 py-1.5 rounded-full text-sm font-medium hover:bg-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Apply Online
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`shadow-md relative z-50 sticky top-0 transition-all duration-300 ${
          scrolled ? "bg-gradient-to-r from-orange-500 to-red-500" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
              <div
                className={`text-3xl font-bold bg-clip-text ${
                  scrolled
                    ? "text-white"
                    : "bg-gradient-to-r from-orange-600 to-orange-500 text-transparent"
                }`}
              >
                VAT
              </div>
              <div
                className={`ml-2 text-sm border-l-2 border-orange-200 pl-2 ${
                  scrolled ? "text-white border-orange-300" : "text-gray-600"
                }`}
              >
                <div className="font-semibold">UNIVERSITY</div>
                <div className="text-xs tracking-wider">AUSTRALIA</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-2">
              {menuItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <div className="flex items-center">
                      {/* ✅ Label navigates to its href */}
                      <Link
                        to={item.href || "#"}
                        className={`font-medium transition-all duration-300 px-4 py-2 rounded-lg flex items-center ${
                          scrolled
                            ? "text-white hover:text-orange-200"
                            : "text-gray-700 hover:text-orange-600"
                        }`}
                        onClick={() => {
                          // optional: close dropdown when navigating
                          setActiveDropdown(null);
                          setActiveSubDropdown(null);
                        }}
                      >
                        {item.label}
                      </Link>

                      {/* ✅ Separate button only for dropdown toggle */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation(); // prevent link click
                          setActiveDropdown(
                            activeDropdown === item.label ? null : item.label
                          );
                        }}
                        className="focus:outline-none"
                      >
                        <ChevronDown
                          className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          } ${scrolled ? "text-white" : "text-gray-700"}`}
                        />
                      </button>
                    </div>
                  ) : (
                    <Link
                      to={item.href || "#"}
                      className={`font-medium transition-all duration-300 px-4 py-2 rounded-lg flex items-center ${
                        scrolled
                          ? "text-white hover:text-orange-200"
                          : "text-gray-700 hover:text-orange-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 transition-all duration-300 ease-out">
                      {item.dropdown.map((dropdownItem) => (
                        <div key={dropdownItem.label} className="relative">
                          {dropdownItem.subItems ? (
                            <button
                              onClick={() =>
                                setActiveSubDropdown(
                                  activeSubDropdown === dropdownItem.label
                                    ? null
                                    : dropdownItem.label
                                )
                              }
                              className="w-full text-left block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors flex items-center justify-between"
                            >
                              {dropdownItem.label}
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          ) : (
                            <Link
                              to={dropdownItem.href}
                              onClick={() => {
                                setActiveDropdown(null);
                                setActiveSubDropdown(null);
                              }}
                              className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                            >
                              {dropdownItem.label}
                            </Link>
                          )}

                          {/* Sub-dropdown */}
                          {dropdownItem.subItems &&
                            activeSubDropdown === dropdownItem.label && (
                              <div className="absolute top-0 left-full ml-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 transition-all duration-300 ease-out">
                                {dropdownItem.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    to={subItem.href}
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setActiveSubDropdown(null);
                                    }}
                                    className="block px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors text-sm"
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Search
                className={`w-6 h-6 cursor-pointer transition-colors ${
                  scrolled
                    ? "text-white hover:text-orange-200"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2"
              >
                {isMenuOpen ? (
                  <X
                    className={`w-6 h-6 ${
                      scrolled ? "text-white" : "text-gray-600"
                    }`}
                  />
                ) : (
                  <Menu
                    className={`w-6 h-6 ${
                      scrolled ? "text-white" : "text-gray-600"
                    }`}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 max-h-96 overflow-y-auto transform transition-all duration-300 ease-out opacity-100 translate-y-0">
            <nav className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href || "#"}
                    className={`block font-medium py-3 px-2 border-b border-gray-100 ${
                      scrolled
                        ? "text-white hover:text-orange-200"
                        : "text-gray-700 hover:text-orange-600"
                    }`}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <button
                  onClick={() => setShowApplyModal(true)}
                  className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                >
                  Apply Online
                </button>
                <button
                  onClick={() => setShowReachOutModal(true)}
                  className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Reach Out
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

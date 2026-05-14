import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative md:mt-10">
      <div className=" h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          {/* logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center">
              <Image
                src="/footer-logo.png"
                alt="skill-spehre logo"
                width={200}
                height={100}
                className="dark:brightness-200"
              />
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
              Empowering learners with modern skills, expert-led courses, and
              hands-on learning experiences for a brighter future.
            </p>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Community
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Faq
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Forum
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  News and Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>
          {/* Social links */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Social Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition flex items-center gap-2"
                >
                  Github <BsGithub></BsGithub>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition flex items-center gap-2"
                >
                  Facebook <FaFacebook></FaFacebook>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition flex items-center gap-2"
                >
                  Twitter <BsTwitter></BsTwitter>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition flex items-center gap-2"
                >
                  Linkedin <FaLinkedin></FaLinkedin>
                </Link>
              </li>
            </ul>
          </div>

          {/* Teaching */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Teaching
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition flex items-center gap-2"
                >
                  Become a teacher
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition flex items-center gap-2"
                >
                  How to guide
                </Link>
              </li>
            </ul>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-black text-white dark:bg-white dark:text-black 
              text-sm font-medium transition-all duration-200 
              hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} skill-sphere. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="hover:text-black dark:hover:text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

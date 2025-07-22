import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pya-12 relative z-10 mt-20 w-full overflow-hidden px-6 text-black">
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-4">
        {/* Brand & CTA */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-semibold text-xl">
            <Image
              alt="ZentoUI Logo"
              height={30}
              src="/ZentoUILogo.png"
              width={30}
            />
            <span>ZentoUI</span>
          </div>
          <p className="text-neutral-500 text-sm">
            Built by{" "}
            <Link className="text-blue-600" href="https://x.com/s_pratibhan">
              @s_pratibhan
            </Link>
          </p>
          <button className="rounded-md cursor-pointer bg-black/5 px-4 py-2 text-sm transition hover:bg-black/10">
            Share Your Thoughts On <X className="ml-1 inline-block h-4 w-4" />
          </button>
          <p className="text-neutral-500 text-xs">
            © 2025 ZentoUI. All rights reserved.
          </p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="mb-2 font-semibold text-sm">Pages</h4>
          <ul className="space-y-1 text-neutral-500 text-sm">
            <li>
              <Link href="/docs">Docs</Link>
            </li>
            <li>
              <Link href="/components">Components</Link>
            </li>
            <li>
              <Link href="/themes">Themes</Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="mb-2 font-semibold text-sm">Socials</h4>
          <ul className="space-y-1 text-neutral-500 text-sm">
            <li>
              <Link href="https://github.com/SATYAM-PRATIBHAN/ZentoUI">
                Github
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/satyampratibhan/">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://x.com/s_pratibhan">X</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-2 font-semibold text-sm">Legal</h4>
          <ul className="space-y-1 text-neutral-500 text-sm">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Watermark */}
      <div className="relative z-10 mt-12 text-center">
        <h1 className="select-none bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-center font-bold text-4xl text-transparent md:text-5xl lg:text-[10rem]">
          ZENTO UI
        </h1>
      </div>
    </footer>
  );
}

import { Github, Linkedin, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 w-full bg-white px-6 pya-12 text-black overflow-hidden">
      {/* Soft neutral ray effect */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2"
        style={{
          width: "120vw",
          height: "220px",
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.03) 60%, transparent 100%)",
          filter: "blur(8px)",
        }}
      /> */}

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-4">
        {/* Brand & CTA */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <Image src="/ZentoUILogo.png" alt="ZentoUI Logo" width={30} height={30} />
            <span>ZentoUI</span>
          </div>
          <p className="text-sm text-neutral-500">
            Built by <Link href="https://x.com/yourhandle" className="text-blue-600">@YourHandle</Link>
          </p>
          <button className="rounded-md bg-black/5 px-4 py-2 text-sm hover:bg-black/10 transition">
            Share Your Thoughts On <X className="ml-1 inline-block h-4 w-4" />
          </button>
          <p className="text-xs text-neutral-500">
            © 2025 ZentoUI. All rights reserved.
          </p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="mb-2 text-sm font-semibold">Pages</h4>
          <ul className="space-y-1 text-sm text-neutral-500">
            <li><Link href="/docs">Docs</Link></li>
            <li><Link href="/components">Components</Link></li>
            <li><Link href="/themes">Themes</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="mb-2 text-sm font-semibold">Socials</h4>
          <ul className="space-y-1 text-sm text-neutral-500">
            <li><Link href="https://github.com/zento-ui">Github</Link></li>
            <li><Link href="https://linkedin.com/in/yourprofile">LinkedIn</Link></li>
            <li><Link href="https://x.com/yourhandle">X</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-2 text-sm font-semibold">Legal</h4>
          <ul className="space-y-1 text-sm text-neutral-500">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      {/* Watermark */}
      <div className="mt-12 text-center relative z-10">
        <h1 className="text-center text-4xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 select-none">
          ZENTO UI
        </h1>
      </div>
    </footer>
  );
}

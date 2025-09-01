"use client";

import { DocContent } from "../../get-doc-content";
import { PreviewSwitcher } from "../../../components/ui/docs/PreviewSwitcher";
import React from "react";
import { CodeBlock } from "../../../components/ui/docs/CodeBlock";
import Image from "next/image";

const SignInSection: DocContent = {
  title: "Sign In Section",
  description:
    "A modern, responsive sign-in page component with a beautiful car background and floating form card. Features a split layout with compelling copy on the left and an interactive sign-in form on the right.",
  content: <SignInPreviewWithToggle />,
};

function SignInPreviewWithToggle() {
  return (
    <>
      <PreviewSwitcher preview={<SignInPage />} code={rawCode} language="tsx" />
      <div className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold mb-4">
          How to use this component
        </h3>
        <ol className="list-decimal space-y-4 pl-5 text-gray-800 text-base">
          <li>
            <strong>Copy the component:</strong> Copy the{" "}
            <code>SignInPage</code> component and place it in your project&apos;s{" "}
            <code>components/</code> folder.
          </li>
          <li>
            <strong>Import & use it:</strong> Wherever you want to show the
            sign-in section, import and render it like this:
            <div className="mt-2">
              <CodeBlock
                code={`import SignInPage from "@/components/SignInPage";

export default function Page() {
  return (
    <main>
      <SignInPage />
    </main>
  );
}`}
                language="tsx"
              />
            </div>
          </li>
          <li>
            <strong>Customize if needed:</strong> You can modify the form
            fields, background image, copy text, or styling to match your brand
            and requirements.
          </li>
        </ol>
      </div>
    </>
  );
}

function OverlapCircles({ className = "" }: { className?: string }) {
  return (
    <span className={"inline-flex items-center " + className} aria-hidden>
      <span className="inline-block h-8 w-8 rounded-full bg-lime-600" />
      <span className="inline-block h-8 w-8 -ml-4 rounded-full bg-lime-500" />
      <span className="inline-block h-8 w-8 -ml-4 rounded-full bg-lime-400" />
    </span>
  );
}

function SignInRightPanel() {
  return (
    <section className="relative">
      <div className="relative h-[500px] sm:h-[600px] md:h-[800px] w-full overflow-hidden rounded-[16px] sm:rounded-[24px] md:rounded-[32px]">
        {/* Background image */}
        <Image
          src="/car-portrait.webp"
          alt="Car background"
          fill
          className="object-cover"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />

        {/* Top centered caption */}
        <div className="absolute left-1/2 top-4 sm:top-6 md:top-8 w-full -translate-x-1/2 text-center text-white">
          <p className="text-xs sm:text-sm/5 tracking-wide opacity-90">
            PORSCHE 718
          </p>
          <p className="text-[10px] sm:text-xs opacity-80">Best cars</p>
        </div>

        {/* Floating sign-in form card */}
        <div className="absolute left-1/2 top-[15%] sm:top-[18%] md:top-[22%] w-[92%] sm:w-[90%] md:w-[88%] max-w-md -translate-x-1/2 rounded-[20px] sm:rounded-[24px] md:rounded-[26px] bg-white p-4 sm:p-5 md:p-6 shadow-2xl">
          <h2 className="mb-3 sm:mb-4 text-center text-sm sm:text-base font-semibold text-foreground">
            Login to your account
          </h2>

          <form className="space-y-3 sm:space-y-4">
            <div className="space-y-1.5 sm:space-y-2">
              <label
                htmlFor="username"
                className="block text-xs sm:text-sm text-muted-foreground"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                placeholder="Jackob blonde"
                className="block w-full rounded-lg sm:rounded-xl border border-foreground/15 bg-background px-3 py-2 text-xs sm:text-sm outline-none ring-0 placeholder:text-muted-foreground/70 focus:border-foreground/30"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label
                htmlFor="password"
                className="block text-xs sm:text-sm text-muted-foreground"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="block w-full rounded-lg sm:rounded-xl border border-foreground/15 bg-background px-3 py-2 text-xs sm:text-sm outline-none ring-0 placeholder:text-muted-foreground/70 focus:border-foreground/30"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 pt-1">
              <label
                htmlFor="remember"
                className="flex cursor-pointer items-center gap-2 text-xs sm:text-sm"
              >
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-3 w-3 sm:h-4 sm:w-4 rounded border border-foreground/30 accent-lime-400"
                />
                <span className="text-foreground">Remember me</span>
              </label>
              <a
                href="#"
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground"
              >
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="h-10 sm:h-12 w-full rounded-full bg-black text-white hover:bg-black/90 text-sm sm:text-base font-medium"
            >
              login
            </button>

            <div className="mt-2 rounded-xl sm:rounded-2xl border border-black/10 p-1">
              <div className="relative h-16 sm:h-20 w-full rounded-lg sm:rounded-xl overflow-hidden">
                <Image
                  src="/car-horizontal.webp"
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white/90 text-xs sm:text-sm">
          01/05
        </div>

        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex gap-2 sm:gap-3">
          <button
            aria-label="Previous"
            className="grid size-8 sm:size-10 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur hover:bg-black/40 text-sm sm:text-base"
            type="button"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            className="grid size-8 sm:size-10 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur hover:bg-black/40 text-sm sm:text-base"
            type="button"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

function SignInPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8 md:py-10 lg:py-14 lg:px-14 border border-gray-300 rounded-2xl">
        <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2">
          {/* Left: Headline + CTA + small image card */}
          <section className="flex flex-col justify-between order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[10px] sm:text-xs tracking-[0.18em] uppercase text-muted-foreground">
                Largest image source
              </p>

              <h1 className="text-pretty font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight">
                <span className="block font-semibold">POWERED AND LED BY</span>
                <span className="mt-1 block font-semibold">
                  <span className="inline-flex items-center">
                    {/* Word with highlight */}
                    <span className="relative inline-block">
                      <span className="relative z-10">CREATORS</span>
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-2 sm:h-3 rounded-sm bg-lime-400/80"
                      />
                    </span>
                    {/* Half-overlapping circles */}
                    <OverlapCircles className="ml-2 sm:ml-3 hidden sm:flex" />
                  </span>
                  <span className="block">AROUND</span>
                </span>
                <span className="mt-1 block font-semibold">THE WORLD.</span>
              </h1>

              <div className="pt-2 sm:pt-4 text-muted-foreground">
                <p className="text-xs sm:text-sm">Don&apos;t have account?</p>
                <button
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-foreground/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium hover:bg-foreground/5"
                  aria-label="Create account"
                  type="button"
                >
                  Create account
                  <span aria-hidden>→</span>
                </button>
              </div>
            </div>

            {/* Small image card */}
            <div className="mt-6 sm:mt-8 md:mt-10 overflow-hidden rounded-2xl sm:rounded-3xl">
              <div className="relative h-32 sm:h-40 md:h-48 w-full">
                <Image
                  src="/car-horizontal.webp"
                  alt="Sample car photography"
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 flex items-center p-4 sm:p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-white">
                    <div>
                      <p className="text-xs sm:text-sm/6 opacity-80">
                        About us
                      </p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm/6">
                        Over <span className="font-semibold">3 million</span>{" "}
                        free high‑resolution images brought to you by the
                        world&apos;s most generous community of photographers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right: Background image with floating form */}
          <section className="order-1 lg:order-2">
            <SignInRightPanel />
          </section>
        </div>
      </div>
    </main>
  );
}

const rawCode = `
import Image from "next/image";

// Inline decorative circles used next to "CREATORS"
function OverlapCircles({ className = "" }: { className?: string }) {
  return (
    <span className={"inline-flex items-center " + className} aria-hidden>
      <span className="inline-block h-8 w-8 rounded-full bg-lime-600" />
      <span className="inline-block h-8 w-8 -ml-4 rounded-full bg-lime-500" />
      <span className="inline-block h-8 w-8 -ml-4 rounded-full bg-lime-400" />
    </span>
  );
}

// Inline right panel with background image and floating sign-in form
function SignInRightPanel() {
  return (
    <section className="relative">
      <div className="relative h-[500px] sm:h-[600px] md:h-[800px] w-full overflow-hidden rounded-[16px] sm:rounded-[24px] md:rounded-[32px]">
        {/* Background image */}
        <Image
          src="/car-portrait.webp"
          alt="Car background"
          fill
          className="object-cover"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />

        {/* Top centered caption */}
        <div className="absolute left-1/2 top-4 sm:top-6 md:top-8 w-full -translate-x-1/2 text-center text-white">
          <p className="text-xs sm:text-sm/5 tracking-wide opacity-90">PORSCHE 718</p>
          <p className="text-[10px] sm:text-xs opacity-80">Best cars</p>
        </div>

        {/* Floating sign-in form card */}
        <div className="absolute left-1/2 top-[15%] sm:top-[18%] md:top-[22%] w-[92%] sm:w-[90%] md:w-[88%] max-w-md -translate-x-1/2 rounded-[20px] sm:rounded-[24px] md:rounded-[26px] bg-white p-4 sm:p-5 md:p-6 shadow-2xl">
          <h2 className="mb-3 sm:mb-4 text-center text-sm sm:text-base font-semibold text-foreground">
            Login to your account
          </h2>

          <form className="space-y-3 sm:space-y-4">
            <div className="space-y-1.5 sm:space-y-2">
              <label htmlFor="username" className="block text-xs sm:text-sm text-muted-foreground">
                Username
              </label>
              <input
                id="username"
                name="username"
                placeholder="Jackob blonde"
                className="block w-full rounded-lg sm:rounded-xl border border-foreground/15 bg-background px-3 py-2 text-xs sm:text-sm outline-none ring-0 placeholder:text-muted-foreground/70 focus:border-foreground/30"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label htmlFor="password" className="block text-xs sm:text-sm text-muted-foreground">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="block w-full rounded-lg sm:rounded-xl border border-foreground/15 bg-background px-3 py-2 text-xs sm:text-sm outline-none ring-0 placeholder:text-muted-foreground/70 focus:border-foreground/30"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 pt-1">
              <label htmlFor="remember" className="flex cursor-pointer items-center gap-2 text-xs sm:text-sm">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-3 w-3 sm:h-4 sm:w-4 rounded border border-foreground/30 accent-lime-400"
                />
                <span className="text-foreground">Remember me</span>
              </label>
              <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">
                Forgot your password?
              </a>
            </div>

            <button type="submit" className="h-10 sm:h-12 w-full rounded-full bg-black text-white hover:bg-black/90 text-sm sm:text-base font-medium">
              login
            </button>

            <div className="mt-2 rounded-xl sm:rounded-2xl border border-black/10 p-1">
              <div className="relative h-16 sm:h-20 w-full rounded-lg sm:rounded-xl overflow-hidden">
                <Image
                  src="/car-horizontal.webp"
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white/90 text-xs sm:text-sm">01/05</div>

        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex gap-2 sm:gap-3">
          <button aria-label="Previous" className="grid size-8 sm:size-10 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur hover:bg-black/40 text-sm sm:text-base" type="button">‹</button>
          <button aria-label="Next" className="grid size-8 sm:size-10 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur hover:bg-black/40 text-sm sm:text-base" type="button">›</button>
        </div>
      </div>
    </section>
  );
}

export default function SignInPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8 md:py-10 lg:py-14 lg:px-14 border border-gray-300 rounded-2xl">
        <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2">
          {/* Left: Headline + CTA + small image card */}
          <section className="flex flex-col justify-between order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[10px] sm:text-xs tracking-[0.18em] uppercase text-muted-foreground">
                Largest image source
              </p>

              <h1 className="text-pretty font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight">
                <span className="block font-semibold">POWERED AND LED BY</span>
                <span className="mt-1 block font-semibold">
                  <span className="inline-flex items-center">
                    <span className="relative inline-block">
                      <span className="relative z-10">CREATORS</span>
                      <span aria-hidden="true" className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-2 sm:h-3 rounded-sm bg-lime-400/80" />
                    </span>
                    <OverlapCircles className="ml-2 sm:ml-3 hidden sm:flex" />
                  </span>
                  <span className="block">AROUND</span>
                </span>
                <span className="mt-1 block font-semibold">THE WORLD.</span>
              </h1>

              <div className="pt-2 sm:pt-4 text-muted-foreground">
                <p className="text-xs sm:text-sm">Don't have account?</p>
                <button className="mt-2 inline-flex items-center gap-2 rounded-full border border-foreground/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium hover:bg-foreground/5" aria-label="Create account" type="button">
                  Create account
                  <span aria-hidden>→</span>
                </button>
              </div>
            </div>

            {/* Small image card */}
            <div className="mt-6 sm:mt-8 md:mt-10 overflow-hidden rounded-2xl sm:rounded-3xl">
              <div className="relative h-32 sm:h-40 md:h-48 w-full">
                <Image
                  src="/car-horizontal.webp"
                  alt="Sample car photography"
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 flex items-center p-4 sm:p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-white">
                    <div>
                      <p className="text-xs sm:text-sm/6 opacity-80">About us</p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm/6">
                        Over <span className="font-semibold">3 million</span> free high‑resolution images brought to you by the world's most generous community of photographers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right: Background image with floating form */}
          <section className="order-1 lg:order-2">
            <SignInRightPanel />
          </section>
        </div>
      </div>
    </main>
  );
}
`;

export default SignInSection;

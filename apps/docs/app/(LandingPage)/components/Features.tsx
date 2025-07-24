import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="pb-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Build Interfaces, Not Boilerplate
            </h2>
            <p className="text-gray-600">
              ZentoUI provides ready-to-use components with elegant styles,
              minimal setup, and maximum flexibility. You get to focus on
              crafting great user experiences, not styling buttons from scratch.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/feature1.webp"
              alt="Feature 1 illustration"
              width={400}
              height={300}
              className="w-full rounded-3xl max-w-md mx-auto"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/feature2.webp"
              alt="Feature 2 illustration"
              width={400}
              height={300}
              className="w-full rounded-3xl max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Designed for Modern Development
            </h2>
            <p className="text-gray-600">
              Built with Tailwind CSS and Framer Motion, every ZentoUI component
              is performant, theme-aware, and easily animated. Whether
              you&apos;re building a dashboard or a marketing site, your UI
              stays fast and fluid.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Production Ready, Out of the Box
            </h2>
            <p className="text-gray-600">
              Every component ships with accessibility baked in and responsive
              styles. No plugin hell, no custom hacks, just drop it in and ship
              confidently.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/feature3.webp"
              alt="Feature 3 illustration"
              width={400}
              height={300}
              className="w-full rounded-3xl max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

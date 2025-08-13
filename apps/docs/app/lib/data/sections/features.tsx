"use client";

import { DocContent } from "../../get-doc-content";
import { ArrowRight, Zap, Users, Shield, Rocket, Globe } from "lucide-react"
import { PreviewSwitcher } from "../../../components/ui/docs/PreviewSwitcher";
import { CodeBlock } from "../../../components/ui/docs/CodeBlock";
import React from "react";

const FeaturesSection: DocContent = {
  title: "Features Section",
  description:
    "A clean and minimal features section with a central image and surrounding feature cards. Perfect for showcasing key product benefits.",
  content: <FeaturesPreviewWithToggle />,
};

function FeaturesPreviewWithToggle() {
  return (
    <>
      <PreviewSwitcher
        preview={<FeaturesSectionContent />}
        code={rawCode}
        language="tsx"
      />

      <div className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold mb-4">
          How to use this component
        </h3>
        <ol className="list-decimal space-y-4 pl-5 text-gray-800 text-base">
          <li>
            <strong>Copy the component:</strong> Copy the{" "}
            <code>FeaturesSection</code> component into your project’s{" "}
            <code>components/</code> folder.
          </li>
          <li>
            <strong>Import & use it:</strong> Render the features section like:
            <div className="mt-2">
              <CodeBlock
                language="tsx"
                code={`import FeaturesSection from "@/components/FeaturesSection";

export default function Page() {
  return (
    <main>
      <FeaturesSection />
    </main>
  );
}`}
              />
            </div>
          </li>
          <li>
            <strong>Customize:</strong> Update the image, titles, and feature
            descriptions to match your brand.
          </li>
        </ol>
      </div>
    </>
  );
}

function FeaturesSectionContent() {
  return (
    <div className="min-h-screen bg-white py-16 border border-gray-200 rounded-2xl px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Building the Future
            <br />
            <span className="text-gray-800">Together</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Through innovative technology solutions and strategic partnerships, we're transforming how businesses
            connect, grow, and succeed in the digital age.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Feature 1 - Light Blue with Dot Pattern */}
          <div className="relative bg-blue-100 rounded-3xl p-8 overflow-hidden">

            <div className="absolute top-4 right-4 opacity-15">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-blue-300 rounded-full"></div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-16 right-12 opacity-10">
              <div className="w-16 h-16 border-4 border-blue-300 rounded-full"></div>
            </div>
            <div className="absolute top-16 right-20 opacity-8">
              <div className="w-8 h-8 bg-blue-200 transform rotate-45"></div>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Our cutting-edge platform delivers lightning-fast performance with enterprise-grade reliability.
              </p>

              <div className="flex items-end justify-between">
                <button className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>

                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-800">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Light Orange with Line Pattern */}
          <div className="relative bg-orange-100 rounded-3xl p-8 overflow-hidden">

            <div className="absolute top-8 right-8 opacity-12">
              <div className="space-y-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-12 h-0.5 bg-orange-300 transform rotate-45"></div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-20 right-16 opacity-10">
              <div
                className="w-12 h-12 bg-orange-200"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              ></div>
            </div>
            <div className="absolute top-12 right-24 opacity-8">
              <div
                className="w-6 h-6 bg-orange-300"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              ></div>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Connect with a thriving community of developers, creators, and innovators worldwide.
              </p>

              <div className="flex items-end justify-between">
                <button className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center hover:bg-orange-800 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>

                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-800">50K+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 - Light Green with Triangle Pattern */}
          <div className="relative bg-green-100 rounded-3xl p-8 overflow-hidden">

            <div className="absolute top-6 right-6 opacity-12">
              <div className="grid grid-cols-3 gap-3">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-green-300"
                  ></div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-24 right-20 opacity-10">
              <div className="w-10 h-12 bg-green-200 rounded-t-full"></div>
            </div>
            <div className="absolute top-20 right-32 opacity-8">
              <div className="w-6 h-8 bg-green-300 rounded-t-full"></div>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Bank-level security protocols protect your data with advanced encryption and monitoring.
              </p>

              <div className="flex items-end justify-between">
                <button className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-800 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>

                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-800">256</div>
                  <div className="text-sm text-gray-600">Bit Encryption</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 4 - Light Pink with Wave Pattern */}
          <div className="relative bg-pink-100 rounded-3xl p-8 overflow-hidden">

            <div className="absolute top-8 right-8 opacity-12">
              <svg width="60" height="40" viewBox="0 0 60 40" className="text-pink-300">
                <path d="M0,20 Q15,5 30,20 T60,20" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M0,30 Q15,15 30,30 T60,30" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>

            <div className="absolute bottom-16 right-16 opacity-10">
              <div className="w-8 h-16 bg-pink-200 rounded-t-full"></div>
              <div className="w-12 h-4 bg-pink-200 rounded-b-full -mt-2 -ml-2"></div>
            </div>
            <div className="absolute top-16 right-28 opacity-8">
              <div className="w-4 h-8 bg-pink-300 rounded-t-full"></div>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-white" />
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Launch your projects faster with our comprehensive suite of development tools and pre-built components
                that accelerate your workflow.
              </p>

              <div className="flex items-end justify-between">
                <button className="w-10 h-10 bg-pink-700 rounded-full flex items-center justify-center hover:bg-pink-800 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>

                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-800">3x</div>
                  <div className="text-sm text-gray-600">Faster Development</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 5 - Light Purple with Grid Pattern */}
          <div className="relative bg-purple-100 rounded-3xl p-8 overflow-hidden">

            <div className="absolute top-6 right-6 opacity-12">
              <div className="grid grid-cols-5 gap-1">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-purple-300 rounded-sm"></div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-20 right-20 opacity-10">
              <div className="w-16 h-16 border-2 border-purple-200 rounded-full">
                <div className="w-full h-0.5 bg-purple-200 mt-4"></div>
                <div className="w-full h-0.5 bg-purple-200 mt-2"></div>
                <div className="w-full h-0.5 bg-purple-200 mt-2"></div>
              </div>
            </div>
            <div className="absolute top-12 right-32 opacity-8">
              <div className="w-8 h-8 border border-purple-300 rounded-full">
                <div className="w-full h-px bg-purple-300 mt-2"></div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Scale globally with confidence using our distributed infrastructure that ensures optimal performance
                across all continents and time zones.
              </p>

              <div className="flex items-end justify-between">
                <button className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-800 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>

                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-800">180+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const rawCode = `
export default function FeaturesSection() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Building the Future
            <br />
            <span className="text-gray-800">Together</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Through innovative technology solutions and strategic partnerships, we're transforming how businesses
            connect, grow, and succeed in the digital age.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Feature 1 - Light Blue with Dot Pattern */}
          <div className="relative bg-blue-100 rounded-3xl p-8 overflow-hidden">
            <div className="absolute top-4 right-4 opacity-15">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-blue-300 rounded-full"></div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-16 right-12 opacity-10">
              <div className="w-16 h-16 border-4 border-blue-300 rounded-full"></div>
            </div>
            <div className="absolute top-16 right-20 opacity-8">
              <div className="w-8 h-8 bg-blue-200 transform rotate-45"></div>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Our cutting-edge platform delivers lightning-fast performance with enterprise-grade reliability.
              </p>

              <div className="flex items-end justify-between">
                <button className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>

                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-800">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Light Orange with Line Pattern */}
          <div className="relative bg-orange-100 rounded-3xl p-8 overflow-hidden">
            <div className="absolute top-8 right-8 opacity-12">
              <div className="space-y-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-12 h-0.5 bg-orange-300 transform rotate-45"></div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-20 right-16 opacity-10">
              <div
                className="w-12 h-12 bg-orange-200"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              ></div>
            </div>
            <div className="absolute top-12 right-24 opacity-8">
              <div
                className="w-6 h-6 bg-orange-300"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              ></div>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Connect with a thriving community of developers, creators, and innovators worldwide.
              </p>

              <div className="flex items-end justify-between">
                <button className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center hover:bg-orange-800 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>

                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-800">50K+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 - Light Green with Triangle Pattern */}
          <div className="relative bg-green-100 rounded-3xl p-8 overflow-hidden">
            <div className="absolute top-6 right-6 opacity-12">
              <div className="grid grid-cols-3 gap-3">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-green-300"
                  ></div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-24 right-20 opacity-10">
              <div className="w-10 h-12 bg-green-200 rounded-t-full"></div>
            </div>
            <div className="absolute top-20 right-32 opacity-8">
              <div className="w-6 h-8 bg-green-300 rounded-t-full"></div>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Bank-level security protocols protect your data with advanced encryption and monitoring.
              </p>

              <div className="flex items-end justify-between">
                <button className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-800 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>

                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-800">256</div>
                  <div className="text-sm text-gray-600">Bit Encryption</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 4 - Light Pink with Wave Pattern */}
          <div className="relative bg-pink-100 rounded-3xl p-8 overflow-hidden">
            <div className="absolute top-8 right-8 opacity-12">
              <svg width="60" height="40" viewBox="0 0 60 40" className="text-pink-300">
                <path d="M0,20 Q15,5 30,20 T60,20" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M0,30 Q15,15 30,30 T60,30" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>

            <div className="absolute bottom-16 right-16 opacity-10">
              <div className="w-8 h-16 bg-pink-200 rounded-t-full"></div>
              <div className="w-12 h-4 bg-pink-200 rounded-b-full -mt-2 -ml-2"></div>
            </div>
            <div className="absolute top-16 right-28 opacity-8">
              <div className="w-4 h-8 bg-pink-300 rounded-t-full"></div>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-white" />
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Launch your projects faster with our comprehensive suite of development tools and pre-built components
                that accelerate your workflow.
              </p>

              <div className="flex items-end justify-between">
                <button className="w-10 h-10 bg-pink-700 rounded-full flex items-center justify-center hover:bg-pink-800 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>

                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-800">3x</div>
                  <div className="text-sm text-gray-600">Faster Development</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 5 - Light Purple with Grid Pattern */}
          <div className="relative bg-purple-100 rounded-3xl p-8 overflow-hidden">
            <div className="absolute top-6 right-6 opacity-12">
              <div className="grid grid-cols-5 gap-1">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-purple-300 rounded-sm"></div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-20 right-20 opacity-10">
              <div className="w-16 h-16 border-2 border-purple-200 rounded-full">
                <div className="w-full h-0.5 bg-purple-200 mt-4"></div>
                <div className="w-full h-0.5 bg-purple-200 mt-2"></div>
                <div className="w-full h-0.5 bg-purple-200 mt-2"></div>
              </div>
            </div>
            <div className="absolute top-12 right-32 opacity-8">
              <div className="w-8 h-8 border border-purple-300 rounded-full">
                <div className="w-full h-px bg-purple-300 mt-2"></div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Scale globally with confidence using our distributed infrastructure that ensures optimal performance
                across all continents and time zones.
              </p>

              <div className="flex items-end justify-between">
                <button className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-800 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>

                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-800">180+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`

export default FeaturesSection;
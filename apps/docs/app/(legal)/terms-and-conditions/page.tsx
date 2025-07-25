"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const sections = [
    {
      title: "1. Usage License",
      content: (
        <>
          ZentoUI is released under the{" "}
          <a
            rel="noreferrer"
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            className="text-blue-600 underline"
          >
            MIT License
          </a>
          . You are free to use, modify, and distribute the components for
          personal or commercial use. Attribution is appreciated but not
          required.
        </>
      ),
    },
    {
      title: "2. No Warranty",
      content: (
        <>
          All components are provided <strong>“as is”</strong> without
          warranties of any kind. We do not guarantee performance,
          compatibility, or accuracy. Use it at your own discretion.
        </>
      ),
    },
    {
      title: "3. Modifications",
      content: (
        <>
          You can fully customize the components to suit your needs. If you
          distribute a modified version, make sure it’s clearly distinct and not
          misrepresented as official ZentoUI.
        </>
      ),
    },
    {
      title: "4. Prohibited Use",
      content: (
        <>
          You may not use ZentoUI in projects that promote hate, violence,
          illegal activities, or infringe on others&apos; intellectual property.
        </>
      ),
    },
    {
      title: "5. Limitation of Liability",
      content: (
        <>
          The ZentoUI maintainers are not liable for any direct or indirect
          damages that may occur from using this library.
        </>
      ),
    },
    {
      title: "6. Changes to These Terms",
      content: (
        <>
          We may update these terms over time. Major changes will be announced
          via our GitHub or official documentation. Continued usage implies
          acceptance of any updates.
        </>
      ),
    },
    {
      title: "7. Contact",
      content: (
        <>
          Have questions or concerns? Reach out to us via{" "}
          <a
            href="mailto:satyampratibhan@gmail.com"
            className="text-blue-600 underline"
          >
            satyampratibhan@gmail.com
          </a>{" "}
          or open an issue on our GitHub repository.
        </>
      ),
    },
  ];

  return (
    <motion.main
      className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Terms & Conditions
      </motion.h1>
      <motion.p
        className="text-sm text-gray-500 mb-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        Last updated: July 25, 2025
      </motion.p>

      <section className="space-y-8 text-base leading-relaxed">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            variants={{
              sectionVariants,
            }}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p>{section.content}</p>
          </motion.div>
        ))}
      </section>
    </motion.main>
  );
}

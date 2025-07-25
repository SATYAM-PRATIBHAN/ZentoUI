"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
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
      title: "1. Introduction",
      content: (
        <>
          At ZentoUI, we respect your privacy. This page explains what data we
          (do not) collect and how any information is handled when you use our
          components, browse our documentation, or interact with our open-source
          tools.
        </>
      ),
    },
    {
      title: "2. Data Collection",
      content: (
        <>
          ZentoUI does not collect any personally identifiable information (PII)
          by default. We do not require user accounts, and we do not track user
          behavior beyond anonymous analytics (if enabled).
        </>
      ),
    },
    {
      title: "3. Cookies & Analytics",
      content: (
        <>
          If we use analytics (e.g., Vercel Analytics, Plausible, or similar),
          they may use non-identifiable cookies to measure site usage such as
          page visits and referrers. No personal data is stored or shared.
        </>
      ),
    },
    {
      title: "4. Third-Party Links",
      content: (
        <>
          Our site may contain links to external websites or tools. We are not
          responsible for their privacy practices, so we recommend reviewing
          their policies individually.
        </>
      ),
    },
    {
      title: "5. Your Rights",
      content: (
        <>
          Since we do not collect personal data, there’s nothing to modify or
          delete. But if you ever believe something on our platform violates
          your privacy or copyright, you may reach out and we’ll address it
          promptly.
        </>
      ),
    },
    {
      title: "6. Changes to This Policy",
      content: (
        <>
          We may update this privacy policy in the future. Updates will be
          posted here with a new effective date. Continued use of the site after
          changes means you agree to the revised policy.
        </>
      ),
    },
    {
      title: "7. Contact",
      content: (
        <>
          If you have questions or concerns about this policy, contact us at{" "}
          <a
            href="mailto:satyampratibhan@gmail.com"
            className="text-blue-600 underline"
          >
            satyampratibhan@gmail.com
          </a>
          .
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
        Privacy Policy
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
            variants={{ sectionVariants }}
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

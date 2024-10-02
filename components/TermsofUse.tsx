import React from "react";
import Link from "next/link"; // Next.js Link component for navigation

const TermsOfUse: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black p-8">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">Terms of Use</h1>

      <div className="max-w-3xl text-white text-center space-y-6 leading-relaxed">
        <p>
          Welcome to <strong>Luminary Lines</strong>, a project built by <strong>Ascension Wave</strong>. By using our website, you agree to the following Terms of Use. Please read them carefully.
        </p>

        <p>
          <strong>1. Ownership and Copyright</strong><br />
          The design, structure, and source code of Luminary Lines are proprietary to Ascension Wave. You are not permitted to copy, duplicate, or distribute the source code or structural elements of this website in any form without prior written consent.
        </p>

        <p>
          <strong>2. Inspiration and Motivation</strong><br />
          We encourage creativity and innovation! Feel free to get inspired and motivated by our designs and ideas to create your own projects. However, direct copying or imitation of Luminary Lines without substantial modification is prohibited.
        </p>

        <p>
          <strong>3. Modifications</strong><br />
          You are welcome to modify any downloadable components that we provide. Any modifications or derivative works must respect the integrity of the original design.
        </p>

        <p>
          <strong>4. Limitation of Liability</strong><br />
          Ascension Wave is not liable for any issues, including legal consequences, resulting from unauthorized use or misuse of the website's content, structure, or code.
        </p>

        <p>
          By accessing and using Luminary Lines, you acknowledge that you have read and understood these terms.
        </p>

        <p>
          <strong>Contact Information</strong><br />
          For any questions or concerns, please reach out to us at amaljith6430@gmail.com
        </p>

        {/* Back to Home Button */}
        <Link href="/" passHref>
          <button className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TermsOfUse;

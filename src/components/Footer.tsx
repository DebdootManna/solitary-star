import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 text-center text-gray-500">
      <div className="max-w-5xl mx-auto">
        <p>© {currentYear} The Messengers. All rights reserved.</p>
        <p className="mt-2 text-sm">
          <span className="opacity-75">Website by </span> <span className="text-violet-400">Debdoot Manna</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
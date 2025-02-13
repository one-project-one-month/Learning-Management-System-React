const Footer = () => {
  return (
    <footer className="h-20 w-full bg-blue-500 flex justify-between items-center px-8 md:px-20 text-white">
      <div>&copy; {new Date().getFullYear()} LMS Platform</div>
      <div>All rights reserved</div>
    </footer>
  );
};

export default Footer;

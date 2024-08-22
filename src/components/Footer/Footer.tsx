import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 text-center">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
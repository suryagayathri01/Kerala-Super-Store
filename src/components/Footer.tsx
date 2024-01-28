const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="p-4">
        <div className="flex flex-col ">
          <div className="flex justify-between ">
            <a href="#" className="mx-6 flex space-x-3 lg:mx-12">
              <img src="./public/whats.svg" alt="Logo" className="h-6 w-6 " />
              <img src="./public/insta.svg" alt="Logo" className="h-6 w-6 " />
            </a>
            <ul className="mx-6 mb-4 flex space-x-3 text-sm font-medium text-black lg:mx-12">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-6 my-6 border-t border-gray-700 lg:mx-12"></div>
          <span className="text-center text-sm text-gray-400">
            © 2023{" "}
            <a href="#App" className="hover:underline">
              Kerala Super Store
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

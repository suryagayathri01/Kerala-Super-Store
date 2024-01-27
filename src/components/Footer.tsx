const Footer = () => {
  return (
    

<footer className="bg-white ">
    <div className="w-full max-w-screen-xl mx-auto p-4 sm:p-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="./public/whats.svg" alt="Logo" className="h-8 w-8 flex-shrink-0 antialiased" />
                <img src="./public/insta.svg" alt="Logo" className="h-8 w-8 flex-shrink-0 antialiased" />
                {/* <div className="flex justify-evenly">
        <div className="flex flex-col items-center"><div>PHONE</div><div>+91 9995412940 / 9995478590 </div></div>
        <div className="flex flex-col items-center"><div>EMAIL</div><div>keralasuperstore@gmail.com</div></div>
      </div> */}
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-black">
                <li>
                    <a href="#About" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#Contact" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 mx-auto dark:border-gray-700 " />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#App" className="hover:underline">Kerala Super Store</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer
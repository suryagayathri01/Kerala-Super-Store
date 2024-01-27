const Footer = () => {
  return (
    

<footer class="bg-white rounded-lg ">
    <div class="w-full max-w-screen-xl mx-auto p-4 sm:p-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="./public/whats.svg" alt="Logo" class="h-8 w-8 flex-shrink-0 antialiased" />
                <img src="./public/insta.svg" alt="Logo" class="h-8 w-8 flex-shrink-0 antialiased" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-black">
                <li>
                    <a href="#About" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#Contact" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 mx-auto dark:border-gray-700 " />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#App" class="hover:underline">Kerala Super Store</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer
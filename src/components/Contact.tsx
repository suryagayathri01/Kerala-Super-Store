const Contact = () => {
  return (
    <div className="h-screen  px-6 py-9 lg:px-5">
      <div className="mx-auto mb-6 mt-16 max-w-3xl rounded-md sm:mt-20">
        <div className="py-5 text-center text-3xl font-bold">Contact Us</div>
        <form
          action="#"
          method="POST"
          className="rounded-xl bg-white px-9 py-14 shadow-xl "
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-3">
              <div className="flex flex-col">
                <label className="font-semibold">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-md bg-transparent text-black placeholder-gray-600"
                  required
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-md bg-transparent text-black placeholder-gray-600"
                  required
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="rounded-md font-semibold">
                  Phone<span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-md bg-transparent text-black placeholder-gray-600"
                ></input>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                rows={6}
                placeholder="Your Message"
                className="rounded-md bg-transparent text-black placeholder-gray-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-evenly">
        <div className="flex flex-col items-center">
          <div>PHONE</div>
          <div>+91 9995412940 / 9995478590 </div>
        </div>
        <div className="flex flex-col items-center">
          <div>EMAIL</div>
          <div>keralasuperstore@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
























































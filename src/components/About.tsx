import CountUp from "react-countup";

const About = () => {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-10 text-center sm:gap-44 md:flex-row">
      <div className="flex flex-col gap-4 text-6xl font-bold">
        <div className="bg-gradient-to-r from-teal-300 to-indigo-400 bg-clip-text text-transparent">
          About
        </div>
        <CountUp
          className="rounded border border-black px-4 py-2 text-lg font-normal sm:text-2xl"
          prefix="Since "
          end={1980}
          start={new Date().getFullYear()}
          duration={5}
          separator=""
          enableScrollSpy={true}
        />
      </div>
      <div className="m-2 text-lg font-semibold md:w-1/2">
        Kerala Super Store, situated at the heart of Aloor, stands as a
        prominent supermarket with a rich history. Originating as a grocery
        store in the 1980s, the establishment underwent significant growth,
        transforming into a full-fledged superstore in May 2013. Committed to
        providing quality products to the community, Kerala Super Store offers a
        diverse range of items at prices substantially lower than the MRP. With
        a customer-centric approach, this superstore aims to create a friendly
        and affordable shopping experience for all.
      </div>
    </div>
  );
};

export default About;

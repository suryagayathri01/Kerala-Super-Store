const About = () => {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-10 text-center sm:gap-44 md:flex-row">
      <div className="flex flex-col gap-2 text-6xl font-bold text-transparent">
        <div className="bg-gradient-to-r from-teal-300 to-indigo-400 bg-clip-text">
          About
        </div>
        <div>rfhkb</div>
      </div>
      <div className="m-2 text-lg font-semibold md:w-1/2">
        Kerala Super Store, situated at the heart of Aloor, stands as a
        prominent supermarket with a rich history. Originating as a grocery
        store in the 1970s, the establishment underwent significant growth,
        transforming into a full-fledged superstore in 2010. Committed to
        providing quality products to the community, Kerala Super Store offers a
        diverse range of items at prices substantially lower than the MRP. With
        a customer-centric approach, this superstore aims to create a friendly
        and affordable shopping experience for all.
      </div>
    </div>
  );
};

export default About;

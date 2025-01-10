const HeroPage = ({ children }) => {
  console.log("hero page render");

  return (
    <section className="h-screen bg-gradient-to-r from-[#263b9b] to-[#E0C3FC]  ">
      {children}
    </section>
  );
};

export default HeroPage;

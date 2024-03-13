import Link from "next/link";

function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md 
    flex flex-col justify-center items-center relative 
    overflow-hidden mx-auto py-10 md:py-0"
    >
      <div className="p-4 relative z-10 w-full text-center">
        <h1>Master the art of Music</h1>
        <p>
          Dive into our comprehensive music courses and transform your musical
          journey today. Weather you`re a begineer or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
            <Link href={"/courses"}>
                Explore Courses
            </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

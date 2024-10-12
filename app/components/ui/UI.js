import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { gsap } from "gsap";

export const UI = () => {
  const firstSec = useRef();
  const secondSec = useRef();
  const thirdSec = useRef();
  const fourthSec = useRef();
  const fifthSec = useRef();
  const sixthSec = useRef();
  const scroll = useScroll();

  useFrame(() => {
    const sections = [
      firstSec.current,
      secondSec.current,
      thirdSec.current,
      fourthSec.current,
      fifthSec.current,
      sixthSec.current,
    ];

    const totalSections = sections.length;
    const currentPosition = scroll.offset * (totalSections - 1);

    // Calculate the position relative to the screen height
    sections.forEach((section, index) => {
      if (index === 0 || index === 5) {
        gsap.to(section, { opacity: 1, duration: 0 }); // Ensure first section stays fully visible
        return;
      }

      const sectionTop = currentPosition - index;

      // Check if section is within the visible middle 3/5 range
      if (sectionTop > -0.2 && sectionTop < 0.7) {
        const fadeProgress = Math.min(Math.max((sectionTop - 0.1) / 0.6, 0), 1); // Normalize between 0 and 1
        gsap.to(section, { opacity: fadeProgress, duration: 0.1 });
      } else {
        gsap.to(section, { opacity: 0, duration: 0.1 });
      }
    });
  });

  return (
    <div className="text-white container flex flex-col justify-center items-center w-screen mx-auto">
      <section
        ref={firstSec}
        className="w-screen md:w-2/3 p-8 h-screen flex items-end justify-center text-center select-none opacity-0"
      >
        <div>
          <h1 className="mb-4 text-4xl font-bold font-serif">Tesla Model 3 Overview</h1>
          <p className="mb-16">
            The Tesla Model 3 combines performance, safety, and efficiency in a sleek package, revolutionizing the electric vehicle market.
          </p>
        </div>
      </section>

      {/* About Space and Width */}
      <section
        ref={secondSec}
        className="md:w-2/3  w-screen h-screen  flex items-end p-8 lg:p-20 select-none max-w-screen-xl mx-auto opacity-0"
      >
        <div>
          <h2 className="text-2xl font-bold font-serif">Interior Space and Width</h2>
          <p className="mt-2">
            The spacious interior of the Tesla Model 3 comfortably seats five adults with ample head and legroom. With a width of 74 inches, it provides a roomy feel while maintaining a sleek profile.
          </p>
        </div>
      </section>

      {/* About Boot Space */}
      <section
        ref={thirdSec}
        className="md:w-2/3 h-screen w-screen flex items-end p-8 lg:p-20 select-none max-w-screen-xl mx-auto opacity-0"
      >
        <div>
          <h2 className="text-2xl font-bold font-serif">Boot Space</h2>
          <p className="mt-2">
            The Model 3 boasts impressive boot space, offering 15 cubic feet of storage capacity, which is versatile for all your gear.
          </p>
        </div>
      </section>

      {/* About Doors and Handles */}
      <section
        ref={fourthSec}
        className="md:w-2/3 h-screen w-screen flex items-end p-8 lg:p-20 select-none max-w-screen-xl mx-auto opacity-0"
      >
        <div>
          <h2 className="text-2xl font-bold font-serif">Doors and Handles</h2>
          <p className="mt-2">
            The Tesla Model 3 features innovative door handles that pop out when touched, maintaining a sleek aesthetic while providing easy access.
          </p>
        </div>
      </section>

      {/* About Wheels */}
      <section
        ref={fifthSec}
        className="md:w-2/3 h-screen w-screen flex items-end p-8 lg:p-20 select-none max-w-screen-xl mx-auto opacity-0"
      >
        <div>
          <h2 className="text-2xl font-bold font-serif">Wheels</h2>
          <p className="mt-2">
            The Model 3 offers a range of wheel options, ensuring a balance between performance and style.
          </p>
        </div>
      </section>

      {/* About Front and Battery */}
      <section
        ref={sixthSec}
        className="md:w-2/3 h-screen w-screen flex items-end p-8 lg:p-20 select-none max-w-screen-xl mx-auto opacity-0"
      >
        <div>
          <h2 className="text-2xl font-bold font-serif">Front and Battery</h2>
          <p className="mt-2">
            The Tesla Model 3 is equipped with a robust battery pack that provides impressive range and performance.
          </p>
        </div>
      </section>
    </div>
  );
};

export const UI = () => {
  return (
    <>
      <section className="p-8 h-screen w-screen flex items-end justify-center text-center select-none">
        <div>
          <h1 className="mb-4 text-4xl font-bold font-serif">Tesla Model 3 Overview</h1>
          <p className="mb-16">
            The Tesla Model 3 combines performance, safety, and efficiency in a sleek package, revolutionizing the electric vehicle market.
          </p>

        </div>
      </section>


      {/* About Space and Width */}
      <section className="h-screen w-screen flex items-end p-8 lg:p-20 select-none max-w-screen-xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold font-serif">Interior Space and Width</h2>
          <p className="mt-2">
            The spacious interior of the Tesla Model 3 comfortably seats five adults with ample head and legroom. With a width of 74 inches, it provides a roomy feel while maintaining a sleek profile. The minimalist design enhances the open ambiance, making it a perfect blend of style and comfort. 🛋️
          </p>
        </div>
      </section>

      {/* About Boot Space */}
      <section className="h-screen w-screen flex items-end p-8 lg:p-20 select-none max-w-screen-xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold font-serif">Boot Space</h2>
          <p className="mt-2">
            The Model 3 boasts impressive boot space, offering 15 cubic feet of storage capacity, which is versatile for all your gear. The rear trunk can be expanded with the rear seats folded down, accommodating larger items and ensuring you have the space needed for road trips and everyday use. 🧳
          </p>
        </div>
      </section>

      {/* About Doors and Handles */}
      <section className="h-screen w-screen flex items-end p-8 lg:p-20 select-none max-w-screen-xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold font-serif">Doors and Handles</h2>
          <p className="mt-2">
            The Tesla Model 3 features innovative door handles that pop out when touched, maintaining a sleek aesthetic while providing easy access. This design not only enhances the car's aerodynamics but also adds a futuristic touch to the overall look. 🚪
          </p>
        </div>
      </section>

      {/* About Wheels */}
      <section className="h-screen w-screen flex items-end p-8 lg:p-20 select-none max-w-screen-xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold font-serif">Wheels</h2>
          <p className="mt-2">
            The Model 3 offers a range of wheel options, from the standard 18-inch wheels to the sporty 20-inch variants, ensuring a balance between performance and style. Each wheel is designed to optimize efficiency, contributing to the vehicle's range and handling. 🛞
          </p>
        </div>
      </section>

      {/* About Front and Battery */}
      <section className="h-screen w-screen flex items-end p-8 lg:p-20 select-none max-w-screen-xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold font-serif">Front and Battery</h2>
          <p className="mt-2">
            The Tesla Model 3 is equipped with a robust battery pack that provides impressive range and performance. The front of the vehicle houses additional storage space, often referred to as the "frunk," which offers more practicality for everyday use. 🔋
          </p>
        </div>
      </section>

      <section className="h-screen w-screen flex items-end p-8 lg:p-20 select-none max-w-screen-xl mx-auto">
        <div>

          <p className="mb-4">
            <a

              target="_blank"
              href="https://ashabb.vercel.app"
              className="text-2xl text-blue-500 underline"
            >
              ASHABB - We offer freelance web development using MERN, Next.js, and Three.js.
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

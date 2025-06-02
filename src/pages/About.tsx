import me from '../assets/Me.jpg';

export const About = () => {
  return (
    <>
      <main className="h-screen pt-20 flex flex-col items-center justify-center">
        <section className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
          <img
            className="h-48 w-64 object-cover mt-3 shadow-md rounded-xl"
            src={me}
            alt="picture of me"
          />
          <section>
            <h2 className="text-shadow-5xs text-shadow-sky-300 text-4xl text-center md:text-left">
              Kalle Pettersson
            </h2>
            <p className="text-1m text-center md:text-left mt-2 w-64">
              I am a joy spreader who is 39 years old and see myself as a future
              developer, and I am a current student to be a front end developer.
            </p>
          </section>
        </section>
        <section className="max-w-xl text-center md:text-left">
          <p className="p-4">
            With a great interest in making beautiful and user-friendly
            projects. I am a father and a man with great interest in family. If
            I have some time to spare, I like to go to the gym or play a game on
            the computer with some friends, or laze on the sofa with a bag of
            sweets and a good movie. I have previous experience in warehouse
            jobs but not in IT, so I am excited to change career direction.
          </p>
        </section>
      </main>
    </>
  );
};

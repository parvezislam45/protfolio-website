import React from "react";
import education from '../../Image/school.jpg'

const About = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-black">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={education} alt='david'
            class="w-96 rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold heading">About Me</h1>
            <p class="py-6">
           I Am Parvez Islam. I am a Mechanical Engineer. I Will Complete my B.S.C Engineering From International University of Business Agriculture & Technology (IUBAT) University in 2021. Ordinary people.I Respect Any Work and Love to do it Honestly. I Want to Establish Myself as a Web Developer
            </p>
            <button class="btn btn-primary transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-sky-700 duration-300">
                    <a
                      href="https://github.com/parvezislam45"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </button><br></br>
                  <div className="mt-5">
                  <button class="btn btn-primary transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-sky-700 duration-300">
                    <a
                      href="https://www.linkedin.com/in/parvez-islam-31a57023b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Linkedin
                    </a>
                  </button>
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

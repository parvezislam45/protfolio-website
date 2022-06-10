import React from "react";
import parvez from "../../Image/david.png";
import About from "./About";
import Footer from "./Footer";
import Form from "./Form";
import Skill from "./Skill";
import Web from "./Web";
const Home = () => {
  return (
    <div className="">
      <div className="inner flex flex-col items-center justify-center px-12 bg-banner">
        <div class=" container flex justify-around py-6 px-16 sm:px-6 2xl:px-0">
          <div class="">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <img src={parvez} class="object-fill img" alt="david" />
              <div className="">
                <h1 class="text-5xl font-bold heading">Parvez Islam</h1>
                <div className="mt-5">
                  {" "}
                  <h5 class="text-2xl font-bold title">MERN Stack Web Developer</h5>
                  <h6 class="text-sm title">Email : parvezislam@gmail.com</h6>
                  <h6 class="text-base title">Contract : 01683338523</h6>
                </div>
                <div className="mt-5">
                  <button class="btn btn-primary transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-sky-700 duration-300">
                    <a
                      href="https://docs.google.com/document/d/1ElLPtzDJ-O0iWIUbRLd5PnPuC_wUqyZwNDTyLYx2_jY/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Resume
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <About></About>
      </div>
      <Web className="bg-black"></Web>
      <div className="mt-8">
        <h1 className="text-3xl text-center text-bold heading" id='skill'>Skills</h1>
      </div>
      <Skill></Skill>
      <div className="mt-8">
        <h1 className="text-3xl text-center text-bold heading" id='contract'>Contract Me</h1>
      </div>
      <div className="mt-6">
      <Form></Form>
      </div>
      <div className="mt-4">
      <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import bike from '../../Image/DNfPehFWsAER8WJ.jpg'
import perts from '../../Image/71UUBZLOo8L._AC_SL1500_.jpg'
import service from '../../Image/33fd15029ab4cc83277de366312b5ab8.jpg'
import MyService from "./MyService";

const Web = () => {
  return (
    <div className="bg-black">
         <div className="mt-8">
        <h1 className="text-4xl text-center text-bold heading" id='service'>My Service</h1>
      </div>
        <MyService></MyService>
        <div className="mt-8">
        <h1 className="text-4xl text-center text-bold heading" id='web'>My WebPage</h1>
      </div>
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 gap-y-10">
        <div class="card w-96 shadow-xl transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
          <figure class="px-10 pt-10">
            <img
              src={bike}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">David Bike Mania</h2>
            <div className="mt-3">
            <button class="btn btn-primary transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
              <a
                href="https://david-bike-mania.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
            </button>
            </div>
            <div className="mt-3">
            <button class="btn btn-primary transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
              <a
                href="https://github.com/parvezislam45/warehouse-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                Git Hub Server Site Code
              </a>
            </button>
            </div>
            <div className="mt-3">
            <button class="btn btn-primary transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
              <a
                href="https://github.com/parvezislam45/wereHouse-Client/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Git Hub Client Site Code
              </a>
            </button>
            </div>
          </div>
        </div>
        <div class="card w-96 shadow-xl transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
          <figure class="px-10 pt-10">
            <img
              src={perts}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title title">Bike Menufacturer</h2>
            <div className="mt-3">
            <button class="btn btn-primary transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
              <a
                href="https://parts-menufcturar.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
            </button>
            </div>
            <div className="mt-3">
            <button class="btn btn-primary transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
              <a
                href="https://github.com/parvezislam45/Menufacturing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Git Hub Client Site Code
              </a>
            </button>
            </div>
            <div className="mt-3">
            <button class="btn btn-primary transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
              <a
                href="https://github.com/parvezislam45/Menufacturing-Server/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Git Hub Server Site Code
              </a>
            </button>
            </div>
          </div>
        </div>
        <div class="card w-96 shadow-xl transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
          <figure class="px-10 pt-10">
            <img
              src={service}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title title">David Mechaine Servicing Center</h2>
            <div className="mt-3">
            <button class="btn btn-primary transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
              <a
                href="https://mechine-service.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site Link
              </a>
            </button>
            </div>
            <div className="mt-3">
            <button class="btn btn-primary transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
              <a
                href="https://github.com/parvezislam45/Mechine-Service/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Git Hub Client Site Code
              </a>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;

import React from "react";
import develop from "../../Image/web-development.png";
import design from "../../Image/website-design.png";
import font from "../../Image/front.jpg";
import back from "../../Image/backend.jpeg";
import deploy from "../../Image/Web_hosting.jpg";
import server from "../../Image/server.png";

const MyService = () => {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 gap-y-10">
        <div class="shadow-xl w-72">
          <figure>
            <img
              src={develop}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body text-center">
            <h2 class="text-center text-2xl service">Web Site Development</h2>
           
          </div>
        </div>
        <div class="shadow-xl w-72">
          <figure>
            <img
              src={design}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body text-center">
            <h2 class="text-center text-2xl service">Design Full Web Site</h2>
           
          </div>
        </div>
        <div class="shadow-xl w-72">
          <figure>
            <img
              src={font}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body text-center">
            <h2 class="text-center text-2xl service">Front end Design Web Page</h2>
            
          </div>
        </div>
        <div class="shadow-xl w-72">
          <figure>
            <img
              src={back}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body text-center">
            <h2 class="text-center text-2xl service">Back-End Data Management</h2>
            
          </div>
        </div>
        <div class="shadow-xl w-72">
          <figure>
            <img
              src={server}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body text-center">
            <h2 class="text-center text-2xl service">Server & Cloud Management</h2>
            
          </div>
        </div>
        <div class="shadow-xl w-72">
          <figure>
            <img
              src={deploy}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body text-center">
            <h2 class="text-center text-2xl service">Deploy , Domain & Hosting Support</h2> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyService;

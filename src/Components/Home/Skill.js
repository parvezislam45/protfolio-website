import React from "react";
import node from "../../Image/node.jpg";
import mongo from "../../Image/mongo db.jpg";
import react from "../../Image/react.jpg";
import es6 from "../../Image/es6.png";
import java from "../../Image/java.jpg";
import tailwind from "../../Image/tailwind.jpg";
import bootstrap from "../../Image/bootstrap.png";
import css from "../../Image/css_blog.png";
import html from "../../Image/html.png";

const Skill = () => {
  return (
    <div>
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 mt-20 gap-y-8">
        <div class="card w-52 bg-base-100 shadow-xl transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
          <figure>
            <img src={node} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title title">Node Js</h2>
          </div>
        </div>
        <div class="card w-52 bg-base-100 shadow-xl transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
          <figure>
            <img src={mongo} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title title">Mongo DB</h2>
          </div>
        </div>
        <div class="card w-52 bg-base-100 shadow-xl transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
          <figure>
            <img src={react} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title title">React JS</h2>
          </div>
        </div>
        <div class="card w-52 bg-base-100 shadow-xl transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
          <figure>
            <img src={es6} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title title">ECMA Script-6</h2>
          </div>
        </div>
        <div class="card w-52 bg-base-100 shadow-xl transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
          <figure>
            <img src={java} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title title">Java Script</h2>
          </div>
        </div>
        <div class="card w-52 bg-base-100 shadow-xl transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
          <figure>
            <img src={tailwind} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title title">Tailwind CSS</h2>
          </div>
        </div>
        <div class="card w-52 bg-base-100 shadow-xl transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
          <figure>
            <img src={bootstrap} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title title">BootStarp</h2>
          </div>
        </div>
        <div class="card w-52 bg-base-100 shadow-xl transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
          <figure>
            <img src={css} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title title">CSS</h2>
          </div>
        </div>
        <div class="card w-52 bg-base-100 shadow-xl transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
          <figure>
            <img src={html} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title title">HTML</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

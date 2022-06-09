import React from "react";
import emailjs from 'emailjs-com'

const Form = () => {
    function sendEmail(e){
        e.preventDefault()
        emailjs.sendForm('service_s5l016c','template_2u5ukcl',e.target,"template_hnlq4td").then(res =>{
            console.log(res)
        }).catch(err =>console.log(err))
    }
  return (
    <div className="flex justify-center">
      <form onSubmit={sendEmail}>
        <div class="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Message</span>
              </label>
              <textarea name="message" rows="4" class="textarea" placeholder="message"></textarea>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
        <input type="submit" value="send" className="btn btn-wide btn-secondary" />
        </div>
      </form>
    </div>
  );
};

export default Form;

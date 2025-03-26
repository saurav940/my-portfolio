import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <form className="flex flex-col space-y-4 mt-5 w-1/2 mx-auto">
        <input type="text" name="name" placeholder="Name" className="p-2 border rounded" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="p-2 border rounded" onChange={handleChange} />
        <textarea name="message" placeholder="Message" className="p-2 border rounded" onChange={handleChange}></textarea>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

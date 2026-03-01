import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import toast from "react-hot-toast";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { BsSend, BsGeoAlt, BsEnvelope } from "react-icons/bs";

const Contact = () => {
  const [state, handleSubmit] = useForm("mrbellpr");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      toast.success("Message saved!");
    } catch (error) {
      toast.error("Error saving message!");
      console.log(error);
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      await fetch("https://formspree.io/f/mrbellpr", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Error sending message!");
      console.log(error);
    }

    setDisableBtn(false);
  };

  return (
    <div id="contact">
      <motion.div
        className="sectionHeader"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="sectionLabel">
          <span className="line"></span>
          GET IN TOUCH
          <span className="line"></span>
        </span>
        <h2>Let's Work Together</h2>
        <p className="sectionSubtext">Have a project in mind? Let's create something amazing together.</p>
      </motion.div>

      <div className="contactContent">
        {/* Left - Info Cards */}
        <motion.div
          className="contactInfo"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="infoCard">
            <div className="infoIcon">
              <BsEnvelope />
            </div>
            <div>
              <h4>Email</h4>
              <p>jahirmj2001@gmail.com</p>
            </div>
          </div>

          <div className="infoCard">
            <div className="infoIcon">
              <BsGeoAlt />
            </div>
            <div>
              <h4>Location</h4>
              <p>India</p>
            </div>
          </div>

          <div className="connectSection">
            <p>Connect with me</p>
            <div className="socialIcons">
              <a href="https://github.com/JahirMullick" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/md-jahir-mullick/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <AiFillLinkedin />
              </a>
              <a href="mailto:jahirmj2001@gmail.com" aria-label="Email">
                <AiOutlineMail />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right - Form Card */}
        <motion.div
          className="contactFormCard"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Send a Message</h3>
          <p className="formSubtext">Fill out the form and I'll get back to you soon!</p>

          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button
              disabled={disableBtn}
              className={disableBtn ? "disableBtn" : ""}
              type="submit"
            >
              Send Message <BsSend />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

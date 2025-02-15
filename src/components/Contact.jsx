// import React, { useState } from "react";
// import vg from "../assets/vg.png";
// import toast from "react-hot-toast";
// import { motion } from "framer-motion";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../firebase";
// // import { FaWhatsapp } from "react-icons/fa";


// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [disableBtn, setDisableBtn] = useState(false);

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setDisableBtn(true);
//     try {
//       await addDoc(collection(db, "contacts"), {
//         name,
//         email,
//         message,
//       });
//       setName("");
//       setEmail("");
//       setMessage("");
//       toast.success("Message Sent");
//       setDisableBtn(false);
//     } catch (error) {
//       toast.error("Error");
//       console.log(error);
//       setDisableBtn(false);
//     }
//   };

//   const animations = {
//     form: {
//       initial: {
//         x: "-100%",
//         opacity: 0,
//       },
//       whileInView: {
//         x: 0,
//         opacity: 1,
//       },
//     },

//     button: {
//       initial: {
//         y: "-100%",
//         opacity: 0,
//       },
//       whileInView: {
//         y: 0,
//         opacity: 1,
//       },
//       transition: {
//         delay: 0.5,
//       },
//     },
//   };
//   return (
//     <div id="contact">
//       <section>
//         <motion.form onSubmit={submitHandler} {...animations.form}>
//           <h2>Contact Me</h2>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Your Name"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Your Message"
//             required
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />

//           <motion.button
//             disabled={disableBtn}
//             className={disableBtn ? "disableBtn" : ""}
//             {...animations.button}
//             type="submit"
//           >
//             Send
//           </motion.button>
//           {/* <span></span>
//           <motion.button
//             className="wpdiv">
//             <a target="_blank" href="https://wa.me/9609547215" />
//             <FaWhatsapp className="wpbutton" />
//             <span className="wptext">Connect with Whatsapp</span>
//           </motion.button> */}
//         </motion.form>
//       </section>
//       <aside>
//         <img src={vg} alt="Graphics" />
//       </aside>
//     </div>
//   );
// };

// export default Contact;











// V2  

import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase"; // Import Firebase database
import vg from "../assets/vg.png";
import toast from "react-hot-toast";

const Contact = () => {
  const [state, handleSubmit] = useForm("mrbellpr"); // Formspree Form ID
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    // First, Save Data in Firebase Firestore
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      toast.success("Message saved in Firebase!");
    } catch (error) {
      toast.error("Error saving to Firebase!");
      console.log(error);
    }

    // Then, Submit Data to Formspree
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
      toast.success("Message sent via Formspree!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Error sending to Formspree!");
      console.log(error);
    }

    setDisableBtn(false);
  };

  const animations = {
    form: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
    },
    button: {
      initial: { y: "-100%", opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      transition: { delay: 0.5 },
    },
  };

  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandler} {...animations.form}>
          <h2>Contact Me</h2>

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

          <motion.button
            disabled={disableBtn}
            className={disableBtn ? "disableBtn" : ""}
            {...animations.button}
            type="submit"
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
  );
};

export default Contact;

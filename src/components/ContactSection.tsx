
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MailIcon, Send, Github, Linkedin, Twitter, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

// Validation schema
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message is too short")
    .max(500, "Message is too long")
    .required("Message is required"),
});

// Fake form submission
const submitForm = async (values: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted with values:", values);
      resolve(values);
    }, 1000);
  });
};

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#8B5CF6", "#6366F1", "#D946EF"],
    });
  };

  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    try {
      await submitForm(values);
      setSubmitted(true);
      resetForm();
      triggerConfetti();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const socialLinks = [
    { name: "GitHub", icon: <Github size={20} />, url: "https://github.com/bhanuprakash1312" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://linkedin.com/in/bhanuprakash-p-0441ba2bb" },
    
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid">
      <div className="container max-w-5xl">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Get In <span className="gradient-heading">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Have a project in mind or want to chat? Drop me a message!
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm card-glow">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-10"
              >
                <CheckCircle2 size={50} className="text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">
                  Thanks for reaching out. I'll get back to you soon!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="button-primary"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={ContactSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Name
                      </label>
                      <Field
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className="w-full bg-background focus:ring-primary"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        Email
                      </label>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        className="w-full bg-background focus:ring-primary"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1"
                      >
                        Message
                      </label>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="How can I help you?"
                        className="w-full bg-background focus:ring-primary"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="button-primary w-full flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">Sending...</span>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </Form>
                )}
              </Formik>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out if you're looking for a developer, have a
                question, or just want to connect.
              </p>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MailIcon size={20} />
                </div>
                <a
                  href="bp136897@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  bp136897@gmail.com
                </a>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-medium mb-3">Connect with me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-all"
                      aria-label={`Visit my ${link.name} profile`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Fun Fact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-secondary/20 border border-border rounded-lg p-5"
            >
              <h4 className="font-medium mb-2">Fun Fact</h4>
              <p className="text-muted-foreground text-sm">
                I wrote my first line of code at age 12, trying to customize my
                MySpace page. That early CSS adventure sparked my love for web
                development!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

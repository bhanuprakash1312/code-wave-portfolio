
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export const ResumeSection = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Data Science",
      institution: "Bapatla Engineering College",
      year: "2023 - 2027",
      description: "Focused on web development, UI/UX design, and software engineering principles."
    }
  ];

//   const trainingData = [
//     {
//       title: "Frontend Development Internship",
//       company: "WebTech Solutions",
//       period: "Summer 2022",
//       description: "Worked on real-world projects using React.js, collaborated with senior developers, and participated in UI/UX design sessions."
//     }
//   ];

  const certificationData = [
    {
      name: "Modern React with Redux",
      issuer: "Udemy",
      date: "January 2023"
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "March 2022"
    },
    {
      name: "Responsive Web Design",
      issuer: "Coursera",
      date: "November 2021"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="resume" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Resume</h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My educational background, training experiences, and certifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Education & Training */}
          <div>
            {/* Education */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-500 h-5 w-1 rounded mr-3"></span>
                Education
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <h4 className="text-lg font-medium text-gray-900">{item.degree}</h4>
                    <p className="text-blue-600">{item.institution}</p>
                    <p className="text-gray-500 text-sm mt-1">{item.year}</p>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Training/Internships */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-green-500 h-5 w-1 rounded mr-3"></span>
                Training & Internships
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* {trainingData.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                    <p className="text-blue-600">{item.company}</p>
                    <p className="text-gray-500 text-sm mt-1">{item.period}</p>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </motion.div>
                ))} */}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-purple-500 h-5 w-1 rounded mr-3"></span>
                Certifications
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {certificationData.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white p-4 rounded-lg shadow-sm flex flex-col"
                  >
                    <h4 className="text-lg font-medium text-gray-900">{item.name}</h4>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-blue-600">{item.issuer}</p>
                      <p className="text-gray-500 text-sm">{item.date}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex justify-center"
            >
              <a 
                href="/resume.pdf" 
                download
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-md"
              >
                <FaDownload />
                <span>Download Full Resume</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


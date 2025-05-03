import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaWrench, FaHardHat, FaTools } from "react-icons/fa";

export default function UnderConstruction() {
  const [toolIndex, setToolIndex] = useState(0);
  const tools = [<FaWrench />, <FaHardHat />, <FaTools />];

  useEffect(() => {
    const interval = setInterval(() => {
      setToolIndex((prev) => (prev + 1) % tools.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full p-10">
      <Helmet>
        <title>Under Construction</title>
      </Helmet>
      <motion.div
        initial={{ rotate: -15 }}
        animate={{ rotate: 15 }}
        transition={{ yoyo: Infinity, duration: 0.5 }}
        className="text-yellow-500 text-7xl"
      >
        {tools[toolIndex]}
      </motion.div>
      <motion.h1
        className="text-4xl font-bold mt-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Under Construction
      </motion.h1>
      <motion.p
        className="mt-2 text-lg text-gray-500 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        This section is being hammered into perfection. Check back soon!
      </motion.p>
    </div>
  );
}

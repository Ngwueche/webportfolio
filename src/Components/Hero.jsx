import heroImage from '../assets/images'; // Make sure to replace 'your-image.png' with your actual image file name
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = ["JavaScript", "React", "Node.js", "CSS", "Tailwind CSS", "Git", "Docker"];
const colors = ["text-red-500", "text-blue-500", "text-green-500", "text-yellow-500", "text-purple-500", "text-pink-500", "text-indigo-500"];

const Hero = () =>
{
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    useEffect(() =>
    {
        const skillInterval = setInterval(() =>
        {
            setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 1000);
        return () => clearInterval(skillInterval);
    }, []);

    useEffect(() =>
    {
        const colorInterval = setInterval(() =>
        {
            setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 1000);
        return () => clearInterval(colorInterval);
    }, []);

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-20">
            <div className="md:w-1/2 px-8 md:px-16 lg:px-32 py-16 md:py-32 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    Hi, I'm <span className={`transition-colors duration-1000 ${colors[currentColorIndex]}`}>Wisdom</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-6">
                    A passionate Software Engineer with skills in:
                </p>
                <div className="h-10 flex items-center justify-center md:justify-start">
                    <AnimatePresence>
                        <motion.div
                            key={currentSkillIndex}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.5 }}
                            className="bg-indigo-500 text-white px-4 py-2 text-2xl font-semibold rounded-full"
                        >
                            {skills[currentSkillIndex]}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <div className="md:w-1/4 flex justify-center md:justify-end overflow-hidden">
                <img
                    src={heroImage.beachpic}
                    alt="Wisdom"
                    className="w-[64%] h-64 md:w-80 md:h-[80] lg:w-[80%] lg:h-[50%] border-4 shadow-lg scale-[550%] "
                />
            </div>
        </div>
    );
};

export default Hero;

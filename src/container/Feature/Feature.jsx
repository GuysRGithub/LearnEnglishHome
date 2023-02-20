import React from 'react';

import { motion } from "framer-motion";

import { Section } from '../../layout';
import "./Feature.scss";
import MotionWrap from '../../layout/MotionWrap';

const Skill = () => {

    const skills = [
        {
            name: "Listen more,\nEnjoy better",
            description: "Explore rich features music playerto help you play music as whatever way you want",
            bgColor: "#edf2f8",
            icon:
                (<span className='app__flex bg-gradient-to-l rounded-full p-2 h-24 w-24 text-transparent from-indigo-600 to-blue-600'>
                    <span className="material-icons text-white text-4xl">
                        headset
                    </span>
                </span>)

        },
        {
            name: "Track your \nfavorites",
            description: "Track your songs with a top played list. Keep track of your styles and favorites song with ease.",
            bgColor: "#edf2f8",
            icon:
                (<span className='app__flex bg-gradient-to-l rounded-full p-2 h-24 w-24 text-transparent to-indigo-700 from-blue-800'>
                    <span className="material-icons text-white text-4xl">
                        favorite
                    </span>
                </span>)
        },
        {
            name: "Enjoying review \nyour moments",
            description: "Enjoy your moments with some peice of music that you like the most",
            bgColor: "#edf2f8",
            icon:
                (<span className='app__flex bg-gradient-to-b rounded-full p-2 h-24 w-24 text-transparent from-violet-800 to-indigo-800'>
                    <span className="material-icons text-white text-4xl">
                        library_music
                    </span>
                </span>)
        },
    ];
    return (
        <>
            <h2 className='head-text'>Features</h2>

            <div className=''>
                <motion.div className='flex flex-col items-center md:flex-row md:items-start'>
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex w-full"
                            key={skill.name}>
                            {skill.icon}
                            <p className='p-text mt-4 text-center text-3xl font-bold text-gray-800 whitespace-pre-line'>{skill.name}</p>
                            <p className='p-text mt-4 text-center px-8'>{skill.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <a href={"https://play.google.com/store/apps/details?id=com.bpguysrobot.englishvocabulary"} >
                    <div className="mx-auto flex w-48 h-14 text-sm font-black cursor-pointer bg-indigo-600 hover:bg-indigo-800 text-white rounded-lg items-center justify-center mt-16">
                        Try For Free
                    </div>
                </a>

            </div>
        </>
    );
}

export default Section(MotionWrap(Skill, "app__skills"), "features", "app__whitebg");

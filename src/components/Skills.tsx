import React from 'react';
import { skillCategories } from '../data/portfolio';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-center text-4xl font-bold mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-primary after:rounded-full after:block">
                    スキル
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className=" p-8 rounded-lg shadow-lg hover:-translate-y-1 transition-transform duration-300"
                            style={{
                                backgroundColor: 'var(--color-card-bg)',
                            }}
                        >
                            <h3 className="text-xl font-semibold text-secondary mb-6 text-center">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="flex flex-col items-center px-2 py-4 text-center rounded-lg transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105"
                                        style={{
                                            backgroundColor:
                                                'var(--color-card-bg-secondary)',
                                        }}
                                    >
                                        <i
                                            className={`${skill.icon} text-3xl mb-2 ${skill.color}`}
                                        ></i>
                                        <span className="font-medium">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

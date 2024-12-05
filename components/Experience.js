import React from 'react';
const experienceData = [
    {
        title: "Software Developer",
        company: "Stanford University",
        dates: "Nov 2024 - Present",
        description: "User experience design and software development on the OpenNeuro project within the Center for Reproducible Neuroscience."
    },
    {
        title: "Senior IT Associate",
        company: "Westat",
        dates: "3 yrs",
        description: "Led the design of the Community Engagement Alliance (NIH) public and permissioned websites, redesigned a tracking tool for the IDEA Data Center (ED), and designed the homepage and interactive dashboards for health survey projects."
    },
    {
        title: "User Experience & Design Lead",
        company: "Squishymedia",
        dates: "3 yrs",
        description: "Created user experience that facilitates working with and understanding data, designed layouts to highlight important content, and built front-end architecture that’s easily navigable."
    },
    {
        title: "Senior Front-End Developer and User Experience Designer",
        company: "Eclipse Media Solutions",
        dates: "3 yrs",
        description: "Developed with Drupal and JavaScript frameworks, managed client relations, project management, and staffing. Responsible for design, UX, and front-end architecture."
    },
    {
        title: "Senior Front-End Developer and User Experience Designer",
        company: "Squishymedia",
        dates: "4 yrs",
        description: "Created static designs and integrated them into web pages using the latest philosophies and technologies for Squishymedia, a digital communications studio specializing in knowledge systems and interactive media."
    },
    {
        title: "Front-End Developer & User Experience Designer",
        company: "ThinkNoack",
        dates: "Since 2008",
        description: "Development and design from Portland, Oregon."
    }
];
export default function Experience() {

    return (
        <ul>
            <h2>Experience</h2>
            {experienceData.map((job, index) => (
                <li key={index}>
                    <h3>{job.title}</h3>
                    <h4>{job.company} • <span>{job.dates}</span></h4>
                    <p>{job.description}</p>
                </li>
            ))}
        </ul>
    );
}
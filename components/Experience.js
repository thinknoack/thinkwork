import React from 'react';
const experienceData = [
    {
        title: "Software Developer",
        company: "Stanford University",
        employmentType: "Full-time",
        dates: "Nov 2024 - Present · 1 mo",
        description: "User experience design and software development on the OpenNeuro project within the Center for Reproducible Neuroscience."
    },
    {
        title: "Sr. IT Associate",
        company: "Westat - Improving Lives Through Research",
        employmentType: "Full-time",
        dates: "Nov 2021 - Present · 3 yrs 1 mo",
        description: "Led the design of the Community Engagement Alliance (NIH) public and permissioned websites, redesigned a tracking tool for the IDEA Data Center (ED), and designed the homepage and interactive dashboards for health survey projects."
    },
    {
        title: "User Experience & Design Lead",
        company: "Squishymedia",
        employmentType: "Full-time",
        dates: "Apr 2020 - Nov 2021 · 1 yr 8 mos",
        location: "Portland, Oregon, United States",
        description: "Created user experience that facilitates working with and understanding data, designed layouts to highlight important content, and built front-end architecture that’s easily navigable."
    },
    {
        title: "Senior Front-End Developer and UX Designer",
        company: "Eclipse Media Solutions",
        employmentType: "Full-time",
        dates: "May 2017 - Apr 2020 · 3 yrs",
        location: "Portland, Oregon",
        description: "Developed with Drupal and JavaScript frameworks, managed client relations, project management, and staffing. Responsible for design, UX, and front-end architecture."
    },
    {
        title: "Senior Front-End Developer and User Experience Designer",
        company: "Squishymedia",
        employmentType: "Full-time",
        dates: "Jan 2014 - Mar 2017 · 3 yrs 3 mos",
        location: "Portland, Oregon Area",
        description: "Created static designs and integrated them into web pages using the latest philosophies and technologies for Squishymedia, a digital communications studio specializing in knowledge systems and interactive media."
    },
    {
        title: "Front-End Developer & UX Designer",
        company: "Squishymedia",
        employmentType: "Full-time",
        dates: "Jul 2012 - Jan 2014 · 1 yr 7 mos",
        location: "Portland, Oregon Area",
        description: "Responsible for creating static designs and integrating them into web pages, using current web/graphic design philosophies and technologies."
    },
    {
        title: "Designer and Front-end Developer",
        company: "ThinkNoack - Freelance Web Development and Design",
        employmentType: "Freelance",
        dates: "Mar 2006 - Oct 2012 · 6 yrs 8 mos",
        location: "Portland, Oregon Area",
        description: "Created websites from Portland, Oregon."
    }
];
export default function Experience() {

    return (
        <div>
            <h1>Experience</h1>
            {experienceData.map((job, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <h2>{job.title}</h2>
                    <h3>{job.company} · {job.employmentType}</h3>
                    <p><strong>{job.dates}</strong></p>
                    {job.location && <p><strong>Location:</strong> {job.location}</p>}
                    <p>{job.description}</p>
                </div>
            ))}
        </div>
    );
}
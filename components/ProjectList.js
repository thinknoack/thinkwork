// pages/index.js

const projects = [
    {
        "title": "OpenNeuro",
        "client": "Stanford University",
        "description": "UX and Software Developer for the OpenNeuro project within Stanford's Center for Reproducible Neuroscience. The platform focuses on neuroimaging data sharing, incorporating features for validation and collaboration. In addition to development, I help maintain the platform and build new features to enhance its functionality and user experience.",
        "skills": ["React", "Design/UX/UI", "Development"]
    },
    {
        "title": "Raiven Study",
        "client": "Center for D",
        "description": "Designed and developed a survey platform and user dashboards for participants in the RAIVEN study, a clinical trial comparing the efficacy of a recombinant influenza vaccine (RIV) to the traditional egg-based inactivated influenza vaccine. These tools facilitated data collection and real-time monitoring of flu symptoms and vaccine effectiveness during the study.",
        "skills": [".NET", "Design/UX/UI", "Development"]
    },
    {
        "title": "Community Engagement Alliance (CEAL) Websites",
        "client": "National Institutes of Health (NIH)",
        "description": "Led the design and development of the NIH’s CEAL public and permissioned websites, fostering nationwide collaboration among researchers. I integrated features for streamlined reporting, data uploads, and multi-level access control, all while maintaining a strong focus on user-centered design and accessibility standards.",
        "skills": ["Drupal","Design/UX/UI", "Development"]
    },
    {
        "title": "IDEA Data Center",
        "client": "Department of Education",
        "description": "Redesigned the tracking tool for the IDEA Data Center, streamlining the workflow for TA specialists and evaluators. Developed interactive dashboards and a structured interface to enhance special education initiatives, simplifying reporting and evaluation processes.",
        "skills": ["Drupal", "Design/UX/UI", , "Development"]
    },
    {
        "title": "Synapse Product Development",
        "client": "Synapse",
        "description": "A website developed to amplify Synapse’s brand presence in the digital space. Utilizing Drupal for content management system (CMS) integration, I implemented strategic design and layout updates to enhance user experience and strengthen the overall visual identity. These improvements not only aligned with Synapse's evolving brand but also optimized functionality, ensuring a seamless and engaging digital experience for users.",
        "skills": ["Drupal", "Development"]
    }
];

// components/ProjectList.js
const ProjectList = () => {
    return (
        <div>
            <h2>Recent Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index} style={{ marginBottom: '20px' }}>
                        <h3>{project.title}</h3>
                        <p><strong>Client:</strong> {project.client}</p>
                        <p>{project.description}</p>
                        <p>{project.skills.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
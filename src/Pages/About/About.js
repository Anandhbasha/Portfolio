import React, { useEffect, useState } from 'react';
import './About.css';
import ExperienceCard from '../../Components/ExperienceCard/ExperienceCard';
import SkillBar from '../../Components/SkillBar/SkillBar';



const About = () => {
    const jobs = [
        {
          title: 'Freelance Trainer & Educator',
          duration: 'Mar 2024 - Present · 8 mos',
          location: 'Coimbatore, Tamil Nadu, India · On-site',
          responsibilities: [
            'Delivered classes on Data Structures in Python to 1st-year students at United Institute of Technology, focusing on fundamental concepts and practical applications.',
            'Conducted training sessions for new employees at Rythmos Company, providing a strong foundation in programming and industry practices.',
            'Taught a One Credit Course for 3rd-year students at Kongu Engineering College, covering advanced concepts in software development.',
            'Provided training sessions in MERN, Python Full Stack, and PHP Full Stack development at various educational institutions, helping students and professionals build a strong foundation in full-stack development.'
          ]
        },
        {
          title: 'Web Developer & UX/UI Designer',
          duration: 'Nov 2023 - Present · 1 yr',
          location: 'Coimbatore, Tamil Nadu, India',
          responsibilities: [
            'Developed and maintained web applications using PHP, jQuery, and JavaScript.',
            'Designed user interfaces using Figma, focusing on responsive design and user experience.',
            'Collaborated with cross-functional teams to deliver high-quality web solutions.',
            'Optimized web applications for performance and user accessibility.'
          ]
        },
        {
          title: 'Owner',
          duration: 'Apr 2018 - Present · 6 yrs 7 mos',
          location: 'Sankari, Tamil Nadu, India',
          responsibilities: [
            'Managed day-to-day operations of Anandh Foods, ensuring quality and consistency in product delivery.',
            'Oversaw a team of staff, providing training and support for maintaining high standards in service.',
            'Developed marketing strategies to increase customer engagement and retention.',
            'Implemented cost-saving measures while maintaining the quality of service and products.'
          ]
        },
        {
          title: 'Full-stack Developer & UX/UI Designer',
          duration: 'Sep 2022 - Oct 2023 · 1 yr 2 mos',
          location: 'Chennai, Tamil Nadu, India · On-site',
          responsibilities: [
            'Developed full-stack applications using HTML, CSS, Bootstrap, JavaScript, jQuery, and PHP.',
            'Created UI/UX designs using Figma and Adobe Photoshop, ensuring alignment with client requirements.',
            'Collaborated with clients to translate their needs into technical solutions and design improvements.',
            'Optimized web performance and implemented responsive designs for various screen sizes.'
          ]
        },
        {
          title: 'Intern - Full Stack Developer',
          duration: 'Dec 2021 - Jun 2022 · 7 mos',
          location: 'Coimbatore, Tamil Nadu, India · Remote',
          responsibilities: [
            'Developed web applications as part of a development team, focusing on backend and frontend development.',
            'Learned industry best practices and applied them in real-world projects under senior developers’ guidance.',
            'Built interactive UI components using JavaScript and React, enhancing user engagement.',
            'Assisted in debugging and optimizing code for performance improvements.'
          ]
        },
        {
          title: 'Lead Generation',
          duration: 'Oct 2017 - Apr 2018 · 7 mos',
          location: 'Thoughtbees · Full-time',
          responsibilities: [
            'Identified potential business opportunities and generated leads through market research.',
            'Maintained a database of contacts and developed strategies to convert leads into sales.',
            'Collaborated with the sales team to refine lead generation strategies and improve conversion rates.',
            'Analyzed market trends and competitor strategies to identify new business opportunities.'
          ]
        },
        {
          title: 'Lead Generation Executive',
          duration: 'Feb 2016 - Sep 2017 · 1 yr 8 mos',
          location: 'Coimbatore Area, India',
          responsibilities: [
            'Executed lead generation campaigns, focusing on generating high-quality leads for the sales team.',
            'Managed CRM software to track and organize leads, ensuring timely follow-up and data accuracy.',
            'Developed email marketing campaigns to nurture leads and convert them into customers.',
            'Worked closely with the marketing team to align campaigns with business goals.'
          ]
        }
    ];

    const skills = [
        { name: 'React.js', percentage: 85 },
        { name: 'JavaScript', percentage: 90 },
        { name: 'PHP', percentage: 80 },
        { name: 'Firebase', percentage: 75 },
        { name: 'Figma', percentage: 70 },
        { name: 'CSS', percentage: 80 },
        { name: 'SQL', percentage: 65 },
        { name: 'PySpark', percentage: 70 },
        { name: 'Python', percentage: 80 },
        { name: 'Node.js', percentage: 75 },
        { name: 'MySQL', percentage: 75 },
        { name: 'Adobe XD', percentage: 70 },
        { name: 'Jupyter Notebook', percentage: 65 },
        { name: 'Anaconda', percentage: 60 },
        { name: 'Apache Spark', percentage: 70 },
        { name: 'Amazon EC2', percentage: 65 },
        { name: 'Data Structures & Design', percentage: 80 },
        { name: 'Express.js', percentage: 70 },
        { name: 'jQuery', percentage: 80 },
        { name: 'AJAX', percentage: 75 },
        { name: 'HTML', percentage: 85 },
        { name: 'Prototyping', percentage: 75 },
        { name: 'Zeplin', percentage: 65 },
        { name: 'InVision', percentage: 60 },
        { name: 'Bootstrap', percentage: 80 },
    ];
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        const aboutContainer = document.querySelector('.about-content');
        const { top } = aboutContainer.getBoundingClientRect();

        if (top < window.innerHeight) {
            setVisible(true);
            window.removeEventListener('scroll', handleScroll); 
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="about-container">
            <h1 className='Heading'>About Me</h1>
            <div className={`about-content fade-in ${visible ? 'visible' : ''}`}>
                <div className="experience-container">
                    <h2>Experience</h2>
                    <div className="cards-container">
                        {jobs.map((job, index) => (
                            <ExperienceCard key={index} job={job} />
                        ))}
                    </div>
                </div>
                <div className="skills-container">
                    <h2>Skills</h2>
                    {skills.map((skill, index) => (
                        <SkillBar key={index} skill={skill.name} percentage={skill.percentage} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
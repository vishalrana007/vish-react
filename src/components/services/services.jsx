import React from 'react';
import './services.css';
import theme from '../../assets/theme-pattern.svg';

const Services_Data =[
    {
        s_no:"01",
        s_name:"Web Design",
        s_desc:"Web design is the process of creating visually appealing and user-friendly websites that effectively communicate information and provide a positive user experience."
    },
    {
        s_no:"02",
        s_name:"Web Development",
        s_desc:"A web developer builds and maintains websites, applications, and online platforms using programming languages and frameworks."
    },
    {
        s_no:"03",
        s_name:"App Desgining",
        s_desc:" I craft visually stunning and user-friendly interfaces for mobile and web applications, delivering engaging user experiences that meet your business goals."
    },
    {
        s_no:"04",
        s_name:"Graphic Desgining",
        s_desc:"I create visually appealing and effective visual communications, combining art and technology to design logos, graphics, and materials that capture attention and convey messages."
    },
    {
        s_no:"05",
        s_name:"Content Writing",
        s_desc:"I craft engaging, informative, and optimized content that resonates with target audiences, conveying brand voices and messaging through compelling stories, articles, blog posts, and more."
    },
    {
        s_no:"06",
        s_name:"Editing",
        s_desc:" I creatively assemble and refine visual and audio elements, using technical skills and artistic vision, to craft a cohesive and engaging narrative that tells a story, conveys a message, or evokes an emotional response."
    },
]
export const Services = () => {
    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme} alt='theme' />
            </div>
            <div className="services-container">
                {Services_Data.map((service, index) => {
                    return <div key={index} className='services-format'>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                    </div>
                        ;
                })}
            </div>
        </div>
    );
};

export default Services;
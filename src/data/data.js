import ngc_img from '../images/ngc.jpg';  
import rag_img from '../images/rag.png';
import opra_img from '../images/opra.jpg';
import dashboard_img from '../images/interactive_dashboard.png';
import esociety_img from '../images/esociety.png';

const data ={


    "Home": {
        "name": "Mukhil Venkataramanan",
        "description": "CS Grad @ SUNY Binghamton | Ex-SDE @ Ford Motor Company",
    },

    // | Computer Science Graduate Student | Open to 2025 Internship/Co-op/Full-time Opportunities


    "About": {
        "title": "About me",

        "description_1": "A Computer Science Graduate Student and Teaching/Research Assistant at State University of New York(SUNY) " +
        "at Binghamton. As a Research Assistant, I'm working on a Machine Learning project, specifically in the domain of Information" +
        "Retrieval(IR) using the Retrieval Augmented Generation(RAG) Framework. I have also worked on enhancing the Online Preference " +
        "Reporting and Aggregation(OPRA) website aiding the data collection part related to the research field of Computational Social " +
        "Choice and Group Decision Making.", 
 
        "description_2": "Being an Ex-Software Engineer, I have worked and developed impactful features on the 'Build & Price' module of Ford cars at " +
        "Ford Motor Company across six different markets.  I was awarded twice for my professional excellence and commitment.",

        "description_3":"Currently, I'm actively looking for 2025 internship/Co-op/Full-time opportunities. I will be grateful and appreciate your help " +
         "in any form of networking or a referral which will ease my job search. \n"
    },


    "Experience": {
        "title": "Experience",
        "jobs": [
            {
                "title": "Teaching and Research Assistant",
                "company": "SUNY Binghamton",
                "date": "Aug 2024 - Present",
                "description": ["Enhanced the 'Online Preference Reporting and Aggregation' (OPRA) Django application to host polls and allocation problems related to the research field of Group Decision Making and Computational Social Choice. " ,
                    "Upgraded and maintained on-premise dev & prod servers and documented the user-guide with VitePress. " ,
                    "Spearheading an RAG project to automate Wikipedia hyperlink detection retrieval of relevant articles. " ,
                    "Mentored over 50 students in Machine Learning concepts and projects."]
            },
            {
                "title": "Software Engineer",
                "company": "Ford Motor Company",
                "date": "April 2023 - Aug 2023",
                "description": ["Led cross-functional discussions with Solution Architects, Infrastructure, and Integration teams to implement user stories. " ,
                    "Streamlined production troubleshooting. Designed and migrated maps APIs used by Ford websites. " ,  
                    "Mentored interns, facilitating onboarding processes and environment setup."]
            },
            {
                "title": "Junior Software Engineer",
                "company": "Ford Motor Company",
                "date": "Sep 2021 - April 2023",
                "description": [" Worked on the enhancing an e-commerce platform enabling vehicle reservations for 6+ global markets. ", 
                "Delivered a high-impact feature reducing reservation steps by 30%, earning team recognition.  ",
                "Configured EV reservation journeys for the New Zealand market. Contributed as L2 support for the Team. ." ]
            }
        ]
    },

    "Education": {
        "title": "Education",
        "schools": [
            {
                "degree": "Master of Science in Computer Science",
                "school": "SUNY Binghamton",
                "date": "Aug 2023 - May 2025",
                "description": [
                    "As a Research Assistant in the AI and ML domain, I'm working on a project using RAG framework.",
                    "Spearheaded the project OPRA which aids the research field of Computational Social Choice.",
                    "Excelled in the courses like Machine Learning, Artificial Intelligence, and Design and Analysis of Algorithms."
                ]
            },
            {
                "degree": "Bachelor of Engineering in Computer Science and Engineering",
                "school": "Anna University",
                "date": "2017 - 2021",
                "description": [
                    "Developed and implemented 'E-Society,' a Financial and Event Management System designed for a closed community as my final year project ",
                    "Received the Best Student Award for outstanding academic performance, leadership, and contributions to collaborative projects.",
                    "Gained research and practical exposure in the fields of Data Science, by being a member of the Big Data Center of Excellence."
                ]
            }
        ]
    },

    "Skills": {
        "title": "Technical Skills",
        "skillset": [
            {
                "category": "Programming Languages",
                "skills": [
                    {
                        "name": "Python",
                        "level": "90%"
                    },
                    {
                        "name": "Java",
                        "level": "80%"
                    },
                    {
                        "name": "JavaScript",
                        "level": "85%"
                    },
                    {
                        "name": "SQL",
                        "level": "80%"
                    },
                    {
                        "name": "C++",
                        "level": "80%"
                    },
                    {
                        "name": "C",
                        "level": "70%"
                    }
                ]
            },
            {
                "category": "Frame Works and Tools",
                "skills": [
                    {
                        "name": "React",
                        "level": "90%"
                    },
                    {
                        "name": "Redux",
                        "level": "80%"
                    },
                    {
                        "name": "Django",
                        "level": "85%"
                    },
                    {
                        "name": "Spring Boot",
                        "level": "80%"
                    },
                    {
                        "name": "Git",
                        "level": "80%"
                    },
                    {
                        "name": "Docker",
                        "level": "70%"
                    }
                ]
            }, {
                "category": "Specialized Tools",
                "skills": [
                    {
                        "name": "AEM",
                        "level": "90%"
                    },
                    {
                        "name": "Akamai",
                        "level": "80%"
                    },
                    {
                        "name": "Dynatrace",
                        "level": "85%"
                    },
                    {
                        "name": "Splunk",
                        "level": "80%"
                    },
                    {
                        "name": "Jira",
                        "level": "80%"
                    },
                    {
                        "name": "SonarQube",
                        "level": "70%"
                    }
                ]
            }, 
            {
                "category": "Data Science",
                "skills": [
                    {
                        "name": "Data Collection and Analysis",
                        "level": "90%"
                    },
                    {
                        "name": "Deep Neural Networks (Pytorch)",
                        "level": "80%"
                    },
                    {
                        "name": "CNN",
                        "level": "85%"
                    },
                    {
                        "name": "Transformers",
                        "level": "80%"
                    },
                    {
                        "name": "Prompt Engineering",
                        "level": "80%"
                    }
                ]
            }
        ]
    },


    "Projects": {
        "title": "Projects",
        "projects": [
            {
                "title": "Next Gen Configurator",
                "description": "As a Software Engineer at Ford Motor Company, I worked on 'Next Gen-Configurator' "+
                "application in 'IMG e-Commerce Reservation' Team. The application allows the end user to configure "+
                "the ford vehicle of their choice and reserve the same without the need to directly go to showroom "+
                "in-person. Our team were developing and maintaining the application for six of such countries under "+
                "International Market Groups.  Website: Ford Build and Price",
                "img": ngc_img,
                "url": "http://ford.com.au/buy/build-and-price.html#/model"
            },
            {
                "title": "Retrieve relevant articles using RAG",
                "description": "The project is about identifying/predicting a span of text in a given paragraph "+
                "which potentially needs further explanation for the general audience. This identified span of text  "+
                "is then should be linked to the correct Wikipedia article which explains more about the word.  "+
                "The project is carried out by following the RAG framework and it is still under progress.  "+
                "Currently, different models and methods are currently being evaluated to increase the performance.",
                "img": rag_img,
                "url": "https://huggingface.co/docs/transformers/en/model_doc/rag"
            },
            {
                "title": "OPRA",
                "description": "Online Preference Reporting and Aggregation (OPRA), is an open source online system and "+
                "a Django based web application that aims at providing support for Group Decision-Making in the field of  "+
                "Computational Social Science by hosting polls and allocation problem instances. OPRA was initially  "+
                "developed by students of RPI university,  I'm currently working on expanding and modifying it's features  "+
                "according to our specific needs and maintaining it in two different environments.  Here is the GitHub  "+
                "link for the Project.",
                "img": opra_img,
                "url": "https://github.com/MukhilV/opra"
            },
            {
                "title": "Interactive Dashboard",
                "description": "The interactive data analysis dashboard is built using Flask (a python framework) from "+ 
                "the continuously collected data from Reddit and 4chan social platforms around the time of 2024 US  "+
                "Presidential Election. The project analyze the  various features like frequency of posting, user  "+
                "engagement via upvotes/likes and replies and  analyzes the sentiment/toxicity of the collected  "+
                "posts using Moderate Hate speech API and Pre-trained models like Sentence- BERT. ",
                "img": dashboard_img,
                "url": "https://github.com/MukhilV/Data_science_social_media_pipeline"
            },
            {
                "title": "E-Society",
                "description": "E-Society, a Financial and Event Management System for closed group of people. "+
                "Here, the private workers (For instance, servants in an apartment building) of an association "+
                "are paid by collecting funds from the members of the association. Separate events will be "+ 
                "created to raise funds. Designated admins can take care of fund transfers once the funds are "+ 
                "raised. Tracking payments, modifications to events, data manipulation and report generation  "+
                "are made easier and the system provides security as well.",
                "img": esociety_img,
                "url": "https://github.com/MukhilV/esociety_java"
            }
            
        ]
    },
    "Contact": {
        "title": "Contact",
        "email": "mukhil99@gmail.com",
        "linkedin": "https://www.linkedin.com/in/mukhil-v-523995175/",
        "github": "https://github.com/MukhilV"
        },

    "Footer": {
        "email": "mukhil99@gmail.com"  ,
        "URLs": {
            "linkedin": "https://www.linkedin.com/in/mukhil-v-523995175/",
            "github": "https://github.com/MukhilV"
        },       
    }
}

export default data;
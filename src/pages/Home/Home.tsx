import React, { useEffect } from 'react'
import HomeHeader from '../../Components/HomeHeader/HomeHeader'
import { useSetBodyColor } from '../../hooks/useSetBodyColor'
import "./Home.css"
import { FaAngular, FaBootstrap, FaCss3, FaCss3Alt, FaDocker, FaEye, FaGithub, FaHtml5, FaLaravel, FaLinkedin, FaNode, FaNodeJs, FaPhp, FaPython, FaReact, FaSass } from 'react-icons/fa'
import { SiMongodb, SiMysql, SiNestjs, SiPostgresql, SiPostman, SiSwagger } from 'react-icons/si'
import ProjectsItems from '../../Components/Projects/ProjectsItems'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const { setBodyColor } = useSetBodyColor()
  const navigate = useNavigate();

  useEffect(() => {
    setBodyColor('#ECEFF1')
    // setBodyColor('#CFD8DC')
    // setBodyColor('#90A4AE')
    // setBodyColor('#546E7A')
    // setBodyColor('#EEE')
  })

  return (
    <>
      <div className="container-main col-sm-12">
        <HomeHeader></HomeHeader>
        <div className="container mt-3">

          <div className="row justify-content-center">

            <div className="col-sm-10">

              <div className='card-content mt-3'>
                <h1>About me</h1>
                <div className="row">
                  <span className='mt-2'>With over 5 years of experience in software
                    development, I am highly motivated and passionate about building innovative solutions.
                    As an experienced full-stack developer, I possess proficiency in Node.js, Express, NestJs,
                    and Laravel. My expertise extends to REST API development, Docker-based microservices,
                    and GCP deployment, including Cloud Run, Cloud Functions and Cloud Pub/Sub. I am also
                    skilled in implementing CI/CD automation using Cloud Build. Additionally, I have frontend
                    expertise in Laravel, Angular, React, and Bootstrap, enabling me to deliver seamless user
                    experiences.
                  </span>
                  <div className='see-more'><span onClick={() => navigate('/about')}>See More</span> </div>
                </div>

              </div>

              <div className='card-content mt-3'>
                <h1>Main Projects</h1>
                <ProjectsItems
                  title="REST API Node.js"
                  urlBack="https://api-nest-clean-arch.onrender.com"
                  repoBack='https://github.com/fabio-coutinho-dos-santos/api-nest-cleanarch'
                  urlFront=''
                  repoFront=''
                  icon={<SiNestjs />}
                  icon2={<SiMongodb />}
                  icon3=''
                >
                  API developed using NestJs that has extensive coverage of unit and integration tests. It utilizes MongoDB for data storage and also includes functionality for building and sending emails and messages via RabbitMQ.
                </ProjectsItems>

                <hr className='mt-4' />

                <ProjectsItems
                  title="Bank Simulator"
                  urlFront="https://front-4cadia-j7u3.vercel.app/"
                  urlBack="https://68.183.96.109/api/doc"
                  repoFront='https://github.com/fabio-coutinho-dos-santos/front-4cadia'
                  repoBack='https://github.com/fabio-coutinho-dos-santos/api-4cadia'
                  icon={<FaAngular />}
                  icon2={<FaNodeJs />}
                  icon3={<SiMongodb />}
                >
                  An application that simulates a short banking system, featuring user registration, login, and a dashboard page that allows users to view their transaction history and account balance. The application is developed using Angular, Node.js, and MongoDB.
                </ProjectsItems>

                <hr className='mt-4' />

                <ProjectsItems
                  title="Esthetic Clinic Manager"
                  urlFront="https://iza-front.vercel.app/"
                  urlBack=""
                  repoFront='https://github.com/fabio-coutinho-dos-santos/iza-front'
                  repoBack='https://github.com/fabio-coutinho-dos-santos/api-bella'
                  icon={<FaAngular />}
                  icon2={<FaNodeJs />}
                  icon3={<SiMongodb />}
                >
                  An application designed to manage clients and operations of an esthetic clinic. The technologies used were Angular, Node.js, and MongoDB.
                </ProjectsItems>

                <hr className='mt-4' />

                <ProjectsItems
                  title="Esthetic Clinic - Anamnesis Form"
                  urlFront="https://iza-form-fabio-coutinho-dos-santos.vercel.app/"
                  urlBack=""
                  repoFront='https://github.com/fabio-coutinho-dos-santos/iza-form'
                  repoBack='https://github.com/fabio-coutinho-dos-santos/api-bella'
                  icon={<FaAngular />}
                  icon2={<FaNodeJs />}
                  icon3={<SiMongodb />}
                >
                  Page for the client of the esthetic clinic to fill out an anamnesis form. After completion, the form becomes available in the management application. Built using Angular.
                </ProjectsItems>

                <hr className='mt-4' />

                <ProjectsItems
                  title="Esthetic Clinic - Anamnesis Form V2"
                  urlFront="https://form-front-anamesis.vercel.app/?company=3ca4af53-d327-4b8f-9de3-dcf4d08fbaf9"
                  urlBack=""
                  repoFront='https://github.com/fabio-coutinho-dos-santos/form-front-anamesis'
                  repoBack='https://github.com/fabio-coutinho-dos-santos/form-api-v1'
                  icon={<FaReact />}
                  icon2={<SiNestjs />}
                  icon3={<SiPostgresql />}
                >
                  Page for the completion of anamnesis forms by clients, restructured to be multi-company with a new interface and functionalities. Built using NestJS and React.
                </ProjectsItems>

                <div className='see-more'><span onClick={() => navigate('/projects')}>See More</span> </div>

              </div>
            </div>

            <div className="col-sm-2">
              <div className='skills-content'>
                <h1 className='d-sm-none'>Main Skills</h1>
                <div className="row d-flex" id='main-skills'>
                  <div id='icons'>
                    <div className="col-sm-12">
                      <FaNodeJs className='skill' ></FaNodeJs>
                      <SiNestjs className='skill'></SiNestjs>
                      <FaPhp className='skill' ></FaPhp>
                      <FaLaravel className='skill'></FaLaravel>
                      <FaPython className='skill'></FaPython>
                      <FaHtml5 className='skill'></FaHtml5>
                      <FaCss3Alt className='skill'></FaCss3Alt>
                      <FaAngular className='skill'></FaAngular>
                      <FaBootstrap className='skill'></FaBootstrap>
                      <FaSass className='skill'></FaSass>
                      <FaReact className='skill'></FaReact>
                      <FaDocker className='skill'></FaDocker>
                      <SiMongodb className='skill'></SiMongodb>
                      <SiMysql className='skill'></SiMysql>
                      <SiPostgresql className='skill'></SiPostgresql>
                      {/* <SiSwagger className='skill'></SiSwagger>
                      <SiPostman className='skill'></SiPostman> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
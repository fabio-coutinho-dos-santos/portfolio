import React, { useEffect } from 'react'
import HomeHeader from '../../Components/HomeHeader/HomeHeader'
import { useSetBodyColor } from '../../hooks/useSetBodyColor'
import "./HomeNew.sass"
import { FaAngular, FaBootstrap, FaCss3Alt, FaDocker, FaEye, FaGithub, FaHtml5, FaLaravel, FaLinkedin, FaNode, FaNodeJs, FaPhp, FaPython, FaReact, FaSass } from 'react-icons/fa'
import { SiAndroid, SiArduino, SiC, SiCplusplus, SiDigitalocean, SiIonic, SiJira, SiMongodb, SiMqtt, SiMysql, SiNestjs, SiNginx, SiOpentelemetry, SiPostgresql, SiPostman, SiRabbitmq, SiRaspberrypi, SiReact, SiSwagger, SiTensorflow } from 'react-icons/si'
import ProjectsItems from '../../Components/Projects/ProjectsItems'
import { useNavigate } from 'react-router-dom'
import WorkExperiences from '../../Components/WorkExperiences/WorkExperiences'

const HomeNew = () => {

  const { setBodyColor } = useSetBodyColor()
  const navigate = useNavigate();

  useEffect(() => {
    setBodyColor('#ECEFF1')
    // setBodyColor('#000')
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

            {/* <div className="col-sm-1 d-none d-sm-block">
              <div className='skills-content-side'>
                <div className="row d-flex" id='main-skills'>
                  <div id='icons'>
                    <div className="col-sm-12">
                      <FaPython className='skill'></FaPython>
                      <FaHtml5 className='skill'></FaHtml5>
                      <FaCss3Alt className='skill'></FaCss3Alt>
                      <FaAngular className='skill'></FaAngular>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}


            <div className="row justify-content-center">
              <div className="col-sm-12">
                <div className="row d-none d-sm-block" id='row-main-skills'>
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
                          <SiOpentelemetry className='skill'></SiOpentelemetry>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-sm-12">
              <div className='mt-5'>
                <div className="row card-content">
                  <h1>About me</h1>
                  <div id="trace"></div>
                  <span className='mt-3'>With over 5 years of experience in software
                    development, I am highly motivated and passionate about building innovative solutions.
                    As an experienced full-stack developer, I possess proficiency in Node.js, Express, NestJs,
                    and Laravel. My expertise extends to REST API development, Docker-based microservices,
                    and GCP deployment, including Cloud Run, Cloud Functions and Cloud Pub/Sub. I am also
                    skilled in implementing CI/CD automation using Cloud Build. Additionally, I have frontend
                    expertise in Laravel, Angular, React, and Bootstrap, enabling me to deliver seamless user
                    experiences.
                  </span>
                  <div className='see-more'><span onClick={() => navigate('/about')}>About</span> </div>
                </div>
              </div>
            </div>
            {/* 
            <div className="col-sm-1 d-none d-sm-block">
              <div className='skills-content-side'>
                <div className="row d-flex" id='main-skills'>
                  <div id='icons'>
                    <div className="col-sm-12">
                      <FaNodeJs className='skill' ></FaNodeJs>
                      <SiNestjs className='skill'></SiNestjs>
                      <FaPhp className='skill' ></FaPhp>
                      <FaLaravel className='skill'></FaLaravel>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

          </div>

          

          <div className="row justify-content-center">
            <div className="col-sm-12">
              <div className="row d-none d-sm-block" id='row-main-skills'>
                <div className='skills-content'>
                  <h1 className='d-sm-none'>Main Skills</h1>
                  <div className="row d-flex" id='main-skills'>
                    <div id='icons'>
                      <div className="col-sm-12">
                        <FaDocker className='skill'></FaDocker>
                        <SiMongodb className='skill'></SiMongodb>
                        <SiMysql className='skill'></SiMysql>
                        <SiPostgresql className='skill'></SiPostgresql>
                        <SiSwagger className='skill'></SiSwagger>
                        <SiIonic className='skill'></SiIonic>
                        <SiC className='skill'></SiC>
                        <SiAndroid className='skill'></SiAndroid>
                        <SiDigitalocean className='skill'></SiDigitalocean>
                        <SiCplusplus className='skill'></SiCplusplus>
                        <SiRaspberrypi className='skill'></SiRaspberrypi>
                        <SiRabbitmq className='skill'></SiRabbitmq>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-sm-none">
            <div className="col-sm-12">
              <div className='skills-content'>
                <h1 className='d-sm-none'>Skills</h1>
                <div id="trace"></div>
                <div className="row d-flex" id='main-skills'>
                  <div id='icons'>
                    <div className="col-sm-12">
                      <FaNodeJs className='skill' ></FaNodeJs>
                      <SiNestjs className='skill'></SiNestjs>
                      <FaPhp className='skill' ></FaPhp>
                      <FaLaravel className='skill'></FaLaravel>
                      <FaBootstrap className='skill'></FaBootstrap>
                      <FaSass className='skill'></FaSass>
                      <FaReact className='skill'></FaReact>
                      <FaDocker className='skill'></FaDocker>
                      <SiMongodb className='skill'></SiMongodb>
                      <SiMysql className='skill'></SiMysql>
                      <SiPostgresql className='skill'></SiPostgresql>
                      <SiSwagger className='skill'></SiSwagger>
                      <SiC className='skill'></SiC>
                      <FaPython className='skill'></FaPython>
                      <FaHtml5 className='skill'></FaHtml5>
                      <FaCss3Alt className='skill'></FaCss3Alt>
                      <FaAngular className='skill'></FaAngular>
                      <SiIonic className='skill'></SiIonic>
                      <SiAndroid className='skill'></SiAndroid>
                      <SiNginx className='skill'></SiNginx>
                      <SiDigitalocean className='skill'></SiDigitalocean>
                      <SiCplusplus className='skill'></SiCplusplus>
                      <SiRaspberrypi className='skill'></SiRaspberrypi>
                      <SiRabbitmq className='skill'></SiRabbitmq>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-sm-12">
              <div className="row card-content">
                <h1>Work Experience</h1>
                <div id="trace"></div>
                <WorkExperiences
                  company='Mensis'
                  title='Fullstack developer (2020 / Current)'
                  icons={[
                    ' '
                    , <FaLaravel />
                    , ' '
                    , <SiNestjs />
                    , ' '
                    , <FaBootstrap />
                    , ' '
                    , <SiIonic />
                    , ' '
                    , <FaPython />
                    , ' '
                    , <FaDocker />
                    , ' '
                    , <FaAngular />
                    , ' '
                    , <SiMongodb />
                    , ' '
                    , <SiMysql />
                    , ' '
                    , <SiC></SiC>
                  ]}
                >
                </WorkExperiences>
                <div className='mt-4'><hr /></div>

                <WorkExperiences
                  company='4Cadia'
                  title='Fullstack developer (2022-03 / 2022-06)'
                  icons={[
                    ' '
                    , <SiNestjs />
                    , ' '
                    , <FaBootstrap />
                    , ' '
                    , <FaAngular />
                    , ' '
                    , <SiMongodb />
                  ]}
                >
                </WorkExperiences>
                <div className='mt-4'><hr /></div>
                <WorkExperiences
                  company='Capes - PUC Minas'
                  title='Resarcher (2019 / 2022)'
                  icons={[
                    ' '
                    , <FaNode />
                    , ' '
                    , <FaBootstrap />
                    , ' '
                    , <FaAngular />
                    , ' '
                    , <SiMongodb />
                    , ' '
                    , <FaPython />
                    , ' '
                    , <SiTensorflow />
                    , ' '
                    , <SiReact />
                    , ' '
                    , <SiAndroid />
                  ]}
                >
                </WorkExperiences>
                <div className='see-more'><span onClick={() => navigate('/about')}>About</span> </div>
              </div>
            </div>
          </div>

          <div className="row-justify-content-center mt-5">
            <div className="col-sm-12">
              <div className='row card-content mt-3'>
                <h1>Own Projects</h1>
                <div id="trace" className='mb-3'></div>

                <ProjectsItems
                  title="Portfolio"
                  urlBack=""
                  repoBack=''
                  urlFront=''
                  repoFront=''
                  icon={<SiNestjs />}
                  icon2={<SiMongodb />}
                  icon3={<FaReact />}
                >
                  This portfolio has been developed using React with TypeScript, CSS, Sass, and Bootstrap.
                  It includes an authentication REST microservice developed in Node.js using NestJS, with a MongoDb database and deployed as Cloud Run service.
                </ProjectsItems>

                <hr className='mt-4' />

                <ProjectsItems
                  title="REST API Node.js"
                  urlBack=""
                  repoBack=''
                  urlFront=''
                  repoFront=''
                  icon={<SiNestjs />}
                  icon2={<SiMongodb />}
                  icon3={<SiSwagger />}
                >
                  API developed using NestJs that has extensive coverage of unit and integration tests. It utilizes MongoDB for data storage and also includes functionality for building and sending emails and messages via RabbitMQ.
                </ProjectsItems>

                <hr className='mt-4' />

                <ProjectsItems
                  title="Bank Simulator"
                  urlFront=""
                  urlBack=""
                  repoFront=''
                  repoBack=''
                  icon={<FaAngular />}
                  icon2={<FaNodeJs />}
                  icon3={<SiMongodb />}
                >
                  An application that simulates a short banking system, featuring user registration, login, and a dashboard page that allows users to view their transaction history and account balance. The application is developed using Angular, Node.js, and MongoDB.
                </ProjectsItems>

                <hr className='mt-4' />

                <ProjectsItems
                  title="Esthetic Clinic Manager"
                  urlFront=""
                  urlBack=""
                  repoFront=''
                  repoBack=''
                  icon={<FaAngular />}
                  icon2={<FaNodeJs />}
                  icon3={<SiMongodb />}
                >
                  An application designed to manage clients and operations of an esthetic clinic. The technologies used were Angular, Node.js, and MongoDB.
                </ProjectsItems>

                <hr className='mt-4' />

                <ProjectsItems
                  title="Esthetic Clinic - Anamnesis Form"
                  urlFront=""
                  urlBack=""
                  repoFront=''
                  repoBack=''
                  icon={<FaAngular />}
                  icon2={<FaNodeJs />}
                  icon3={<SiMongodb />}
                >
                  Page for the client of the esthetic clinic to fill out an anamnesis form. After completion, the form becomes available in the management application. Built using Angular.
                </ProjectsItems>

                <hr className='mt-4' />

                <ProjectsItems
                  title="Esthetic Clinic - Anamnesis Form V2"
                  urlFront=""
                  urlBack=""
                  repoFront=''
                  repoBack=''
                  icon={<FaReact />}
                  icon2={<SiNestjs />}
                  icon3={<SiMongodb />}
                >
                  Page for the completion of anamnesis forms by clients, restructured to be multi-company with a new interface and functionalities. Built using NestJS and React.
                </ProjectsItems>

                <div className='see-more'><span onClick={() => navigate('/projects')}>Projects</span> </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default HomeNew
import React, { useEffect } from 'react'
import HomeHeader from '../../Components/HomeHeader/HomeHeader'
import { useSetBodyColor } from '../../hooks/useSetBodyColor'
import "./Home.css"
import { FaAngular, FaCss3, FaCss3Alt, FaDocker, FaGithub, FaHtml5, FaLaravel, FaLinkedin, FaNode, FaNodeJs, FaPhp, FaPython, FaReact, FaSass } from 'react-icons/fa'
import { SiMongodb, SiMysql, SiNestjs, SiPostgresql, SiPostman, SiSwagger } from 'react-icons/si'

const Home = () => {

  const { setBodyColor } = useSetBodyColor()

  useEffect(() => {
    setBodyColor('#CFD8DC')
  })

  return (
    <>
      <div className="container-main col-sm-12">
        <HomeHeader></HomeHeader>
        <div className="container mt-3">

          <div className="row justify-content-center">

            <div className="col-sm-9">
              <div className='card-content mt-3'>
                <h3>About me</h3>
                <span className='mt-2'>With over 5 years of experience in software
                  development, I am highly motivated and passionate about building innovative solutions.
                  As an experienced full-stack developer, I possess proficiency in Node.js, Express, NestJs,
                  and Laravel. My expertise extends to REST API development, Docker-based microservices,
                  and GCP deployment, including Cloud Run, Cloud Functions and Cloud Pub/Sub. I am also
                  skilled in implementing CI/CD automation using Cloud Build. Additionally, I have frontend
                  expertise in Laravel, Angular, React, and Bootstrap, enabling me to deliver seamless user
                  experiences.
                </span>
              </div>
              <div className='card-content mt-3'>
                <h3>Projects</h3>
                <span className='mt-2'>With over 5 years of experience in software
                  development, I am highly motivated and passionate about building innovative solutions.
                  As an experienced full-stack developer, I possess proficiency in Node.js, Express, NestJs,
                  and Laravel. My expertise extends to REST API development, Docker-based microservices,
                  and GCP deployment, including Cloud Run, Cloud Functions and Cloud Pub/Sub. I am also
                  skilled in implementing CI/CD automation using Cloud Build. Additionally, I have frontend
                  expertise in Laravel, Angular, React, and Bootstrap, enabling me to deliver seamless user
                  experiences.
                </span>
              </div>
            </div>
            <div className="col-sm-3">
              <div className='card-content mt-3'>
                <h3>Main Skills</h3>
                <div className="row d-flex mt-3" id='main-skills'>
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
                      <FaSass className='skill'></FaSass>
                      <FaReact className='skill'></FaReact>
                      <FaDocker className='skill'></FaDocker>
                      <SiMongodb className='skill'></SiMongodb>
                      <SiMysql className='skill'></SiMysql>
                      <SiPostgresql className='skill'></SiPostgresql>
                      <SiSwagger className='skill'></SiSwagger>
                      <SiPostman className='skill d-sm-none'></SiPostman>
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
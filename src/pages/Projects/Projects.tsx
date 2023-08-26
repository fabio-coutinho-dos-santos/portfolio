import React from 'react'
import ProjectsItems from '../../Components/Projects/ProjectsItems'
import { FaAngular, FaBootstrap, FaCss3Alt, FaDocker, FaEye, FaHtml5, FaLaravel, FaNode, FaNodeJs, FaPhp, FaPython, FaReact, FaSass } from 'react-icons/fa'
import { SiAndroid, SiC, SiIonic, SiMongodb, SiMqtt, SiMysql, SiNestjs, SiPostgresql, SiPostman, SiReact, SiSwagger, SiTensorflow } from 'react-icons/si'


const Projects = () => {

    return (
        <>
            <div className="container">
                <div className="row-justify-content-center">
                    <div className="col-sm-12">
                        <div className='card-content mt-3'>
                            <h1>Own Projects</h1>
                            <ProjectsItems
                                title="REST API Node.js"
                                urlBack="https://api-nest-clean-arch.onrender.com"
                                repoBack='https://github.com/fabio-coutinho-dos-santos/api-nest-cleanarch'
                                urlFront=''
                                repoFront=''
                                icon={<SiNestjs />}
                                icon2={<SiMongodb />}
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
                            >
                                Page for the completion of anamnesis forms by clients, restructured to be multi-company with a new interface and functionalities. Built using NestJS and React.
                            </ProjectsItems>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Projects
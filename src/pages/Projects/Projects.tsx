import './Projects.sass'
import ProjectsItems from '../../Components/Projects/ProjectsItems'
import { FaAngular, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiMongodb, SiNestjs, SiPostgresql, SiSwagger } from 'react-icons/si'
import { useEffect } from 'react'

const Projects = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>

      <div className="col-12 container mt-5">
        <h1 id='title'>Own Projects</h1>
        <div id="trace"></div>

        <div className="row-justify-content-center">
          <div className="col-sm-12">
            <div className="row justify-content-center align-items-center gx-5">
              <div className="col-sm-5 mb-3 order-sm-2">
                <ProjectsItems
                  title="Portfolio"
                  urlBack='https://portfolioapi-toffnxjumq-rj.a.run.app/api/v1/doc#'
                  repoBack='https://github.com/fabio-coutinho-dos-santos/portfolio-api'
                  urlFront='https://portfolio-inky-six-97.vercel.app/'
                  repoFront='https://github.com/fabio-coutinho-dos-santos/portfolio'
                  icon={<SiNestjs />}
                  icon2={<SiMongodb />}
                  icon3={<FaReact />}
                >
                  This portfolio has been developed using React with TypeScript, CSS, Sass, and Bootstrap.
                  It includes an authentication REST microservice developed in Node.js using NestJS with TypeORM and MongoDb database deployed in GCP Cloud Run sevice.
                </ProjectsItems>
              </div>
              <div className="col-sm-7">
                <img src="/images/portfolio.png" alt="" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>

        <div className="row m-1 justify-content-end">
          <div id="trace"></div>
        </div>

        <div className="row-justify-content-center">
          <div className="col-sm-12">
            <div className="row justify-content-center align-items-center gx-5">
              <div className="col-sm-5 mb-3">
                <ProjectsItems
                  title="REST API Node.js"
                  urlBack="https://api-nest-clean-arch.onrender.com/api/v1/doc#/"
                  repoBack='https://github.com/fabio-coutinho-dos-santos/api-nest-cleanarch'
                  urlFront=''
                  repoFront=''
                  icon={<SiNestjs />}
                  icon2={<SiMongodb />}
                  icon3={<SiSwagger/>}
                >
                  API developed using NestJs that has extensive coverage of unit and integration tests. It utilizes MongoDB for data storage and also includes functionality for building and sending emails and messages via RabbitMQ. Production deployment of the API on the Render service via Docker and MongoDB database on the Atlas cloud service.
                </ProjectsItems>
              </div>
              <div className="col-sm-7">
                <img src="/images/api.png" alt="" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>

        <div className="row m-1 justify-content-start">
          <div id="trace"></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-12">
            <div className="row justify-content-center gx-5 align-items-center">
              <div className="col-sm-6 order-sm-2 mb-3">
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
                  This is an application that simulates a simplified banking system. It includes features such as user registration, login with JWT token authentication, and a dashboard page that enables users to review their transaction history and account balance. The application has been developed using Angular, Node.js, and MongoDB. For logging into the application, you can use the following credentials: <strong> email - rcarlos20@gmail.com, password - Rcarlos20 </strong>. The backend of the application is deployed on a Digital Ocean droplet, which is configured with Nginx as a reverse proxy. This setup is integrated with Docker containers and managed using Docker Compose
                </ProjectsItems>
              </div>

              <div className="col-sm-6">
                <img src="/images/print-bank.png" alt="" className='img-fluid' />
              </div>

            </div>
          </div>
        </div>

        <div className="row m-1 justify-content-end">
          <div id="trace"></div>
        </div>

        <div className="row-justify-content-center">
          <div className="col-sm-12">
            <div className="row justify-content-center gx-5 align-items-center">
              <div className="col-sm-5 mb-4">
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

                  An application designed to manage clients and operations of an aesthetics clinic. It features a login system with JWT token authentication, as well as functionalities such as generating PDF anamnesis forms, and CRUD operations for clients, products, and procedures. The technologies used were Angular, Node.js, and MongoDB. Production deployment of the backend was done using Docker on a Render service, and the database was hosted on the MongoDB Atlas service.
                </ProjectsItems>
              </div>
              <div className="col-sm-7">
                <img src="/images/print-form-v1.png" alt="" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>

        <div className="row m-1 justify-content-start">
          <div id="trace"></div>
        </div>

        <div className="row-justify-content-center">
          <div className="col-sm-12">
            <div className="row justify-content-center gx-5 align-items-center">
              <div className="col-sm-4 order-sm-2 mb-3">
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
                  Page for the client of the aesthetics clinic to fill out an anamnesis form. After completion, the form becomes available in the management application. Built using Angular. This is a complementary system to the aesthetics clinic management, providing efficiency to the evaluation and customer monitoring processes carried out by the clinic.
                </ProjectsItems>
              </div>

              <div className="col-sm-8">
                <img src="/images/print-anamnesis-v1.png" alt="" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>

        <div className="row m-1 justify-content-end">
          <div id="trace"></div>
        </div>

        <div className="row-justify-content-center mb-5">
          <div className="col-sm-12">
            <div className="row justify-content-center gx-5 align-items-center">
              <div className="col-sm-5 mb-3">
                <ProjectsItems
                  title="Esthetic Clinic - Anamnesis Form V2"
                  urlFront="https://form-front-anamesis.vercel.app/?company=3ca4af53-d327-4b8f-9de3-dcf4d08fbaf9"
                  urlBack="https://form-api-toffnxjumq-rj.a.run.app/api/v1/doc"
                  repoFront='https://github.com/fabio-coutinho-dos-santos/form-front-anamesis'
                  repoBack='https://github.com/fabio-coutinho-dos-santos/form-api-v1'
                  icon={<FaReact />}
                  icon2={<SiNestjs />}
                  icon3={<SiPostgresql />}
                >

                  Page for clients to fill out anamnesis forms, restructured to be multi-company, 
                  featuring a new interface and functionalities. Built using NestJS and React. 
                  This will be the second version of the anamnesis form, designed by me for a multi-company aesthetic clinic management system, 
                  currently under development. For state management, Redux and existing React hooks were employed with Zod to validate the inputs. 
                  The application's backend is also in development and is deployed as GCP Cloud Run service. It will include a NestJS API with a Postgres database.
                </ProjectsItems>
              </div>
              <div className="col-sm-7">
                <img src="/images/print-anamnesis-v2.png" alt="" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
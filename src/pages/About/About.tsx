import './About.sass'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import CardSkills from '../../Components/CardSkills/CardSkills'
import { BsJournalBookmark, BsWindowFullscreen } from "react-icons/bs"
import { RiListSettingsLine } from "react-icons/ri"
import { BsCloud } from "react-icons/bs"
import { BsTools } from "react-icons/bs"
import { BsDatabase } from "react-icons/bs"
import { TbBrandDocker } from "react-icons/tb"
import { GrAchievement } from "react-icons/gr"
import { GiAchievement } from "react-icons/gi"
import { LuMedal } from "react-icons/lu"
import { FaAngular, FaBootstrap, FaCss3Alt, FaDocker, FaEye, FaHtml5, FaLaravel, FaNode, FaNodeJs, FaPhp, FaPython, FaReact, FaSass } from 'react-icons/fa'
import { SiAndroid, SiC, SiIonic, SiMongodb, SiMqtt, SiMysql, SiNestjs, SiPostgresql, SiPostman, SiReact, SiSwagger, SiTensorflow } from 'react-icons/si'
import WorkExperiences from '../../Components/WorkExperiences/WorkExperiences';
import { useEffect } from 'react';

const downloadResume = () => {
  window.location.href = "/documents/resume.pdf"
}

type Props = {}

const About = (props: Props) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="col-12 container">
        <div className="row mt-sm-5" id='about-me'>
          <h1>About me</h1>
          <div id="trace"></div>
          <div className="col-12 col-sm-12" id='about-container'>
            <div className="row justify-content-center align-items-center mt-3 gx-5">
              <div className="col-lg-5">
                <div id="avatar"></div>
                <div className="row d-none d-sm-block mt-1" id='download-btn'>
                  <input type="button" onClick={downloadResume} className='btn btn-primary' value={"Download Resume"} />
                </div>
              </div>
              <div className="col-lg-7" id='who'>
                <p className='mt-3'>
                  With over 5 years of experience in software
                  development, I am highly motivated and passionate about building innovative solutions.
                  Throughout my academic and professional journey, I have demonstrated a strong
                  commitment to completing tasks and consistently delivering my best work. I am now
                  seeking opportunities to further enhance my skills and explore new challenges in a
                  professional environment.
                </p>
                <p>
                  As an experienced full-stack developer, I possess proficiency in Node.js, Express, NestJs,
                  and Laravel. My expertise extends to REST API development, Docker-based microservices,
                  and GCP deployment, including Cloud Run, Cloud Function, and Cloud Pub/Sub. I am also
                  skilled in implementing CI/CD automation using Cloud Build. Additionally, I have frontend
                  expertise in Laravel, Angular, React, and Bootstrap, enabling me to deliver seamless user
                  experiences.
                </p>
                <p>
                  Prior to embarking on my technology career, I joined the Minas Gerais Military Police in
                  2009 at the age of 18. I have continued to serve as a military police officer while pursuing
                  academic and professional computing activities. The discipline and dedication I have
                  cultivated through my police career have allowed me to rapidly acquire new skills and
                  exhibit the resilience and patience necessary to excel in software development. I thrive in
                  team environments, drawing on my adaptability and resilience to tackle daily challenges
                </p>

                <div className="row justify-content-center d-sm-none">
                  <input type="button" onClick={downloadResume} className='btn btn-primary' value={"Download Resume"} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center" id='about'>
          <div className="col-sm-12">
            <div className="card-content">
              <div className="row justify-content-center" id='works'>
                <h1>Work Experience</h1>
                <div id="trace"></div>
              </div>
              <WorkExperiences
                company='Mensis'
                title='Senior Back End Developer (2020 / Current)'
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
                <p> Working on an electronic workpoint system and Iot projects,
                  Developed REST APIs using Node.js, Express, NestJs, and Laravel, integrated with MongoDB and MySQL databases.
                  Front-end development with Ionic, Angular, Laravel, Bootstrap, and React. 
                  Designed and implemented a microservices architecture on Google Cloud Platform (GCP), 
                  utilizing Docker for containerization, and deploying microservices on Cloud Run, 
                  Cloud Functions, and Cloud Pub/Sub. Implemented microservices in Node.js, Express, NestJs, Laravel, and Python. 
                  Configured and automated deployment triggers in GCP for CI/CD using GitHub Actions and Cloud Build. 
                  Collaborated cross-functionally throughout the entire development lifecycle, from ideation to testing, and documentation. 
                  Task management conducted through Jira. 
                  Additional expertise includes designing microservices with both queue protocols and HTTP, 
                  creating deployment manifests in Kubernetes for efficient scaling and management, 
                  and developing observability strategies using Otel, Promtail, Prometheus, and Grafana. 
                  Integrated RESTful APIs with a payment gateway for seamless transaction processing. 
                  Utilized GitHub Actions to create CI/CD pipelines and applied unit and integration tests using Jest and PHPUnit.
                </p>
              </WorkExperiences>

              <div className='mt-4'><hr /></div>

              <WorkExperiences
                company='4Cadia'
                title='Senior Back End Developer ( 2022-03 / 2022-06)'
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
                <p> Working on a horse racing betting system,
                  I was responsible for developing, testing and documenting new features in a REST API using NestJs.
                  In addition, I also developed new front-end functionality using Bootstrapp 5 and Angular.
                  Task management through Jira and Figma.</p>
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
                <p>During my master's degree in computer science I had the opportunity to combine academic
                  research with development in several works, building REST APIs with Node.js / Express.js,
                  in addition to front-end and mobile frameworks such as Angular, Ionic, Android and React Native.
                  In the elaboration of my dissertation, I had the opportunity to work on the construction of a deep neural network,
                  combined with a REST API as a reinforcement of network security in IoT applications.
                  For that, I used TensorFlow and Python, in addition to Node.js and Express.js.</p>
              </WorkExperiences>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5" id='skills'>
          <h1>Main Skills</h1>
          <div className="row justify-content-center mb-5"><div id="trace"></div></div>
          <CardSkills title='Frontend' textOne='HTML CSS Laravel Ionic' textTwo='Angular React Bootstrap' icon={<BsWindowFullscreen />} />
          <CardSkills title='Backend' textOne='NodeJs Express NestJs' textTwo='PHP Laravel Python REST' icon={<RiListSettingsLine />} />
          <CardSkills title='Cloud' textOne='GCP Cloud-Run Storage' textTwo='Functions PubSub Build' icon={<BsCloud />} />
          <CardSkills title='Databases' textOne='MySql' textTwo='MongoDb Postgres' icon={<BsDatabase />} />
          <CardSkills title='Containers & Ci-Cd' textOne='Docker Docker-Compose K8s' textTwo=' Cloud-Build Triggers' icon={<TbBrandDocker />} />
          <CardSkills title='Tools' textOne='Swagger Postman Jira' textTwo='Nginx Git Trello' icon={<BsTools />} />
        </div>

        <div className="row justify-content-center mt-5 gx-5" >
          <div className="col-lg-6" id='background-text'>
            <div className="py-5">
              <h1>Academic Background</h1>
              <div className="row justify-content-start mb-5"><div id="trace"></div></div>
              <ul className="timeline-with-icons">
                <li className="timeline-item mb-5">
                  <span className="timeline-icon">
                    <GrAchievement />
                  </span>
                  <h5 className="fw-bold">Master's in Computer Science</h5>
                  <p className="text-muted mb-2 fw-bold">2019 - 2022</p>
                  <p className="text-muted">
                    Emphasis in Software Engineering and Computer Systems<br></br>
                    Pontifícia Universidade Católica de Minas Gerais
                  </p>
                </li>

                <li className="timeline-item mb-5">
                  <span className="timeline-icon">
                    <BsJournalBookmark />
                  </span>
                  <h5 className="fw-bold">Published Works</h5>
                  <b>2023 - </b><a href='https://sol.sbc.org.br/index.php/courb/article/view/24579' className="text-muted">
                    IoTSafe: Attack Detection Based on Deep Neural Networks
                  </a><br></br>
                  <b>2021 - </b><a href='https://sol.sbc.org.br/index.php/wcga/article/view/17121' className="text-muted">
                    IoTSafe - An Architecture based on Fog Computing to Provide IoT Security
                  </a><br></br>
                  <b>2020 - </b><a href='https://dl.acm.org/doi/abs/10.1145/3428658.3431082' className="text-muted">
                    Understanding the Performance Impacts Of Cross-Platform Development On IoT Applications
                  </a>
                </li>

                <li className="timeline-item mb-5">
                  <span className="timeline-icon">
                    <GiAchievement />
                  </span>
                  <h5 className="fw-bold">Degree in Computer Engineering</h5>
                  <p className="text-muted mb-2 fw-bold">2013 - 2018</p>
                  <p className="text-muted">
                    Pontifícia Universidade Católica de Minas Gerais
                  </p>
                </li>

                <li className="timeline-item mb-5">
                  <span className="timeline-icon">
                    <LuMedal />
                  </span>
                  <h5 className="fw-bold">Awards</h5>
                  <p className="text-muted mb-2 fw-bold">2018</p>
                  <p className="text-muted">
                    Graduation Gold Medal<br></br>
                    Highest grade point average of the
                    Computer Engineering Undergraduate
                    class close to 91
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 mt-5 d-none d-lg-block" id='background'></div>

        </div>

      </div>

    </>
  )
}

export default About
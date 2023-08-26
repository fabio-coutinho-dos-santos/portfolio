import './About.css'
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

const downloadResume = () => {
    window.location.href = "/documents/cv.pdf"
}

type Props = {}

const About = (props: Props) => {

    return (
        <>
            <div className="col-12 container">
                <div className="row">
                    <div className="container col-12 col-sm-12" id='card-about-container'>
                        <div className="row justify-content-center align-items-center mt-5 gx-5">
                            <div className="col-lg-6">
                                <div id="avatar"></div>
                            </div>
                            <div className="col-lg-6 justify-content-center align-items-center">
                                <h3><b>Name:</b> Fabio Coutinho dos Santos</h3>
                                <h3><b>Profile:</b> Full Stack developer</h3>
                                <h3><b>Email:</b> fabio.santcou@gmail.com</h3>
                                <h3><b>Phone:</b> +55(31)8545-8015</h3>
                                <div id='icons'>
                                    <FaLinkedin id='linkedin'className='mt-4' onClick={() => { window.open('https://www.linkedin.com/in/fabio-coutinho-dos-santos-0ba58a18b') }}></FaLinkedin>
                                    <FaGithub id='github' className='mt-4' onClick={() => { window.open('https://github.com/fabio-coutinho-dos-santos') }} />
                                    <input type="button" onClick={downloadResume} className='btn btn-primary' value={"Download Resume"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center" id='about'>
                    <div className="col-sm-12">
                        <div className="card-content">
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
                                <p> Working on an electronic workpoint system and Iot projects,
                                I developed REST APIs with Node.js, Express, NestJs and Laravel,
                                integrated with MongoDb and MySql databases in addition to front-end development using
                                Ionic, Angular, Laravel and Bootstrap. Microservices designed and deployed on GCP using Docker,
                                Cloud Run, Cloud Functions and Cloud Pub/Sub in the above languages as well as Python.
                                Elaboration of triggers in GCP for automated delivery with CI/CD in Cloud Build.
                                In addition to this, I work on the design and implementation of IoT projects,
                                programming microcontrollers like ESP-32 with C and C++ languages, as well as working with Raspberry Pi using Python.
                                Collaborating cross-functionally from the creation of solutions to their development,
                                testing and documentation. Task management through Jira. </p>
                            </WorkExperiences>

                            <div className='mt-4'><hr /></div>

                            <WorkExperiences
                                company='4Cadia'
                                title='Fullstack developer ( 2022-03 / 2022-06)'
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


                <div className="row justify-content-center mb-5 mt-5" id='who'>
                    <h1>About me</h1>
                    <div className="col-12 mt-4">
                        <div className="row justify-content-start"><div id="trace"></div></div>
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
                    </div>
                    <div className="row justify-content-end"><div id="trace"></div></div>
                </div>
               
               
                <div className="row justify-content-center" id='skills'>
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
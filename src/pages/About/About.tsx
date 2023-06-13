import './About.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import  CardSkills  from '../../Components/CardSkills/CardSkills'
import { BsWindowFullscreen } from "react-icons/bs"
import { RiListSettingsLine } from "react-icons/ri"
import { BsCloud } from "react-icons/bs"
import { BsTools } from "react-icons/bs"
import { BsDatabase } from "react-icons/bs"
import { TbBrandDocker } from "react-icons/tb"

type Props = {}

const About = (props: Props) => {

    return (
        <>
        <div className="col-12 container">
            <div className="row">
                <div className="container col-12 col-sm-12" id='card-about-container'>
                    <div className="row justify-content-center align-items-start mt-5 gx-5">
                        <div className="col-lg-6">
                            <div id="avatar"></div>            
                        </div>
                        <div className="col-lg-6 justify-content-center align-items-center">
                            <h3><b>Name:</b> Fabio Coutinho dos Santos</h3>
                            <h3><b>Profile:</b> Full Stack developer</h3>
                            <h3><b>Email:</b> fabio.santcou@gmail.com</h3>
                            <h3><b>Phone:</b> +55(31)8545-8015</h3>
                            <div id='icons'>
                                <FaLinkedin id='linkedin' onClick={()=>{window.open('https://www.linkedin.com/in/fabio-coutinho-dos-santos-0ba58a18b')}}></FaLinkedin>
                                <FaGithub id='github' onClick={()=>{window.open('https://github.com/fabio-coutinho-dos-santos')}}/>
                            </div>
                            <div className="row justify-content-center">
                                <input type="button" className='btn btn-primary mt-5' value={"Download Resume"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mb-5" id='who'>
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
                    <CardSkills title='Frontend' textOne='HTML CSS Laravel' textTwo='Angular React Bootstrap' icon={<BsWindowFullscreen/>}/>
                    <CardSkills title='Backend' textOne='NodeJs Express NestJs' textTwo='PHP Laravel Python REST' icon={<RiListSettingsLine/>}/>
                    <CardSkills title='Cloud' textOne='GCP Cloud-Run' textTwo='Functions PubSub Build' icon={<BsCloud/>}/>
                    <CardSkills title='Databases' textOne='MySql' textTwo='MongoDb' icon={<BsDatabase/>}/>
                    <CardSkills title='Containers & Ci-Cd' textOne='Docker Docker-Compose K8s' textTwo=' Cloud-Build Triggers' icon={<TbBrandDocker/>}/>
                    <CardSkills title='Tools' textOne='Swagger Postman Jira' textTwo='Nginx Git Trello' icon={<BsTools/>}/>
            </div>
        </div>
        
        </>
      )
}

export default About
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './HomeHeader.sass'
import { FiDownload } from 'react-icons/fi'

const HomeHeader = () => {

  const downloadResume = () => {
    window.location.href = "/documents/resume.pdf"
  }

  return (
    <div className='header'>
      <div className="container" id='header-container'>
        <div className="row justify-content-start align-items-center">
          <div className="col-sm-3">
            <div id="avatar"></div>
          </div>
          <div className="d-sm-none mt-5"></div>
          <div className="col-sm-3" id='name'>
            <h1>Fabio Coutinho</h1>
            <h3>Computer Engineer</h3>
            <h5>Senior Back End Developer</h5>
            <h5>+55 (31) 98545-8015</h5>
            <h5>fabio.santcou@gmail.com</h5>
          </div>
          <div className="col-sm-3 offset-1">
            <div id='icons'>
              <div className="row justify-content-center">
                <div className="col-sm-12">
                  <FaLinkedin id='linkedin' className='mt-4' onClick={() => { window.open('https://www.linkedin.com/in/fabio-coutinho-dos-santos-0ba58a18b') }}></FaLinkedin>
                  <FaGithub id='github' className='mt-4' onClick={() => { window.open('https://github.com/fabio-coutinho-dos-santos') }} />
                  <button type="button" onClick={downloadResume} className='btn btn-primary'><FiDownload className='icon-download'/>   Resume</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
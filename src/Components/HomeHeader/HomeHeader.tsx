import './HomeHeader.css'

const HomeHeader = () => {
  return (
    <div className='header col-12'>
      <div className="container" id='header-container'>
        <div className="row justify-content-start align-items-start">
          <div className="col-sm-3">
              <div id="avatar"></div> 
          </div>
          <div className="col-sm-3 mt-5" id='name'>
            <h1>Fabio Coutinho</h1>
            <h3>Computer Engineer</h3>
            <h5>Full Stack Developer</h5>
          </div>
          {/* <div className="col-sm-3 offset-3 mt-5">
            <input type="button" className='btn btn-outline-secondary' value={'Contact me'}/>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
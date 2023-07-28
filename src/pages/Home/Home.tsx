import React, { useEffect } from 'react'
import HomeHeader from '../../Components/HomeHeader/HomeHeader'
import { useSetBodyColor } from '../../hooks/useSetBodyColor'
import "./Home.css"
type Props = {}

const Home = () => {

  const {setBodyColor} = useSetBodyColor()

  useEffect(() => {
    setBodyColor('#CFD8DC')
  })

  return (
    <>
    <div className="container-fluid">
        <HomeHeader></HomeHeader>
        <div className="container mt-3">

          <div className="row justify-content-center">
            
            <div className="col-sm-8">
              <div className='card-content mt-3'>
                <h3>About me</h3>
                <span className='mt-2'>With over 5 years of experience in software
                        development, I am highly motivated and passionate about building innovative solutions.
                        Throughout my academic and professional journey, I have demonstrated a strong
                        commitment to completing tasks and consistently delivering my best work. I am now
                        seeking opportunities to further enhance my skills and explore new challenges in a
                        professional environment.
                </span>
              </div>
              <div className='card-content mt-3'>
                <h3>Projects</h3>
                <span className='mt-2'>With over 5 years of experience in software
                        development, I am highly motivated and passionate about building innovative solutions.
                        Throughout my academic and professional journey, I have demonstrated a strong
                        commitment to completing tasks and consistently delivering my best work. I am now
                        seeking opportunities to further enhance my skills and explore new challenges in a
                        professional environment.
                </span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className='card-content mt-3'>
                <h3>Social Media</h3>
              </div>
              <div className='card-content mt-3'>
                <h3>Main Skills</h3>
              </div>
            </div>

          </div>
        </div>
    </div>
    </>
  )
}

export default Home
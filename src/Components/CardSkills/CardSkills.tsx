import React, { useEffect } from 'react'
import './CardSkills.sass'

interface Props {
    title:string,
    textOne:string
    textTwo:string
    icon:any
}

const CardSkills = ({title, textOne, textTwo, icon} :Props) => {

  return (
    <div className="col-lg-4" id='card-skills'>
        <div className="row justify-content-center">
            <h3 className='mt-4 mb-4'>{title}</h3>
            <div className="icon-container">
                <div className="icon-container-internal">
                    <div id='icon'>{icon}</div>
                </div>
            </div>
            <div id='fron-skills' className='mt-3'>
                <p>{textOne}</p>
                <p>{textTwo}</p>
            </div>
        </div>
    </div>
  )
}

export default CardSkills
import React from 'react'

export const useSetBodyColor = () => {

    const setBodyColor = (color: any) =>{
        console.log(color)
        document.documentElement.style.setProperty('--bodyColor', color)
    }

    return{setBodyColor}
}


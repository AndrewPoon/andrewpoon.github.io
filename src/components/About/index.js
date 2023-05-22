import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
const About =()=>{

    const [letterClass,setLetterClass]=useState('text-animate')
    useEffect(()=>{
        return setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000)
    },[])
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Who am I ?".split("")}
                    idx={15}
                    />
                </h1>

                <p>
                I am Andrew, a recent graduate of Western University's Software Engineering program. 
                My childhood passion for video games sparked my curiosity to learn more about how they work. 
                Through exploring various tools and frameworks in software development, 
                I have developed a strong interest in the entire software development process, 
                from planning to completion.

                </p>
                <p>
                During my education, I gained proficiency in creating web applications using different stacks (MERN/MEAN)
                , developing GUI-based applications, working on network-related applications (P2P), ensuring TLS information security,
                 implementing machine learning applications, utilizing OpenGL graphics, and writing test cases.
                </p>
                <p>
                In addition to my software-related interests, 
                I also enjoy outdoor activities such as walking in nature, weightlifting, skateboarding, and playing chess.
                 I am also an enthusiast of exploring different cuisines and engaging in board games.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faNodeJs} color='#6cc24a'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4328'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About
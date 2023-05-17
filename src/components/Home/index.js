import {Link} from 'react-router-dom'
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import { useEffect } from 'react';
import Loader from 'react-loaders';
const Home =()=>{

    const [letterClass,setLetterClass]=useState('text-animate')
    const nameArray="Hi, I am Andrew".split("")
    const jobArray="Software Engineer".split("")

    useEffect(()=>{
        return setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000)
    },[])
    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                 <AnimatedLetters letterClass={letterClass}
                 strArray={nameArray}
                 idx={7}/>
                 <br/>
                 <AnimatedLetters letterClass={letterClass}
                 strArray={jobArray}
                 idx={22}/>
                </h1>

                <Link to='/contact' className='flat-button'> CONTACT ME
                </Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman'/>
        </>
    );
}

export default Home;
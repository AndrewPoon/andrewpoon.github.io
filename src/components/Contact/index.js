import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect,useState,useRef } from 'react'
import emailjs from '@emailjs/browser';
const Contact=()=>{
    const [letterClass,setLetterClass]=useState('text-animate')
    useEffect(()=>{
        return setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000)
    },[])
    const refForm=useRef();
    let header='Contact me'.split("") 
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fjy14yv', 'template_qh1pwdx', refForm.current, 'nHZOZFf7ceoaea26i')
          .then((result) => {
              alert('Message has been sent!')
              window.location.reload(false)
          }, (error) => {
            alert('Failed to send message, please try again!')
          });
      };
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={header}
                        idx={15}/>
                    </h1>
                    <p>
                        Please feel free to contact me about employment opprtunities!
                        However, if you have requests or questions, Contact me using the
                        form below.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder="Name" required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required/>
                                </li>
                                <li>
                                    <textarea type='text' name='message' placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact
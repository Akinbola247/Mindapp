import React, {useState} from "react";
import Image from './images/think.jpeg'
import CreateMind from "./Createmind";
import Mind from "./mind";


function Home(prop){
    const [receivedMind, setReceivedMind ] = useState([])
    const [isStarted, setIsStarted] = useState(false)
    
    function handleStarted(event){
        setIsStarted(true)
        event.preventdefault()
    }
    function cancel(props){
        setIsStarted(props)
    }
    function anotherCanceled(props){
        setIsStarted(props)
    }

    function sendToApp(prop){
        setReceivedMind((prevValue)=>{
            return [...prevValue, prop]
        })
        
    }
    function Deleted(id){
        setReceivedMind((prevValue)=>{
            return prevValue.filter((item, index)=>{
                return index !==id;
            }
        )})
    }

    return <div>
                <div className="grid-container">
                <div className="grid-item" >
                <h1 className="word-grid">Welcome {prop.user}</h1>
                <p>Your thoughts are your own but is the commitment to keep them stored your own?
                this platform is a 24hours running website that enables you to gather your thoughts for free!</p>
                </div>
                <img className="grid-item img-grid" src={Image} alt="null"></img>
                </div>
                <div className="started">
                <button className="w-100 btn btn-primary btn-lg submitButton onstart" onClick={handleStarted}>Click to get started</button>
                </div>
                <CreateMind sendMind= {sendToApp} clicked= {isStarted} cancelClick = {cancel} anotherCancel ={anotherCanceled}/>
                {receivedMind.map((each, index)=>{
                    return <Mind key={index} id={index} mindtitle = {each.title} mindContent = {each.content} handleDelete= {Deleted} />
                })}
                <div className="download" >
                <h3>Our App is now available for download</h3>
                <button type="button" className="btn btn-dark btn-lg download-button"><i className="fa-brands fa-apple"></i> Download</button>
                <button type="button" className="btn btn-dark btn-lg download-button"><i className="fa-brands fa-google-play"></i> Download</button>
                </div>
            

    </div>
    
}

export default Home;



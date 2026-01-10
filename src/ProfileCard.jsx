import {useState} from 'react';
import './App.css';

function ProfileCard({name,jobTitle,isVerified}){
    const [likes,setLikes]=useState(0)
    return(
        <div className='card-box'>
          <h2>{name}{isVerified&&"✔️"}</h2>
          <p>{jobTitle}</p>
          <div className='interaction-area'>
            <button onClick={()=>setLikes(likes+1)}>👍 Like({likes})</button>
          </div>
        </div>
    );
}
export default ProfileCard;
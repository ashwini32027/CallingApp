import React, { useEffect, useRef } from 'react'
import { ZIM } from "zego-zim-web";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import './index.css'
const App = () => {
  const zpRef=useRef(null)
  const userID = "user_"+Math.floor(Math.random()*1000); 
const userName = "demo_" + userID;
const appID = '';//enter your appid 
const serverSecret = "";  //enter your server secrete
const TOKEN = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret,null, userID, userName);

useEffect(()=>{
const zp = ZegoUIKitPrebuilt.create(TOKEN);
zpRef.current=zp
zp.addPlugins({ ZIM });
},[TOKEN])

function invite(callType) {
   const targetUser = {
        userID:prompt('Please Enter userId'),
        userName:('Please Enter user id')
    };
   zpRef.current.sendCallInvitation({
    callees: [targetUser],
    callType,
    timeout: 60, // Timeout duration (second). 60s by default, range from [1-600s].
   }).then((res) => {
    console.warn(res);
   })
   .catch((err) => {
   console.warn(err);
   });
}
  return (
    // <div className='w-full h-screen bg-gradient-to-b from-[#1a2229] to-black flex items-center justify-center'>
    //   <div className='w-[500px] h-[400px] bg-[#0d1014] border-2 border-[gray] flex-col items-center justify-center gap-[20px]'></div>
    // <h2 className='text-[white] text-[20px]'><span className='text-blue-500'>UserName:</span>{userName}</h2>
    // <h2 className='text-[white] text-[20px]' ><span className='text-blue-500'>UserId</span >{userID}</h2>

    // <button className='w-200px h-[50px] rounded-2xl bg-white text-black text-20px' onClick={()=>invite(ZegoUIKitPrebuilt.InvitationTypeVoiceCall)}>Voice call</button>
    // <button className='w-200px h-[50px] rounded-2xl bg-white text-black text-20px'onClick={()=>invite(ZegoUIKitPrebuilt.InvitationTypeVideoCall)}>Video call</button>

    // </div>
    //tailwinf not working that whyyy

   
<div className="app-container">
  <div className="card">
    <div className="user-info">
      <h2><span>UserName:</span> {userName}</h2>
      <h2><span>UserId:</span> {userID}</h2>
    </div>

    <button className="call-button" onClick={() => invite(ZegoUIKitPrebuilt.InvitationTypeVoiceCall)}>
      Voice Call
    </button>
    <button className="call-button" onClick={() => invite(ZegoUIKitPrebuilt.InvitationTypeVideoCall)}>
      Video Call
    </button>
  </div>
</div>

  )
}

export default App

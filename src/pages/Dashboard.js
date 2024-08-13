import React, {useState, useEffect} from 'react';
import ChatGPT from '../components/ChatGPT';
import Anthropic from '../components/Anthropic';

function Dashboard(){

    return(
        <div className='parent'>
            <ChatGPT/>
            <Anthropic/>
        </div>
    )
}

export default Dashboard;
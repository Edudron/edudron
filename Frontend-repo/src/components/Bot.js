import React from 'react';
import "../PageCss/bot.css";
function Bot() {
  return (
    <div><input type="checkbox" id="check"/> <label class="chat-btn" for="check"> <i class="fa fa-commenting-o comment"></i>Talk to EduBot</label>
    <div class="wrapper">
    <div class="header">
        <h2>EduChat</h2>
    </div>
            <div class="chat-box">
                <div class="chat-box-body">
                    <div class="chat-box-body-send">
                        <p>Hello !</p> <span>12:00</span>
                    </div>
                    <div class="chat-box-body-receive">
                        <p>Hello Sir.</p> <span>12:00</span>
                    </div>
                    <div class="chat-box-body-receive">
                        <p>How can I help you ?</p> <span>12:00</span>
                    </div>
                    <div class="chat-box-body-send">
                        <p>What is your name?</p> <span>12:01</span>
                    </div>
                    <div class="chat-box-body-receive">
                        <p>My name is EduBot.</p> <span>12:01</span>
                    </div>
                    <div class="chat-box-body-receive">
                        <p>And I am smartest on this planet.</p> <span>12:01</span>
                    </div>
                </div>
                <div class="chat-box-footer"><input
                        placeholder="Enter Your Message" type="text"/> <span><i class="send far fa-paper-plane"></i></span>
                </div>
</div></div>
</div>
  )
}

export default Bot;
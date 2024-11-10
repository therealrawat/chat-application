
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WaitingRoom from './components/waitingroom';
import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import ChatRoom from './components/ChatRoom';


function App() {

  const [conn, setConnection] = useState();
  const [messages, setMessages] = useState([]);

  const joinChatRoom = async (username, chatroom) => {
    try {
      //initial our connection
      const conn = new HubConnectionBuilder()
        .withUrl("http://localhost:5144/Chat")
        .configureLogging(LogLevel.Information)
        .build();

      //estb the handlers
      conn.on("JoinSpecificGroup", (username, msg) => {
        console.log("msg: ", msg);
        setMessages(messages => 
          [...messages, { username: "admin BOT", msg, timestamp: new Date().toISOString() }]
        );
      });

      //set up another handle
      //this handler will allow me to actually whenever there's a new recieve msg, and i'll be able to utilize it 
      conn.on("RecieveSpecificMessage", (username, msg, timestamp ) => {
        console.log("Received timestamp:", timestamp); // Debugging step

    // Try parsing the timestamp
    const parsedTimestamp = new Date(timestamp);
        setMessages(messages => 
          [...messages, {username, msg, timestamp: parsedTimestamp.toISOString() }]);
      });

      await conn.start();
      await conn.invoke("JoinSpecificGroup", { username, chatroom });

      setConnection(conn);
    }
    catch (e) {
      console.log(e);

    }
  }

  const sendMessage = async(message) => {
    try {
      await conn.invoke("SendMessage", message);
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div >
      <main>
        <Container>
          {/* <Row className='px-5 my-5'>
            <Col sm='12'>
              <h1 className='font-weight-light'>Welcome to the Chat App</h1>
            </Col>
          </Row> */}
          {!conn  
          ? <WaitingRoom joinChatRoom={joinChatRoom} />
          : <ChatRoom messages={messages} sendMessage={sendMessage} />
          }
        </Container>
      </main>
    </div>
  );
}

export default App;

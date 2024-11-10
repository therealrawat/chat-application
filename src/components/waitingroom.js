import { useState } from "react";
import { Button, Form, Row, Col, Container} from "react-bootstrap";

const WaitingRoom = ({ joinChatRoom }) => {
    const[username, setUsername] = useState();
    const[chatroom, setChatroom] = useState();
    const [errors, setErrors] = useState({ username: "", chatroom: "" });


    //validation
    const validateForm = () => {
        const newErrors = {};
        if (!username?.trim()) newErrors.username = "Username is required.";
        if (!chatroom?.trim()) newErrors.chatroom = "Chatroom name is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = e => {
        e.preventDefault();
        if (validateForm()) {
            joinChatRoom(username, chatroom);
        }
    };
    

    return (
        <Container className="waiting-room-container">
            <Form className="waiting-room-form" onSubmit={handleSubmit}>
                <Row className="mb-4 text-center">
                    <Col>
                        <h2 className="form-title">Join Chat Room</h2>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={12}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                placeholder="Enter your username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                className="input-field"
                                isInvalid={!!errors.username}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={12}>
                        <Form.Group>
                            <Form.Label>Chat Room Name</Form.Label>
                            <Form.Control
                                placeholder="Enter chat room name"
                                value={chatroom}
                                onChange={e => setChatroom(e.target.value)}
                                className="input-field"
                                isInvalid={!!errors.chatroom}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.chatroom}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center">
                        <Button variant="primary" type="submit" className="join-btn">
                            Join Chat Room
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default WaitingRoom;
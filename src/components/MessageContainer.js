import { Table } from "react-bootstrap";

const generateColor = (username) => {
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
        hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = `hsl(${hash % 360}, 60%, 50%)`; // Generates a color with hue based on hash
    return color;
};

const MessageContainer = ({ messages }) => {
    return (
        <div className="message-container">
            <Table hover>
                <tbody>
                    {messages.map((msg, index) => (
                        <tr key={index}>
                            <td style={{ position: 'relative', paddingBottom: '1.5em', border: 'none' }}>
                                
                                {/* Check if the previous message is from the same user
                                    Im trying to avoid username for consecutive messages from the same user
                                */}
                                {index === 0 || messages[index - 1].username !== msg.username ? (
                                    <strong style={{ color: generateColor(msg.username) }}>
                                        {msg.username}
                                    </strong>
                                ) : null}

                                <br />
                                {msg.msg}

                                <div className="text-muted timestamp" >
                                    {new Date(msg.timestamp).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default MessageContainer;

# ChatApp Using WebSocket (SignalR)

## Overview
ChatApp is a real-time chat application that enables users to join chatrooms, send messages, and receive messages instantly. Built with React.js on the frontend, a .NET Core Web API on the backend, and SignalR for WebSocket-based communication, it supports user and room validation, color-coded usernames, and hides usernames for consecutive messages from the same user for a clean chat experience.

## Technologies Used
- **Frontend**: React.js
- **Backend**: .NET Core Web API
- **Real-Time Communication**: SignalR
- **Data Storage**: In-memory storage for chat history

## Low-Level System Design
The application is built with real-time messaging, chatroom management, and efficient in-memory data storage, offering a smooth, responsive experience without the need for persistent storage. 

## Key Concepts
- **Real-Time Messaging**: SignalR enables instant message delivery between users.
- **Group and Chatroom Management**: Users can join specific groups within chatrooms.
- **Validation**: Ensures proper input of usernames and chatroom names.
- **Color Coding**: Assigns unique colors to each user via a hash-based hue generator.
- **Message Metadata**: Each message includes a username, chat group name, and timestamp.
- **In-Memory Chat History**: Temporary storage for session-specific message data without a persistent database.

## Backend (Server-Side) Setup

### Requirements
- .NET Core SDK
- Microsoft.AspNetCore.SignalR

### Installation
Run the following command to add SignalR:
```bash
dotnet add package Microsoft.AspNetCore.SignalR



## Frontend (Client-Side) Setup

### Requirements
- Node Js
- npm
- React.js

### Installation
Run the following command to add SignalR:
```bash
npm install @microsoft/signalr


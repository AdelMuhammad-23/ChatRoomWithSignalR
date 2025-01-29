# Real-Time Chat Application

This is a **real-time chat application** built using **HTML**, **CSS**, **JavaScript**, and **SignalR** for real-time communication between clients and the server. The application allows users to send and receive messages instantly in a simple and user-friendly interface.

## Features
- **Real-Time Messaging**: Messages are sent and received instantly using SignalR.
- **Responsive Design**: The chat interface is designed to work seamlessly on both desktop and mobile devices.
- **User-Friendly Interface**: Clean and intuitive UI for a smooth user experience.
- **Message History**: Messages are displayed in a scrollable chat window.
- **Enter Key Support**: Users can send messages by pressing the "Enter" key.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Real-Time Communication**: SignalR
- **Backend**: ASP.NET Core (for SignalR Hub)

## How It Works
1. The client establishes a connection to the SignalR Hub on the server.
2. Users can type messages in the input field and send them by clicking the "Send" button or pressing "Enter".
3. Messages are sent to the server via the SignalR Hub and broadcasted to all connected clients in real-time.
4. Received messages are displayed in the chat window.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Adelmuhammad-23 /ChatRoomWithSignalR.git

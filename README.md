# A-Chat-App

## Overview
A-Chat-App is a full-stack real-time messaging web application built using modern web development technologies. It includes core features like user authentication, one-on-one messaging, group chat functionality, and real-time updates. The application is deployed on [Vercel](https://a-chat-app.vercel.app/) for easy access.

## Features
- **User Authentication**: Secure login and registration using `bcryptjs` and `next-auth`.
- **One-on-One Chat**: Send and receive real-time messages between users.
- **Group Chat**: Create and join group conversations seamlessly.
- **Real-Time Messaging**: Enabled by `pusher` and `pusher-js`.
- **Real-Time Picture Sharing**: Enabled by `next-cloudinary`.
- **Profile/Group Profile Change**: Enabled by `next-cloudinary`.
- **Responsive UI**: Built with Material-UI (`@mui/icons-material`) and styled using `@emotion/react` and `@emotion/styled`.
- **Enhanced User Experience**: Toast notifications via `react-hot-toast` and form handling using `react-hook-form`.

## Tech Stack

### Frontend
- **Next.js**: Framework for building React-based web applications with server-side rendering.
- **React.js**: Core library for building the user interface.
- **Material-UI**: Provides reusable components for a polished design.
- **Emotion (CSS-in-JS)**: For dynamic and styled components.
- **react-hook-form**: Simplifies form validation and state management.
- **react-hot-toast**: Displays notifications for seamless UX.

### Backend
- **Node.js**: JavaScript runtime for building RESTful APIs.
- **Pusher**: Enables real-time messaging with channels and events.
- **bcryptjs**: Provides password hashing for secure user authentication.
- **Mongoose**: Manages MongoDB interactions with an elegant schema-based solution.

### Database
- **MongoDB**: A NoSQL database for scalable and flexible data storage.

### Deployment
- **Frontend & Backend**: Hosted on Vercel, ensuring efficient builds and global delivery.

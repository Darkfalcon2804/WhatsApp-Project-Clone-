# 📱 WhatsApp Clone (MERN)

A real-time chat application built with the **MERN stack** that allows users to send messages and share files instantly, just like WhatsApp.

---

## 🚀 Features

- 💬 Real-time one-to-one chatting  
- 📂 File sharing support (images, documents, etc.)  
- 🔐 Secure user authentication  
- 🌐 Built with the MERN stack (MongoDB, Express.js, React.js, Node.js)  
- ⚡ Socket.io for instant message delivery  

---

## 🎥 Demo
   
[![Demo Video](https://youtu.be/c6ZLbieISG0)]  

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Material-UI (or your UI lib)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Real-time:** Socket.io  
- **Authentication:** JWT / OAuth (if used)  

---

## ⚙️ Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/whatsapp-clone.git
  ```
2. **Create `.env` file for client**

Inside the `client` folder, create a `.env` file and add the following:

  ```bash
  # Example .env file
    VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
   ``` 
3. **Create `.env` file for server**

Inside the `server` folder, create a `.env` file and add the following:

  ```bash
  # Example .env file
   DB_USERNAME=your_db_username_here
   DB_PASSWORD=your_db_password_here
   ```    
4. **Install dependencies for client,serverand socket**
```bash
  # client      
   cd client
   npm install
 #In new terminal for server
   cd server
   npm install
 #In new terminal for socket
 cd socket
 npm install
 ```
5. **Run the file**
```bash
#client
cd client
npm run dev
#server 
npm run start
#socket
npm run start
```

## 📌 Roadmap / Future Improvements
✅ Group chats
✅ Voice / video calls
✅ Message reactions
✅ Dark mode

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.
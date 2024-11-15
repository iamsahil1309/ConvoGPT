

# 🌐 ConvoGPT - AI-powered Conversational Application

ConvoGPT is a modern conversational app powered by cutting-edge AI. Built with **Next.js**, **TailwindCSS**, **Firebase**, and **Explainable AI (XAI)**, it enables users to engage in intelligent, interactive conversations with a robust backend powered by Firebase. This project integrates AI features to provide transparent, understandable AI-powered responses, making it easy to trust and interact with.

> 🔗 https://convo-gpt-two.vercel.app/

## 🚀 Features

- **💬 AI-powered Conversations**  
  Engage with a highly intelligent conversational model based on GPT-3/4 for real-time interactions.

- **🧠 Explainable AI (XAI)**  
  Gain insights into why the AI responds the way it does with explainable and transparent reasoning.

- **📱 Mobile-Responsive**  
  Built with **TailwindCSS** for responsive design, ensuring an optimal experience on any device.

- **🔒 Real-time Firebase Authentication**  
  Secure login and authentication using **Firebase** for user accounts and chat histories.

- **⚡ Fast and Scalable Backend**  
  Powered by **Firebase** for real-time data updates, handling multiple users concurrently.

- **💥 Real-time Chat Experience**  
  Seamless real-time messaging between users and the AI, backed by Firebase's Firestore.

---

## 🛠️ Tech Stack

- **Next.js** - React-based framework for building server-side rendered (SSR) web applications.
- **TailwindCSS** - Utility-first CSS framework for building modern user interfaces.
- **Firebase** - Backend-as-a-Service platform providing authentication, real-time databases, and cloud functions.
- **XAI** - Making machine learning models interpretable and providing insights into their decisions.

---

## 💻 Installation

### Prerequisites
Before starting, make sure you have the following tools installed:

- **Node.js** (v14 or later)  
- **npm** or **yarn**
- **Firebase Account** - Set up Firebase in your project

### Step 1: Clone the repository

```bash
git clone https://github.com/your-username/convo-gpt.git
cd convo-gpt
```

### Step 2: Install dependencies

```bash
npm install
```

or if you are using yarn:

```bash
yarn install
```

### Step 3: Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new Firebase project if you don't already have one.
3. Enable Firebase Authentication (Google, Email, etc.).
4. Create a Firestore database in Firebase.
5. Add your Firebase configuration to the `.env.local` file:
   
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### Step 4: Run the Development Server

```bash
npm run dev
```

or

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app running locally.

---

## 📄 Usage

1. **Sign In**: Use Firebase authentication to log in and access your user-specific chat history.
2. **Start Chatting**: Type a message in the chat interface, and get a response powered by the GPT model.
3. **XAI Transparency**: For each AI-generated message, click on the "Explain" button to view an explanation of how the AI arrived at its response.

---

## 📸 Screenshots

Here are some screenshots of the app in action:


![Screenshot (19)](https://github.com/user-attachments/assets/8b1bfcc3-087a-49a7-9388-f11500f988ae)


![Screenshot (17)](https://github.com/user-attachments/assets/2a3ad234-09f0-40c5-adf7-9dd0d0f09713)

![Screenshot (18)](https://github.com/user-attachments/assets/2b1c3dc3-65d5-462b-a547-60c42421bd1b)


---

## 🧑‍💻 Contributing

We welcome contributions to improve **ConvoGPT**! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

---


## 👨‍💻 Author

Made with ❤️ by **Sahil Singh**

---



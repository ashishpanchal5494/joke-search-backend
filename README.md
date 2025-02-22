# Dad Jokes App

## 📌 Project Overview

This is a simple **Dad Jokes App** that allows users to **search for jokes**, **add jokes to favorites**, and **manage favorite jokes**. The app fetches jokes from an external API and stores favorites in a database.

## 🚀 Tech Stack

- **Frontend:** React.js, Bootstrap5
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **API Used:** [icanhazdadjoke API](https://icanhazdadjoke.com/)
- **State Management:** React Hooks
- **HTTP Requests:** Axios

---

## 📂 Project Setup Instructions

### 🛠 Prerequisites

Make sure you have the following installed:

- **Node.js** (v14+ recommended)
- **MySQL** (for storing favorite jokes)
- **npm or yarn**

### 🔧 1. Clone the Repository

```sh
git clone https://github.com/ashishpanchal5494/joke-search-backend.git
cd joke-search-backend-main
```

### 🔥 2. Install Dependencies

#### Backend

```sh
cd joke-search-backend-main
npm install   # or yarn install
```

````

### 🔥 3. Set Up the Database

Create MySQL Database & Table



CREATE DATABASE dad_jokes;
USE dad_jokes;

CREATE TABLE favorites (
    id VARCHAR(255) PRIMARY KEY,
    joke TEXT NOT NULL
);



### 🔥 4. Configure Backend

 PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=dad_jokes



### 🚀 5. Start the Project
#### Run Backend Server
```sh
cd backend
npm start  # Runs on http://localhost:5000
````

---

## 🛠 API Endpoints

### 🔹 Search Jokes

**GET** `https://icanhazdadjoke.com/search?term={query}`

### 🔹 Add a Favorite Joke

**POST** `http://localhost:5000/favorites`

```json
{
  "id": "joke_id",
  "joke": "Funny joke text"
}
```

### 🔹 Get Favorite Jokes

**GET** `http://localhost:5000/favorites`

### 🔹 Remove a Favorite Joke

**DELETE** `http://localhost:5000/favorites/{id}`

---

## 📸 Screenshots

(Include screenshots of the UI here)

---

---

## 📬 Contact

If you have any questions, feel free to reach out:

- **Your Name:** Ashish Panchal
- **Email:** ashishpanchal199@gmail.com
- **GitHub:** https://github.com/ashishpanchal5494

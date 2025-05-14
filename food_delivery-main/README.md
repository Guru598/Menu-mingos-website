# Menu Mingos

Menu Mingos is a web-based canteen menu and order management system designed to streamline food ordering for students and staff in institutional environments. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), the platform digitizes the entire food ordering process, from menu browsing to order placement and token-based collection, enhancing efficiency for both users and administrators.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [DevOps & CI/CD](#devops--cicd)
- [Testing](#testing)
- [Screenshots](#screenshots)
- [Team](#team)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Features

- **User Authentication:** Secure login and registration with encrypted passwords.
- **Menu Browsing:** View categorized daily menu items with images and descriptions.
- **Order Placement:** Add items to cart, specify quantity, and place orders online.
- **Token Generation:** Each order generates a unique alphanumeric token for collection.
- **Real-Time Order Tracking:** Users can track their order status on the dashboard.
- **Admin Dashboard:** Manage menu items, monitor orders, update statuses, and generate reports.
- **Notifications:** Email/SMS notifications for order confirmations and updates.
- **Responsive UI:** Optimized for both desktop and mobile devices.
- **Security:** JWT-based authentication, input validation, and HTTPS support.

---

## Tech Stack

| Layer        | Technology            |
|--------------|----------------------|
| Frontend     | React.js, HTML5, CSS3, JavaScript (ES6+), Axios |
| Backend      | Node.js, Express.js  |
| Database     | MongoDB, Mongoose    |
| DevOps       | Git, GitHub, GitHub Actions, ESLint, Prettier   |
| Testing      | Jest (JS), Postman   |

---

## System Architecture

- **Frontend:** Built with React.js for a dynamic, responsive user experience.
- **Backend:** RESTful APIs with Express.js handle business logic, authentication, and order processing.
- **Database:** MongoDB stores users, menu items, orders, and tokens.
- **Admin Panel:** Enables menu management, order monitoring, and report generation.

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Guru598/Menu-mingos-website.git
   cd Menu-mingos-website
   ```

2. **Install dependencies:**
   - For backend:
     ```bash
     cd backend
     npm install
     ```
   - For frontend:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Configure environment variables:**
   - Create `.env` files in both backend and frontend as needed (see `.env.example` for reference).

4. **Run the application:**
   - Start MongoDB (locally or ensure Atlas is accessible).
   - In backend:
     ```bash
     npm run dev
     ```
   - In frontend:
     ```bash
     npm start
     ```

5. **Access the app:**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

---

## Project Structure

```
Menu-mingos-website/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   ├── .env
│   └── ...
├── admin/ (if separate)
├── .github/
│   └── workflows/
│       ├── lint.yml
│       └── ci.yml
└── README.md
```

---

## DevOps & CI/CD

- **GitHub Actions:** Automated workflows for linting (`lint.yml`) and CI (`ci.yml`) run on every push and pull request to `main`.
- **Branching Strategy:** 
  - `main` - production-ready code
  - `dev` - active development
  - `feature/*` - new features
  - `bugfix/*` - patches and fixes
- **Code Review:** All changes require pull requests and at least one approval.
- **Semantic Versioning:** Releases are tagged as `MAJOR.MINOR.PATCH` (e.g., v1.0.0).

---

## Testing

- **Unit & Integration Testing:** Jest for backend, manual and automated tests for frontend.
- **Test Cases Include:**
  - User registration and login
  - Order placement and token generation
  - SQL/NoSQL injection prevention
  - Secure payment and HTTPS validation
  - Stress and performance testing (e.g., 1000 concurrent users)
- **Validation:** Both frontend and backend input validation, JWT authentication, and error handling.

---

## Screenshots

> _Add screenshots of the Home page, Login, Signup, Menu, Cart, Orders, and Admin Dashboard here._

---

## Team

- **Abhay Chougala** (1RVU23CSE013)
- **Aditya Kumar** (1RVU23CSE029)
- **Arjun Mallya Ullal** (1RVU23CSE074)
- **Gururaj Acharya** (1RVU23CSE175)

Guided by: **Prof. Harikumar SV**, School of Computer Science and Engineering, RV University

---

## Future Enhancements

- Mobile app versions (Android/iOS)
- QR code-based token scanning
- Real-time inventory management
- Advanced notification system (WebSockets/Firebase)
- Role-based access control (RBAC)
- AI-based menu recommendations
- Offline support and PWA features
- Dockerization and cloud deployment

---

## License

This project is for academic purposes at RV University. For any reuse or extension, please contact the authors.

---

> _Menu Mingos: Digitizing and simplifying canteen food ordering for institutions._

Citations:
[1] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/69478601/21ed7013-4aff-4148-802f-ea554af79cf2/Agile_finalReportSEE.pdf
[2] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/69478601/8620a294-705f-4172-8fb8-ebfbd2db784e/AgileDevOpsProject_reportSEE.pdf
[3] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/69478601/21ed7013-4aff-4148-802f-ea554af79cf2/Agile_finalReportSEE.pdf
[4] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/69478601/8620a294-705f-4172-8fb8-ebfbd2db784e/AgileDevOpsProject_reportSEE.pdf

---
Answer from Perplexity: pplx.ai/share

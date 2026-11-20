
# CyberTrack — Cybersecurity Incident Tracking System
Github link:https://github.com/davidabati1960/INFR3120-Fall26-Project



CyberTrack is a full-stack web application designed to report, track, and manage cybersecurity incidents. Users can log new incidents with severity levels and categories, and monitor open reports through a centralized dashboard.

## Features
* **Report Incidents:** Submit detailed cybersecurity reports including title, category (*Unauthorized Access, Phishing, Malware, Data Exposure, Other*), description, and severity (*Low, Medium, High*).
* **Client-Side Validation:** Real-time form validation ensuring complete and accurate incident submissions.
* **Incident Dashboard:** View and monitor all reported incidents and their current statuses (`OPEN`, etc.) in a clean, responsive table.
* **Cloud Database Integration:** Persistent data storage powered by MongoDB Atlas and Mongoose.

## Tech Stack
* **Backend:** Node.js, Express.js
* **Frontend:** EJS (Embedded JavaScript Templates), HTML5, CSS3, Bootstrap 5, Font Awesome
* **Database:** MongoDB Atlas, Mongoose


## Project Structure
```text
├── config/
│   ├── app.js          # Express app configuration & middleware
│   ├── database.js     # MongoDB Atlas connection logic
│   └── .env            # Environment variables (ignored by Git)
├── public/
│   ├── scripts/        # Client-side JavaScript (e.g., incident.js)
│   └── stylesheets/    # Custom CSS
├── routes/             # Express route handlers
├── views/
│   ├── partials/       # Reusable EJS components (header, nav, footer)
│   ├── index.ejs       # Homepage
│   ├── incident.ejs    # Report an Incident form
│   └── dashboard.ejs   # Incident Dashboard view
├── .gitignore
├── package.json
└── server.js           # Entry point
```



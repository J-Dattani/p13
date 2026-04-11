# Jaymin Dattani Portfolio

Full-stack portfolio website with React frontend, Node.js/Express backend, and MongoDB Atlas for contact form storage.

## Project Structure
```
portfolio-jaymin/
├── frontend/          # React app with Bootstrap
│   ├── src/
│   │   ├── App.js    # Main component with all sections
│   │   ├── index.css # Custom styles
│   │   └── index.js  # Entry point
│   └── public/
├── api/              # Vercel serverless API
│   ├── index.js      # Express server with MongoDB
│   └── package.json
└── vercel.json       # Vercel deployment config
```

## Features
- Hero Section with contact info and social links
- About Me section
- Skills (Frontend, Backend, Tools, Soft Skills)
- Education history
- Experience (3 positions)
- Projects (4 major projects)
- Certifications
- Achievements & Patent publication
- Contact Form with MongoDB storage

## Local Development

### Frontend only:
```bash
cd frontend
npm install
npm start
```

### Backend + Frontend:
```bash
# Terminal 1 - Backend
cd api
npm install
node index.js

# Terminal 2 - Frontend
cd frontend
npm install
npm start
```

## Deployment on Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd portfolio-jaymin
vercel
```

3. Set environment variable in Vercel dashboard:
   - Go to Project Settings > Environment Variables
   - Add: `MONGODB_URI` = `mongodb+srv://jaymindattani141327_db_user:pixelpass123@pixelpass.pm2xuou.mongodb.net/portfolio?retryWrites=true&w=majority&appName=PixelPass`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/ | Health check |
| GET | /api/contacts | Get all contact messages |
| POST | /api/contacts | Submit contact form |

## Tech Stack
- **Frontend:** React, Bootstrap 5, Bootstrap Icons
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas (Mongoose)
- **Deployment:** Vercel

## Contact Form Data Structure
```json
{
  "name": "string",
  "email": "string", 
  "subject": "string",
  "message": "string",
  "date": "auto-generated"
}
```

## Created Sections
1. Hero - Name, title, social links
2. About - Summary from resume
3. Skills - 4 categories with badges
4. Education - 3 institutions
5. Experience - Web Dev Intern, Campus Ambassador, Contributor
6. Projects - Dog Health Platform, E-Commerce, Tourism Booking, Search4Career
7. Certifications - Postman, Alison, Oracle
8. Achievements - Patent & Letter of Appreciation
9. Contact - Form with MongoDB integration

## Notes
- Contact form stores messages in MongoDB Atlas
- Frontend is fully responsive with Bootstrap
- All content populated from your resume

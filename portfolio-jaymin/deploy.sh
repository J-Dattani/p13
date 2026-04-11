#!/bin/bash
# Deployment script for Vercel

echo "Building frontend..."
cd frontend
npm install
npm run build
cd ..

echo "Deploying to Vercel..."
vercel --prod

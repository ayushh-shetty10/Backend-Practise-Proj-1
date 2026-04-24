# Backend Proj1

Backend Proj1 is a practice full-stack image posting app, built primarily to learn backend development. The project focuses on building a small API server that accepts image uploads, stores post data in MongoDB, and returns posts for a feed-style UI.

## What It Does

- Uploads an image with a caption from the frontend.
- Stores uploaded image files through ImageKit.
- Saves post metadata in MongoDB.
- Serves a posts API so the frontend can render a feed.

## Tech Stack

- Backend: Node.js, Express
- Database: MongoDB with Mongoose
- File upload: Multer
- Image storage: ImageKit
- Frontend: React with Vite
- Shared utilities: CORS, dotenv

## Main APIs

The backend currently exposes these endpoints:

- `POST /create-post` - accepts a multipart form upload with an image and caption, uploads the image to ImageKit, and saves the post in MongoDB.
- `GET /posts` - returns all saved posts.

## Backend Flow

1. The frontend sends a form submission with an image and caption.
2. Multer keeps the image in memory.
3. The image buffer is uploaded to ImageKit.
4. The returned image URL and caption are stored in MongoDB.
5. The frontend requests `/posts` to display the feed.


## Project Structure

- `Backend/` - Express API, database connection, model, and upload service
- `Frontend/` - React/Vite client used to interact with the backend

## Notes

This is intentionally a learning project. The backend is the main part of the app, and the current scope is centered on API handling, image upload flow, and MongoDB persistence.
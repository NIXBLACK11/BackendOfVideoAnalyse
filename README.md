# LoginBackend

This repository contains an Express.js API providing login functionality, along with additional routes for user management and video handling.

## Installation
1. Clone the repository:
```bash
git clone https://github.com/NIXBLACK11/BackendOfVideoAnalyse.git
```
2. Install dependencies:
```bash
npm install
```
3. Create a .env file and add your environment variables:
```makefile
SECRET=your_secret_key
MONGO_URL=your_mongo_url
PORT=your_port
```
4. Start the server:
```sql
npm start
```
## Routes
1. GET /api/
- Retrieves information about all users.
- Middleware: None
2. POST /api/signup
- Creates a new user.
- Middleware: None
3. POST /api/signin
- Signs in an existing user.
- Middleware: None
4. GET /api/check/:username
- Checks the validity of a user.
- Middleware: userMiddleware
5. GET /api/:username
- Retrieves information about a specific user.
- Middleware: None
6. POST /api/:username/videoData
- Adds metadata for a video uploaded by the user.
- Middleware: userMiddleware, checkSubscriptionLimit
7. POST /api/:username/video
- Adds a video for a user and analyzes its content.
- Middleware: userMiddleware, uploadVideoMiddleware
## Middleware
1. userMiddleware
- Checks if the user is valid and authenticated.
2. uploadVideoMiddleware
- Handles the file upload process for videos.
3. checkSubscriptionLimit
- Checks if the user has reached the subscription limit before uploading a video.
4. rateLimitMiddleware
- Limits the number of requests a client can make within a specified time window.
## Dependencies
- dotenv: Loads environment variables from a .env file.
- axios: Used for making HTTP requests.
- express: Web framework for Node.js.
- jsonwebtoken: Generates and verifies JSON Web Tokens.
## Contributing
Contributions are welcome! Feel free to open issues or pull requests for any improvements or new features.
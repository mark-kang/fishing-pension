# Sinchang Fishing Lodging

Welcome to the Sinchang Fishing Lodging project! This project is designed to provide a comprehensive lodging service for fishermen visiting Sinchang Windmill Village, Hyeongyeong-myeon, Jeju Island. Our service includes fishing boat rentals and a user-friendly reservation system.

## Project Structure

The project is divided into two main parts: the frontend and the backend.

### Frontend

The frontend is built using React and TypeScript, providing a modern and responsive user interface. The key components include:

- **Home**: The landing page with information about our lodging service.
- **Lodging**: Details about the lodging options available.
- **Boats**: Showcases the fishing boat rental options.
- **Booking**: Contains the booking form for reservations.
- **About**: Information about the location and services.

#### Key Files

- `frontend/public/index.html`: Main HTML entry point.
- `frontend/src/main.tsx`: Entry point for the React application.
- `frontend/src/App.tsx`: Main App component for routing and layout.
- `frontend/src/components`: Contains reusable components like Header, Footer, and BookingForm.

### Backend

The backend is built using TypeScript and handles API requests for lodging and booking data. It includes:

- **Controllers**: Manage the logic for bookings, boats, and lodgings.
- **Models**: Define the structure of booking, boat, and lodging data.
- **Routes**: Main routing configuration for the API.

#### Key Files

- `backend/src/index.ts`: Entry point for the backend application.
- `backend/src/controllers`: Functions for handling requests.
- `backend/src/models`: Data models for the application.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

3. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

4. Start the development servers:
   - For the frontend:
     ```
     npm run dev
     ```
   - For the backend:
     ```
     npm run start
     ```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

Thank you for considering Sinchang Fishing Lodging for your fishing adventures in Jeju Island! We hope you enjoy your stay and the beautiful surroundings.
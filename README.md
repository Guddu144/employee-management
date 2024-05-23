Employee Management	

This is an Employee Management system. Follow the instructions below to set up and run the project

Prerequisites
1) Node.js
2) Docker

Setup
. Clone the Repository
	git clone https://github.com/your-username/employee-management.git
	cd employee-management

. Create a .env File
	Create a .env file at the root of the project based on the structure of .env.example.

. Install Dependencies
	npm install

. Build the Docker Image
	docker build -t employee-management-be-image .

.	Start the Project
	docker compose up

.	Access the Application
	Open your browser and go to http://localhost:PORT (replace PORT with the actual port number).

Database
We're using schema.prisma for database migrations. The DATABASE_URL in your .env file should be:
DATABASE_URL="mysql://root:password123@database:3306/employe_db"

Database migrations and seeding are automatically handled by the docker-compose.yaml file.

Accessing the System
You can log in with the following credentials:

Email: admin@gmail.com
Password: admin123


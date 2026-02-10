# Application Logs – PrimeTrade Frontend Developer Task

## Backend Server Startup
Server running on port 5000  
MongoDB connected successfully

## Authentication Flow
POST /api/auth/register → 201 Created  
POST /api/auth/login → 200 OK (JWT issued)

## Protected Routes
GET /api/user/profile → 200 OK (JWT validated)
GET /api/tasks → 200 OK

## CRUD Operations
POST /api/tasks → 201 Created
PUT /api/tasks/:id → 200 Updated
DELETE /api/tasks/:id → 200 Deleted

## Error Handling Validation
POST /api/auth/login (invalid credentials) → 401 Unauthorized
Access protected route without token → 401 Unauthorized

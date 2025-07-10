# /users/register Endpoint

## Endpoint

`POST /users/register`

## Description
This endpoint allows a new user to register by providing their first name, last name, email, and password. The endpoint validates the input, checks for existing users with the same email, hashes the password, creates the user, and returns a JWT token upon successful registration.

## Request Body
```
{
  "fullName": {
    "firstName": "string (min 3 chars)",
    "lastName": "string (optional)"
  },
  "email": "string (valid email)",
  "password": "string (min 6 chars)"
}
```

## Responses

- **201 Created**
  - User registered successfully. Returns the created user object and a JWT token.
  - Example:
    ```json
    {
      "user": { /* user object */ },
      "token": "jwt_token_here"
    }
    ```

- **400 Bad Request**
  - Validation failed (e.g., invalid email, short password, missing fields) or user already exists with the provided email.
  - Example:
    ```json
    {
      "errors": [
        { "msg": "invalid Email", ... }
      ]
    }
    ```
    or
    ```json
    {
      "message": "User already exists with this email"
    }
    ```

- **500 Internal Server Error**
  - Unexpected server error.

## Validation Rules
- `email`: Must be a valid email address.
- `fullName.firstName`: Minimum 3 characters.
- `password`: Minimum 6 characters.

## Example Request
```
POST /users/register
Content-Type: application/json

{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Example Success Response
```
Status: 201 Created
{
  "user": {
    "_id": "...",
    "fullName": { "firstName": "John", "lastName": "Doe" },
    "email": "john.doe@example.com"
  },
  "token": "..."
}
```

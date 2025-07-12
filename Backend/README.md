
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

---

# /users/login Endpoint

## Endpoint

`GET /users/login`

## Description
This endpoint allows an existing user to log in by providing their email and password. The endpoint validates the input, checks if the user exists, verifies the password, and returns a JWT token upon successful authentication.

## Request Body
```
{
  "email": "string (valid email)",
  "password": "string (min 6 chars)"
}
```

## Responses

- **200 OK**
  - Login successful. Returns the user object and a JWT token.
  - Example:
    ```json
    {
      "user": { /* user object */ },
      "token": "jwt_token_here",
      "message": "Login successfuly"
    }
    ```

- **400 Bad Request**
  - Validation failed (e.g., invalid email, short password, missing fields).
  - Example:
    ```json
    {
      "errors": [
        { "msg": "invalid Email", ... }
      ]
    }
    ```

- **401 Unauthorized**
  - Invalid email or password.
  - Example:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

- **500 Internal Server Error**
  - Unexpected server error.

## Validation Rules
- `email`: Must be a valid email address.
- `password`: Minimum 6 characters.

## Example Request
```
GET /users/login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Example Success Response
```
Status: 200 OK
{
  "user": {
    "_id": "...",
    "fullName": { "firstName": "John", "lastName": "Doe" },
    "email": "john.doe@example.com"
  },
  "token": "...",
  "message": "Login successfuly"
}
```

---

# /users/profile Endpoint

## Endpoint

`GET /users/profile`

## Description
Returns the authenticated user's profile information. Requires a valid JWT token (sent via cookie or Authorization header). The endpoint is protected by authentication middleware.

## Request
- No request body required. JWT token must be provided in cookie or Authorization header.

## Responses

- **200 OK**
  - Returns the user profile object.
  - Example:
    ```json
    {
      "_id": "...",
      "fullName": { "firstName": "John", "lastName": "Doe" },
      "email": "john.doe@example.com"
    }
    ```

- **401 Unauthorized**
  - Missing or invalid token.
  - Example:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **500 Internal Server Error**
  - Unexpected server error.

---

# /users/logout Endpoint

## Endpoint

`GET /users/logout`

## Description
Logs out the authenticated user by clearing the JWT token cookie and blacklisting the token. Requires a valid JWT token (sent via cookie or Authorization header). The endpoint is protected by authentication middleware.

## Request
- No request body required. JWT token must be provided in cookie or Authorization header.

## Responses

- **200 OK**
  - Logout successful. Returns a message confirming logout.
  - Example:
    ```json
    {
      "message": "User Loggout Successfuly"
    }
    ```

- **401 Unauthorized**
  - Missing or invalid token.
  - Example:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **500 Internal Server Error**
  - Unexpected server error.

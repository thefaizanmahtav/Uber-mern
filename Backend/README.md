
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

---

# /captains/register Endpoint

## Endpoint

`POST /captains/register`

## Description
This endpoint allows a new captain to register by providing their personal details and vehicle information. The endpoint validates the input, checks for existing captains with the same email, hashes the password, creates the captain, and returns a JWT token upon successful registration.

## Request Body
```
{
  "fullName": {
    "firstName": "string (min 3 chars)",
    "lastName": "string (min 3 chars)"
  },
  "email": "string (valid email)",
  "password": "string (min 6 chars)",
  "vehicle": {
    "color": "string (min 3 chars)",
    "plate": "string (min 3 chars)",
    "capacity": "number (min 1)",
    "vehicleType": "string (car, bike, autoRickshaw)"
  }
}
```

## Responses

- **201 Created**
  - Captain registered successfully. Returns the created captain object and a JWT token.
  - Example:
    ```json
    {
      "captain": { /* captain object */ },
      "token": "jwt_token_here"
    }
    ```

- **400 Bad Request**
  - Validation failed (e.g., invalid email, short password, missing fields) or captain already exists with the provided email.
  - Example:
    ```json
    {
      "errors": [
        { "msg": "Invalid email", ... }
      ]
    }
    ```
    or
    ```json
    {
      "message": "Captain already exists with this email"
    }
    ```

- **500 Internal Server Error**

---

# /captains/login Endpoint

## Endpoint

`POST /captains/login`

## Description
Allows a captain to log in by providing their email and password. Validates input, checks credentials, and returns a JWT token upon successful authentication.

## Request Body
```
{
  "email": "string (valid email)",
  "password": "string (min 6 chars)"
}
```

## Responses

- **200 OK**
  - Login successful. Returns the captain object and a JWT token.
  - Example:
    ```json
    {
      "captain": { /* captain object */ },
      "token": "jwt_token_here",
      "message": "Captain Login Successfuly"
    }
    ```

- **400 Bad Request**
  - Validation failed (e.g., invalid email, short password, missing fields).
  - Example:
    ```json
    {
      "errors": [
        { "msg": "Invalid email", ... }
      ]
    }
    ```

- **401 Unauthorized**
  - Invalid email or password.
  - Example:
    ```json
    {
      "message": "invalid email or password"
    }
    ```

- **500 Internal Server Error**
  - Unexpected server error.

## Validation Rules
- `email`: Must be a valid email address.
- `password`: Minimum 6 characters.

## Example Request
```
POST /captains/login
Content-Type: application/json

{
  "email": "alex.smith@example.com",
  "password": "securepass"
}
```

## Example Success Response
```
Status: 200 OK
{
  "captain": {
    "_id": "...",
    "fullName": { "firstName": "Alex", "lastName": "Smith" },
    "email": "alex.smith@example.com"
  },
  "token": "...",
  "message": "Captain Login Successfuly"
}
```

---

# /captains/profile Endpoint

## Endpoint

`GET /captains/profile`

## Description
Returns the authenticated captain's profile information. Requires a valid JWT token (sent via cookie or Authorization header). The endpoint is protected by authentication middleware.

## Request
- No request body required. JWT token must be provided in cookie or Authorization header.

## Responses

- **200 OK**
  - Returns the captain profile object.
  - Example:
    ```json
    {
      "captain": { /* captain object */ }
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

# /captains/logout Endpoint

## Endpoint

`POST /captains/logout`

## Description
Logs out the authenticated captain by clearing the JWT token cookie and blacklisting the token. Requires a valid JWT token (sent via cookie or Authorization header). The endpoint is protected by authentication middleware.

## Request
- No request body required. JWT token must be provided in cookie or Authorization header.

## Responses

- **200 OK**
  - Logout successful. Returns a message confirming logout.
  - Example:
    ```json
    {
      "message": "Captain Loggout Successfuly"
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

## Validation Rules
- `email`: Must be a valid email address.
- `fullName.firstName`: Minimum 3 characters.
- `fullName.lastName`: Minimum 3 characters.
- `password`: Minimum 6 characters.
- `vehicle.color`: Minimum 3 characters.
- `vehicle.plate`: Minimum 3 characters.
- `vehicle.capacity`: Must be a number and at least 1.
- `vehicle.vehicleType`: Must be one of "car", "bike", "autoRickshaw".

## Example Request
```
POST /captains/register
Content-Type: application/json

{
  "fullName": {
    "firstName": "Alex",
    "lastName": "Smith"
  },
  "email": "alex.smith@example.com",
  "password": "securepass",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Example Success Response
```
Status: 201 Created
{
  "captain": {
    "_id": "...",
    "fullName": { "firstName": "Alex", "lastName": "Smith" },
    "email": "alex.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  },
  "token": "..."
}
```

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

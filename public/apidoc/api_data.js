define({ "api": [
  {
    "type": "post",
    "url": "http://<base_path>/auth",
    "title": "Login",
    "name": "Login",
    "group": "Auth",
    "description": "<p>User login API</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>unique jwt token for further API calls. This will be available in the response header.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"anoop.pr@experionglobal.com\",\n    \"password\": \"Abc@1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"_id\":\"58a9b4c77f2ce72c6748c672\",\n     \"email\":\"anoop.pr@experionglobal.com\",\n     \"name\":\"Anoop P R\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"Invalid login credentials\",\n    \"status\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/auth/auth.doc.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "http://<base_path>/auth",
    "title": "Logout",
    "name": "Logout",
    "group": "Auth",
    "description": "<p>User logout API</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"OK\",\n    \"status\": 200\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/auth/auth.doc.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/users/me",
    "title": "Get logged in user information",
    "name": "Profile",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"_id\":\"58a9b4c77f2ce72c6748c672\",\n     \"email\":\"anoop.pr@experionglobal.com\",\n     \"name\":\"Anoop P R\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"Unauthorized\",\n    \"status\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.doc.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Signup user",
    "name": "Signup",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n      \"name\": \"Anoop P R\",\n    \"email\": \"anoop.pr@experionglobal.com\",\n    \"password\": \"Abc@1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"_id\":\"58a9b4c77f2ce72c6748c672\",\n     \"email\":\"anoop.pr@experionglobal.com\",\n     \"name\":\"Anoop P R\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"Bad Request\",\n    \"status\": 400,\n    \"data\": {\n        \"code\": 11000,\n        \"index\": 0,\n        \"errmsg\": \"E11000 duplicate key error collection: epst.users index: email_1 dup key: { : \\\"anoop.pr@experionglobal.com\\\" }\",\n        \"op\": {\n            \"name\": \"Anoop P R\",\n            \"email\": \"anoop.pr@experionglobal.com\",\n            \"_id\": \"59b94a3ba2d4e82c8b494781\",\n            \"tokens\": []\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.doc.js",
    "groupTitle": "Users"
  }
] });

define({ "api": [
  {
    "group": "Bugs",
    "version": "1.0.0",
    "type": "get",
    "url": "http://api.bugtracker.gq/api/v1/bugs/allBugs",
    "title": "To get all Bugs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"All Bug Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"bugId\": \"pYd3NsrdB\",\n            \"bugTitle\": \"Angular app hosting\",\n            \"reporterId\": \"0uDHZaVDK\",\n            \"reporterName\": \"Siddharth Singh\",\n            \"status\": \"in-test\",\n            \"description\": \"Dummy Description\",\n            \"comments\": [],\n            \"watchers\": [],\n            \"reportedOn\": \"2018-10-11T12:55:09.161Z\",\n            \"assignee\": \"Ranjeet Singh\"\n        },\n        {\n            \"bugId\": \"Wl7Gfp2Ad\",\n            \"bugTitle\": \"Any bug\",\n            \"reporterId\": \"0uDHZaVDK\",\n            \"reporterName\": \"Siddharth Singh\",\n            \"status\": \"in-progress\",\n            \"description\": \"Des-test\",\n            \"comments\": [],\n            \"watchers\": [],\n            \"reportedOn\": \"2018-10-11T12:55:09.161Z\",\n            \"assignee\": \"Ranjeet Singh\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/BugRoute.js",
    "groupTitle": "Bugs",
    "name": "GetHttpApiBugtrackerGqApiV1BugsAllbugs"
  },
  {
    "group": "Bugs",
    "version": "1.0.0",
    "type": "get",
    "url": "http://api.bugtracker.gq/api/v1/bugs/:bugId/getBug",
    "title": "To get single bug details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "bugId",
            "description": "<p>Bug ID of the bug. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Bug details found\",\n    \"status\": 200,\n    \"data\": {\n        \"bugId\": \"Wl7Gfp2Ad\",\n        \"bugTitle\": \"Test Bug\",\n        \"reporterId\": \"0uDHZaVDK\",\n        \"reporterName\": \"Siddharth Singh\",\n        \"status\": \"in-progress\",\n        \"description\": \"Description-edited\",\n        \"comments\": [],\n        \"watchers\": [],\n        \"reportedOn\": \"2018-10-11T12:55:09.161Z\",\n        \"_id\": \"5bbfa299495b8a177cf4bc34\",\n        \"assignee\": \"Ranjeet Singh\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No Bug Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/BugRoute.js",
    "groupTitle": "Bugs",
    "name": "GetHttpApiBugtrackerGqApiV1BugsBugidGetbug"
  },
  {
    "group": "Bugs",
    "version": "1.0.0",
    "type": "post",
    "url": "http://api.bugtracker.gq/api/v1/bugs/registerBug",
    "title": "To register bug.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "bugId",
            "description": "<p>bugId of bug. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "bugTitle",
            "description": "<p>Title of the bug. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporterId",
            "description": "<p>ID of the reporter. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporterName",
            "description": "<p>Name of the Reporter. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the bug. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Brief Description of the bug. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "attachments",
            "description": "<p>Array to store related attachments of bug. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assignee",
            "description": "<p>Assignee to whom reporter will assign his/her bug to fix. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Bug registered successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"bugId\": \"CcvsI9xtn\"\n        \"bugTitle\": \"Ck editor not responding\"\n        \"reporterId\": \"eKOTSdkn7\"\n        \"reporterName\": \"Siddharth Singh\"\n        \"status\": \"in-progress\"\n        \"description\": \"This is Test Description\"\n        \"assignee\": \"Ranjeet Singh\"\n        \"comments\": [],\n        \"watchers\": [],\n        \"reportedOn\": \"2018-09-23T11:50:23.820Z\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to register bug\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/BugRoute.js",
    "groupTitle": "Bugs",
    "name": "PostHttpApiBugtrackerGqApiV1BugsRegisterbug"
  },
  {
    "group": "Bugs",
    "version": "1.0.0",
    "type": "put",
    "url": "http://api.bugtracker.gq/api/v1/bugs/:bugId/deleteBug",
    "title": "To delete single bug.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "bugId",
            "description": "<p>Bug ID of the bug. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Bug Deleted\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No Bug Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/BugRoute.js",
    "groupTitle": "Bugs",
    "name": "PutHttpApiBugtrackerGqApiV1BugsBugidDeletebug"
  },
  {
    "group": "Bugs",
    "version": "1.0.0",
    "type": "put",
    "url": "http://api.bugtracker.gq/api/v1/bugs/:bugId/editBug",
    "title": "To edit single bug.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "bugId",
            "description": "<p>Bug ID of the bug. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Bug details edited/updated successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No Bug Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/BugRoute.js",
    "groupTitle": "Bugs",
    "name": "PutHttpApiBugtrackerGqApiV1BugsBugidEditbug"
  },
  {
    "group": "Comments",
    "version": "1.0.0",
    "type": "get",
    "url": "http://api.bugtracker.gq/api/v1/comments/:bugId/getCommentsOnBug",
    "title": "To get all comments on bug.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "bugId",
            "description": "<p>Bug ID of the bug. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Comment details found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"commentId\": \"cMeUUHJZs\",\n            \"bugId\": \"Wl7Gfp2Ad\",\n            \"userId\": \"0uDHZaVDK\",\n            \"userName\": \"Siddharth Singh\",\n            \"comment\": \"Text Comment1\",\n            \"commentedOn\": \"2018-10-11T12:55:09.137Z\",\n            \"_id\": \"5bbfa969495b8a177cf4bc35\",\n            \"__v\": 0\n        },\n        {\n            \"commentId\": \"rkT0BbzSM\",\n            \"bugId\": \"Wl7Gfp2Ad\",\n            \"userId\": \"0uDHZaVDK\",\n            \"userName\": \"Siddharth Singh\",\n            \"comment\": \"Text Comment2\",\n            \"commentedOn\": \"2018-10-11T12:55:09.137Z\",\n            \"_id\": \"5bbfa978495b8a177cf4bc36\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No comment details Found\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/comment.js",
    "groupTitle": "Comments",
    "name": "GetHttpApiBugtrackerGqApiV1CommentsBugidGetcommentsonbug"
  },
  {
    "group": "Comments_APIs",
    "version": "1.0.0",
    "type": "post",
    "url": "http://api.bugtracker.gq/api/v1/comments/addComment",
    "title": "To add comment.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "bugId",
            "description": "<p>of bug. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>Name of the User. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment of user. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Comment added\",\n    \"status\": 200,\n    \"data\": {\n        \"bugId\": \"CcvsI9xtn\"\n        \"userId\": \"eKOTSdkn7\"\n        \"userName\": \"Siddharth Singh\"\n        \"comment\": \"Dummy text comment\"\n        \"commentedOn\": \"2018-09-23T11:50:23.820Z\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to add comment\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/comment.js",
    "groupTitle": "Comments_APIs",
    "name": "PostHttpApiBugtrackerGqApiV1CommentsAddcomment"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "get",
    "url": "http://api.bugtracker.gq/api/v1/users/all",
    "title": "To get All users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"eKOTSdkn7\",\n            \"firstName\": \"Siddharth\",\n            \"lastName\": \"Singh\",\n            \"password\": \"$2b$10$fQHYrFiuqMhDkRZDOCWPeuRAu25vEDAmdTYOrFhw.3CSdSJS/GL2e\",\n            \"email\": \"takeatour@gmail.com\",\n            \"mobileNumber\": \" 91-9431543231\",\n            \"country\": \"IN\",\n            \"createdOn\": \"2018-09-19T06:40:15.000Z\",\n            \"modifiedOn\": \"2018-09-19T06:40:15.000Z\"\n        },\n        ..........\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoute.js",
    "groupTitle": "Users",
    "name": "GetHttpApiBugtrackerGqApiV1UsersAll"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "get",
    "url": "http://api.bugtracker.gq/api/v1/users/view/:userId",
    "title": "To get details of user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"eKOTSdkn7\",\n        \"firstName\": \"Siddharth\",\n        \"lastName\": \"Singh\",\n        \"email\": \"takeatour@gmail.com\",\n        \"mobileNumber\": \" 91-9431543231\",\n        \"country\": \"IN\",\n        \"createdOn\": \"2018-09-19T06:40:15.000Z\",\n        \"modifiedOn\": \"2018-09-19T06:40:15.000Z\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoute.js",
    "groupTitle": "Users",
    "name": "GetHttpApiBugtrackerGqApiV1UsersViewUserid"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "http://api.bugtracker.gq/api/v1/users/login",
    "title": "Login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n\"error\": false,\n\"message\": \"Login Successful\",\n\"status\": 200,\n\"data\": {\n    \"authToken\": \"OiJIUzVCJ9DkxLXVuZGVmaW5W50cnkiOiJJTiIsInVzZXJWZXJpZmljYXRpb25TdGF0dXMiOnRydWUsInJlcXVlc3RzIjpbXSwiZnJpZW5kcyI6W3siZnJpZW5kSWQiOiJTS294WTYzZTUiLCJmcmllbmROYW1lIjoiUmFqdSBSYXN0b2dpIiwiYWN0.\",\n    \"userDetails\": {\n        \"userId\": \"eKOTSdkn7\",\n        \"firstName\": \"Siddharth\",\n        \"lastName\": \"Singh\",\n        \"email\": \"takeatour@gmail.com\",\n        \"mobileNumber\": \" 91-9431543231\",\n        \"country\": \"IN\",\n    \n    }\n}\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n              \"error\": true,\n              \"message\": \"Login Failed\",\n              \"status\": 500,\n              \"data\": null\n          }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n                  \"error\": true,\n                  \"message\": \"Wrong Password.Login Failed\",\n                  \"status\": 400,\n                  \"data\": null\n              }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoute.js",
    "groupTitle": "Users",
    "name": "PostHttpApiBugtrackerGqApiV1UsersLogin"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "http://api.bugtracker.gq/api/v1/users/logout",
    "title": "Logout.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoute.js",
    "groupTitle": "Users",
    "name": "PostHttpApiBugtrackerGqApiV1UsersLogout"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "http://api.bugtracker.gq/api/v1/users/signup",
    "title": "To Signup user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of ToDo account. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email ID of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile number of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "country",
            "description": "<p>Country of the user. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"String\",\n        \"firstName\": \"String\",\n        \"lastName\": \"String\",\n        \"password\": \"String\"\n        \"email\": \"String\",\n        \"mobileNumber\":\"Number\",\n        \"country\": \"String\"\n        \"country\": \"String\",\n        \"createdOn\": \"Date\",  \n        \"modifiedOn\": \"Date\"                                  \n        \"_id\": \"5b816074f0fdc921608c6660\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to create new User\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"User Already Present With this Email\",\n    \"status\": 403,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoute.js",
    "groupTitle": "Users",
    "name": "PostHttpApiBugtrackerGqApiV1UsersSignup"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "put",
    "url": "http://api.bugtracker.gq/api/v1/users/:userId/delete",
    "title": "To delete single user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID of the user. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the user successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No User Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoute.js",
    "groupTitle": "Users",
    "name": "PutHttpApiBugtrackerGqApiV1UsersUseridDelete"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "http://api.bugtracker.gq/api/v1/users/recovery-password",
    "title": "api for Password Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password reset Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"error\": false,\n        \"message\": \"Password reset successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"n\": 1,\n            \"nModified\": 1,\n            \"ok\": 1\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoute.js",
    "groupTitle": "users",
    "name": "PostHttpApiBugtrackerGqApiV1UsersRecoveryPassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "http://api.bugtracker.gq/api/v1/users/update-password",
    "title": "api for Updating Password after Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recoveryPassword",
            "description": "<p>recoveryPassword of the user recieved on Email. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>new password of the user . (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password Update Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"error\": false,\n        \"message\": \"Password Updated successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"n\": 1,\n            \"nModified\": 1,\n            \"ok\": 1\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoute.js",
    "groupTitle": "users",
    "name": "PostHttpApiBugtrackerGqApiV1UsersUpdatePassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/verifyEmail",
    "title": "api for Verifying User Email Id.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User email verified\",\n    \"status\": 200,\n    \"data\": \"None\"\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoute.js",
    "groupTitle": "users",
    "name": "PutApiV1UsersVerifyemail"
  }
] });

/* --------------------
/* SIGNUP API
/* --------------------
/**
* @api {post} /users Signup user
* @apiName Signup
* @apiGroup Users
*
* @apiHeader {String} x-auth Users unique access-key.
*
* @apiParamExample {json} Request-Example:
*   {
        "name": "Anoop P R",
*       "email": "anoop.pr@experionglobal.com",
*       "password": "Abc@1234"
*   }
* 
* @apiSuccessExample {json} Success-Response:
*  HTTP/1.1 200 OK
*  {
*       "_id":"58a9b4c77f2ce72c6748c672",
*       "email":"anoop.pr@experionglobal.com",
*       "name":"Anoop P R"
*  }
* 
* @apiErrorExample {json} Error-Response:
*   HTTP/1.1 404 Not Found
*   {
*       "message": "Bad Request",
*       "status": 400,
*       "data": {
*           "code": 11000,
*           "index": 0,
*           "errmsg": "E11000 duplicate key error collection: epst.users index: email_1 dup key: { : \"anoop.pr@experionglobal.com\" }",
*           "op": {
*               "name": "Anoop P R",
*               "email": "anoop.pr@experionglobal.com",
*               "_id": "59b94a3ba2d4e82c8b494781",
*               "tokens": []
*           }
*       }
*   }   
*/


/* --------------------
/* PROFILE API
/* --------------------
/**
* @api {get} /users/me Get logged in user information
* @apiName Profile
* @apiGroup Users
*
* @apiHeader {String} x-auth Users unique access-key.
*
* @apiSuccessExample {json} Success-Response:
*  HTTP/1.1 200 OK
*  {
*       "_id":"58a9b4c77f2ce72c6748c672",
*       "email":"anoop.pr@experionglobal.com",
*       "name":"Anoop P R"
*  }
*
* @apiErrorExample {json} Error-Response:
*   HTTP/1.1 404 Not Found
*   {
*       "message": "Unauthorized",
*       "status": 401
*   } 
*/
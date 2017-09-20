/* --------------------
/* LOGIN API
/* --------------------
/**
* @api {post} http://<base_path>/auth Login
* @apiName Login
* @apiGroup Auth
* @apiDescription User login API
* @apiHeader {String} x-auth unique jwt token for further API calls. This will be available in the response header.
* 
* @apiParamExample {json} Request-Example:
*   {
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
*       "message": "Invalid login credentials",
*       "status": 401
*   }      
*/


/* --------------------
/* LOGOUT API
/* --------------------
/**
* @api {delete} http://<base_path>/auth Logout
* @apiName Logout
* @apiGroup Auth
* @apiDescription User logout API
*
* @apiHeader {String} x-auth Users unique access-key.
*
* @apiSuccessExample {json} Success-Response:
*   HTTP/1.1 200 OK
*   {
*       "message": "OK",
*       "status": 200
*   }    
*/
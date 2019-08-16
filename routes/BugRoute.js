const express = require('express');
const router = express.Router();

const bugsController = require("../controllers/BugController");
const appConfig = require("../config/appConfig")

const authentication = require('../middlewares/auth')


let setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/bugs`;

    app.post(`${baseUrl}/registerBug`, authentication.isAuthorized, bugsController.registerBug );

    /**
     * @apiGroup Bugs
     * @apiVersion  1.0.0
     * @api {post}  http://api.bugtracker.gq/api/v1/bugs/registerBug To register bug.
     *
     * @apiParam {string} bugId bugId of bug. (body params)
     * @apiParam {string} bugTitle Title of the bug. (body params)
     * @apiParam {string} reporterId ID of the reporter. (body params)
     * @apiParam {string} reporterName Name of the Reporter. (body params)
     * @apiParam {string} status Status of the bug. (body params)
     * @apiParam {string} description Brief Description of the bug. (body params)
     * @apiParam {string} attachments Array to store related attachments of bug. (body params)
     * @apiParam {string} assignee Assignee to whom reporter will assign his/her bug to fix. (body params)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
                    {
                        "error": false,
                        "message": "Bug registered successfully",
                        "status": 200,
                        "data": {
                            "bugId": "CcvsI9xtn"
                            "bugTitle": "Ck editor not responding"
                            "reporterId": "eKOTSdkn7"
                            "reporterName": "Siddharth Singh"
                            "status": "in-progress"
                            "description": "This is Test Description"
                            "assignee": "Ranjeet Singh"
                            "comments": [],
                            "watchers": [],
                            "reportedOn": "2018-09-23T11:50:23.820Z"
                        }
                    }
        * @apiErrorExample {json} Error-Response:
        *
            {
                "error": true,
                "message": "Failed to register bug",
                "status": 500,
                "data": null
            }
    */

    app.get(`${baseUrl}/allBugs`, authentication.isAuthorized , bugsController.getAllBugs);

    /**
         * @apiGroup Bugs
         * @apiVersion  1.0.0
         * @api {get}  http://api.bugtracker.gq/api/v1/bugs/allBugs To get all Bugs
         *
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
  
            {
                "error": false,
                "message": "All Bug Found",
                "status": 200,
                "data": [
                    {
                        "bugId": "pYd3NsrdB",
                        "bugTitle": "Angular app hosting",
                        "reporterId": "0uDHZaVDK",
                        "reporterName": "Siddharth Singh",
                        "status": "in-test",
                        "description": "Dummy Description",
                        "comments": [],
                        "watchers": [],
                        "reportedOn": "2018-10-11T12:55:09.161Z",
                        "assignee": "Ranjeet Singh"
                    },
                    {
                        "bugId": "Wl7Gfp2Ad",
                        "bugTitle": "Any bug",
                        "reporterId": "0uDHZaVDK",
                        "reporterName": "Siddharth Singh",
                        "status": "in-progress",
                        "description": "Des-test",
                        "comments": [],
                        "watchers": [],
                        "reportedOn": "2018-10-11T12:55:09.161Z",
                        "assignee": "Ranjeet Singh"
                    }
                ]
            }
    */    


    app.put(`${baseUrl}/:bugId/deleteBug`, authentication.isAuthorized, bugsController.deleteBug);


    /**
         * @apiGroup Bugs
         * @apiVersion  1.0.0
         * @api {put}  http://api.bugtracker.gq/api/v1/bugs/:bugId/deleteBug To delete single bug.
         *
         * @apiParam {string} bugId Bug ID of the bug. (route params) (required)
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
            {
                "error": false,
                "message": "Bug Deleted",
                "status": 200,
                "data": {
                    "n": 1,
                    "ok": 1
                }
            }
         * @apiErrorExample {json} Error-Response:
         *
            {
                "error": true,
                "message": "No Bug Found",
                "status": 404,
                "data": null
            }
    */


    app.put(`${baseUrl}/:bugId/editBug`, authentication.isAuthorized, bugsController.editBug);


    /**
         * @apiGroup Bugs
         * @apiVersion  1.0.0
         * @api {put}  http://api.bugtracker.gq/api/v1/bugs/:bugId/editBug To edit single bug.
         *
         * @apiParam {string} bugId Bug ID of the bug. (route params) (required)
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
            {
                "error": false,
                "message": "Bug details edited/updated successfully",
                "status": 200,
                "data": {
                    "n": 1,
                    "nModified": 1,
                    "ok": 1
                }
            }
         * @apiErrorExample {json} Error-Response:
         *
            {
                "error": true,
                "message": "No Bug Found",
                "status": 404,
                "data": null
            }
    */


    app.get(`${baseUrl}/:bugId/getBug`, authentication.isAuthorized , bugsController.getBugByBugId);

    /**
         * @apiGroup Bugs
         * @apiVersion  1.0.0
         * @api {get}  http://api.bugtracker.gq/api/v1/bugs/:bugId/getBug To get single bug details.
         *
         * @apiParam {string} bugId Bug ID of the bug. (route params) (required)
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
            {
                "error": false,
                "message": "Bug details found",
                "status": 200,
                "data": {
                    "bugId": "Wl7Gfp2Ad",
                    "bugTitle": "Test Bug",
                    "reporterId": "0uDHZaVDK",
                    "reporterName": "Siddharth Singh",
                    "status": "in-progress",
                    "description": "Description-edited",
                    "comments": [],
                    "watchers": [],
                    "reportedOn": "2018-10-11T12:55:09.161Z",
                    "_id": "5bbfa299495b8a177cf4bc34",
                    "assignee": "Ranjeet Singh",
                    "__v": 0
                }
            }
         * @apiErrorExample {json} Error-Response:
         *
            {
                "error": true,
                "message": "No Bug Found",
                "status": 404,
                "data": null
            }
    */




}// end of setRouter

module.exports = {
    setRouter: setRouter
}

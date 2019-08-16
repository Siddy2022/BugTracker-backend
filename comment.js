const express = require('express');
const router = express.Router();

const commentController = require("./../controllers/commentController");
const appConfig = require("../config/appConfig")

const authentication = require('../middlewares/auth')


let setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/comments`;

    app.post(`${baseUrl}/addComment`, authentication.isAuthorized, commentController.addComment );

    /**
     * @apiGroup Comments APIs
     * @apiVersion  1.0.0
     * @api {post}  http://api.bugtracker.gq/api/v1/comments/addComment To add comment.
     *
     * @apiParam {string} bugId of bug. (body params)
     * @apiParam {string} userId ID of user. (body params)
     * @apiParam {string} userName Name of the User. (body params)
     * @apiParam {string} comment Comment of user. (body params)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
                    {
                        "error": false,
                        "message": "Comment added",
                        "status": 200,
                        "data": {
                            "bugId": "CcvsI9xtn"
                            "userId": "eKOTSdkn7"
                            "userName": "Siddharth Singh"
                            "comment": "Dummy text comment"
                            "commentedOn": "2018-09-23T11:50:23.820Z"
                        }
                    }
        * @apiErrorExample {json} Error-Response:
        *
            {
                "error": true,
                "message": "Failed to add comment",
                "status": 500,
                "data": null
            }
    */

    app.get(`${baseUrl}/:bugId/getCommentsOnBug`, authentication.isAuthorized , commentController.getCommentsByIssueId);

    /**
         * @apiGroup Comments
         * @apiVersion  1.0.0
         * @api {get}  http://api.bugtracker.gq/api/v1/comments/:bugId/getCommentsOnBug To get all comments on bug.
         *
         * @apiParam {string} bugId Bug ID of the bug. (route params) (required)
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
            {
                "error": false,
                "message": "Comment details found",
                "status": 200,
                "data": [
                    {
                        "commentId": "cMeUUHJZs",
                        "bugId": "Wl7Gfp2Ad",
                        "userId": "0uDHZaVDK",
                        "userName": "Siddharth Singh",
                        "comment": "Text Comment1",
                        "commentedOn": "2018-10-11T12:55:09.137Z",
                        "_id": "5bbfa969495b8a177cf4bc35",
                        "__v": 0
                    },
                    {
                        "commentId": "rkT0BbzSM",
                        "bugId": "Wl7Gfp2Ad",
                        "userId": "0uDHZaVDK",
                        "userName": "Siddharth Singh",
                        "comment": "Text Comment2",
                        "commentedOn": "2018-10-11T12:55:09.137Z",
                        "_id": "5bbfa978495b8a177cf4bc36",
                        "__v": 0
                    }
                ]
            }
         * @apiErrorExample {json} Error-Response:
         *
            {
                "error": true,
                "message": "No comment details Found",
                "status": 500,
                "data": null
            }
    */





}// end of setRouter

module.exports = {
    setRouter: setRouter
}
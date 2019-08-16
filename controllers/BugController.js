const mongoose = require('mongoose');
const shortid = require('shortid');
const fs = require('fs')

//Libraries
const response = require('../libs/responseLib')
const logger = require('../libs/loggerLib');
const check = require('../libs/checkLib');

//Models
const BugsModel = mongoose.model('BugsModel');


/**
 * function to register bug.
 */
let registerBug = (req, res) => {

    let validateParams = () => {
        return new Promise((resolve, reject) => {
            if(check.isEmpty(req.body.bugTitle) || check.isEmpty(req.body.reporterId) || check.isEmpty(req.body.reporterName) || check.isEmpty(req.body.status) || check.isEmpty(req.body.attachments) ) {
                logger.error('Parameters Missing', 'registerBug:Validate Params()', 5);
                let apiResponse = response.generateResponse(true, 'parameters missing.', 403, null);
                reject(apiResponse)
            }
            else {
                resolve()
            }
        });
    }//end validate params


    

    let saveBug = () => {
        return new Promise((resolve, reject) => {

                let newBug = new BugsModel({
            
                    bugId : shortid.generate(),
                    bugTitle : req.body.bugTitle,
                    reporterId : req.body.reporterId,
                    reporterName: req.body.reporterName,
                    status: req.body.status,               
                    description: req.body.description,
                    attachments: req.body.attachments,
                    assignee:req.body.assignee || ' '           
                }) // end new list model

               


                newBug.save((err, result) => {

                    if (err) {
                        console.log(err)
                        logger.error(`Error occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Failed to register bug', 500, null)
                        res.send(apiResponse)
                    } else {
                      
                        console.log(result)
                        resolve(result)
                    
                    }

                }) // end new product save

        })//end promise

        
    }//end

    
    validateParams()
        .then(saveBug)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Bug registered successfully', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            res.send(err)

        })


}//end registerBug


/**
 * function to get All Bug.
 */
let getAllBugs = (req, res) => {
    BugsModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(`Error occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Failed to find bugs details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Bug Found', 'Bugs Controller : getAllBugs')
                let apiResponse = response.generate(true, 'No bug Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info('All Bug Found', 'Bugs Controller : getAllBugs')
                let apiResponse = response.generate(false, 'All Bug Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all Bugs



/**
 * function to delete bug using bugId.
 */
let deleteBug = (req, res) => {

    BugsModel.remove({ 'bugId': req.params.bugId }, (err, result) => {
        if (err) {
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Bug Found', 'Issues Controller : deleteBug')
            let apiResponse = response.generate(true, 'No Bug Found', 404, null)
            res.send(apiResponse)
        } else {
            logger.info("Bug deleted", "Bugs Controller : deleteBug")
            let apiResponse = response.generate(false, 'Bug Deleted', 200, result)
            res.send(apiResponse)
        }
    })
}



/**
 * function to edit Bug details
 */
let editBug = (req, res) => {

    let options = req.body;
    console.log(options);
    console.log(req.params.bugId);
    BugsModel.updateOne({ 'bugId': req.params.bugId },options , { multi: true }).exec((err, result) => {

        if (err) {
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Failed to edit bug details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No bug details Found', 'Bugs Controller : editBug')
            let apiResponse = response.generate(true, 'No Bug Found', 404, null)
            res.send(apiResponse)
        } else {
            logger.info('Bug details edited/updated ', 'Bugs Controller : editBug')
            let apiResponse = response.generate(false, 'Bug details edited/updated successfully', 200, result)
            res.send(apiResponse)
        }
    })

}//end editBug



/**
 * function to get single bug details.
 */
let getBugByBugId = (req, res) => {

    if (check.isEmpty(req.params.bugId)) {
        logger.error("bugId is missing", "Bugs Controller: getBugByBugId", 10);
        let apiResponse = response.generate(true, "bugId is missing", 500, null);
        reject(apiResponse);
    }
    else {
        BugsModel.findOne({ bugId: req.params.bugId }, (err, bugDetails) => {

            /* handle the error if the user is not found */
            if (err) {
                logger.error('Failed to find bug', "Bugs Controller: getBugByBugId", 10);
                let apiResponse = response.generate(true, "failed to find the bug details", 500, null);
                res.send(apiResponse);
            }/* if company details is not found */
            else if (check.isEmpty(bugDetails)) {
                logger.error("No Item Found", "Bugs Controller: getBugByBugId", 10);
                let apiResponse = response.generate(true, "No Bug details Found", 500, null);
                res.send(apiResponse);
            }
            else {
                logger.info("Bug found", "Bugs Controller: getBugByBugId", 10);
                let apiResponse = response.generate(false, "Bug details found", 200, bugDetails);
                res.send(apiResponse);

            }

        });
    }

}//end getListByListId



module.exports = {

    registerBug:registerBug,
    getAllBugs:getAllBugs,
    deleteBug:deleteBug,
    editBug:editBug,
    getBugByBugId:getBugByBugId

}
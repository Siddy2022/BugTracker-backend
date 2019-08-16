const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let BugsSchema = new Schema({

  bugId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },

  bugTitle: {
    type: String,
    default: ''
  },
  
  reporterId: {
    type: String,
    default: ''
  },

  reporterName: {
    type: String,
    default: ''
  },

  status: {
    type: String,
    default: 'Backlog'
  },

  description: {
    type: String,
    default: 'Description not available'
  },

  attachments:[],
  /*
  attachments: {
    data: Buffer 
    //contentType: String,
  }
  */
  assignee:{
    type:String,
    default:''
  },


  comments:[],
  watchers:[],

  reportedOn :{
    type:Date,
    default: new Date()
  }

})


mongoose.model('BugsModel', BugsSchema);
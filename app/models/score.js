// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ScoreSchema = new Schema({
  pts: Number
});

ScoreSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Score', ScoreSchema);
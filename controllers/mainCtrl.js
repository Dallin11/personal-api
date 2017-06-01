var user = require("../user.js");



exports.getName = function(req, res, next) {
    return res.status(200).json(user.name)
}

exports.getLocation = function(req, res, next){
    return res.status(200).json(user.location)
}

exports.getOccupation = function(req, res, next){
    return res.status(200).json(user.occupation)
}

exports.getOccupation1 = function(req, res, next){
    return res.status(200).json(user.occupation)
}

exports.getHobbies = function(req, res, next){
    return res.status(200).json(user.hobbies)
}

exports.getHobbiesType = function(req, res, next){
    var hobbiesType = user.hobbies.filter(function(e){
      return e.type === req.params.type
    })
    
  res.send(hobbiesType)
}
exports.getFamily = function(req, res, next){
    return res.status(200),json(user.family)
}

exports.getFamilyRelation = function(req, res, next){
    var familyRelation = user.family.filter(function(e){
        return e.type === req.params.relation
    })
    res.send(familyRelation)
}



// module.exports = {
//     getName: function(req, res, next) {

//     },
//         getHobbies: function(req, res, next) {
            
//         }
 // }
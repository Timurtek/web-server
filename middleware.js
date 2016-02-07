
module.exports = {
  requireAuth: function(req, res, next){
    console.log('private number hit');
    console.log('_______________');
    next();
  },
  logger: function(req,res,next){
    console.log('Request: '+req.method+ ' '+ req.originalUrl+ ' Time :'+ new Date().toString());
    console.log('_______________');
    next();
  }
};

var PostRemoveParentPostIdString = function () {
  this.up = function (next) {
    this.removeColumn('post', 'parentPostId', function(err, data){
      if(err){
        throw err;
      }else{
        next();
      }
    }); 
  };

  this.down = function (next) {
    this.addColumn('post', 'parentPostId', 'string',  function(err, data){
      if(err){
        throw err;
      }else{

        next();
      }
    });
  };
};

exports.PostRemoveParentPostIdString = PostRemoveParentPostIdString;

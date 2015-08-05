define(function () {
  return{
    getSongs: function(callback){
        $.ajax(
            {
              url: "javascripts/music-info.json"
            }
        ).done(function(data){
         callback.call(this, data);
        });
   }
  };
});
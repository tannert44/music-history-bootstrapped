define(function () {
  return{
    getSongs: function(callback){
        $.ajax(
            {
              url: "javascripts/music-info2.json"
            }
        ).done(function(data){
         callback.call(this, data);
        });
   }
  };
});
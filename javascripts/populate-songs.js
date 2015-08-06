define(function () {
  return{
    getSongs: function(callback){
        $.ajax(
            {
              url: "https://blazing-torch-6909.firebaseio.com/.json"
            }
        ).done(function(data){
//          console.log(data);
         callback.call(this, data);
        });
   }
  };
});
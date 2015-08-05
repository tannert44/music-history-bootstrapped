requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'matchHeight': '../bower_components/matchHeight/jquery.matchHeight-min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'matchHeight':  ['jquery']
  }
});

requirejs(
  ["jquery", "hbs", "bootstrap", "matchHeight", "dom-access", "populate-songs", "get-more-songs"],
  function($, Handlebars, bootstrap, matchHeight, dom, pop, getMore) {

    pop.getSongs(function(data) {
      
      require(['hbs!../templates/artist'] , function(artistTemplate){
        var populatedTemplate = artistTemplate(data);
        $('.artist-select').html(populatedTemplate);
       }); 
      
      require(['hbs!../templates/album'] , function(artistTemplate){
        var populatedTemplate = artistTemplate(data);
        $('.album-select').html(populatedTemplate);
       }); 
            
      
      
      require(['hbs!../templates/songs'], function(songTemplate) {
        dom.html(songTemplate(data))
        $('.delete_button').on("click", function() {
          $(this).prev().remove();
          $(this).remove();
          $('.match-height').matchHeight();
        });

        $('.song-info-content').append("<button id='more_button'>More</button>");

        $('#more_button').on("click", function() {

          getMore.getSongs(function(data) {
            
            require(['hbs!../templates/artist'] , function(artistTemplate){
        var populatedTemplate = artistTemplate(data);
        $('.artist-select').append(populatedTemplate);
       }); 
            
            require(['hbs!../templates/album'] , function(artistTemplate){
        var populatedTemplate = artistTemplate(data);
        $('.album-select').append(populatedTemplate);
       }); 
           
            
            require(['hbs!../templates/songs'], function(songTemplate) {
              $('#more_button').before(songTemplate(data))
              $('.match-height').matchHeight();
              
              $('.delete_button').on("click", function() {
                $(this).prev().remove();
                $(this).remove();
                $('.match-height').matchHeight();
              });
              
            });
          });

        });
      });


    });

    $('.match-height').matchHeight();
    
    
  });


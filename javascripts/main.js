requirejs(
  ["dom-access", "populate-songs", "get-more-songs"], 
  function(dom, pop, getMore) {
    
    pop.getSongs(function(data) {
      var getSongs = data;
          $.each(getSongs, function(){
            var songOutput = "<h3 class='.new-item song-title'>";
                songOutput += this.name;
                songOutput += "<small>";
                songOutput += " - by ";
                songOutput += this.artist;
                songOutput += " on the album ";
                songOutput += this.album;
                songOutput += "</small>";
                songOutput += "</h3>";
                songOutput += "<div class='.new-item delete_button'><button class='btn btn-default btn-xs'>Delete</button></div>";
            dom.append(songOutput);
            
            
            $('.delete_button').on("click", function(){
                   $(this).prev().remove();
                   $(this).remove();
                   $('.match-height').matchHeight();
                  });
            
            
          });
      
      
          $('.song-info-content').append("<button id='more_button'>More</button>");
      
      
          getMore.getSongs(function(data2) {
            var getMoreSongs = data2;
            console.log(getMoreSongs);
      
             $('#more_button').on("click", function(){
               $.each(getMoreSongs, function(){
                 var songOutput2 = "<h3 class='song-title'>";
                 songOutput2 += this.name;
                 songOutput2 += "<small>";
                 songOutput2 += " - by ";
                 songOutput2 += this.artist;
                 songOutput2 += " on the album ";
                 songOutput2 += this.album;
                 songOutput2 += "</small>";
                 songOutput2 += "</h3>";
                 songOutput2 +="<div class='delete_button'><button class='btn btn-default btn-xs'>Delete</button></div>";
                $('#more_button').before(songOutput2);
                 
                 $('.match-height').matchHeight();

                $('.delete_button').on("click", function(){
                   $(this).prev().remove();
                   $(this).remove();
                   $('.match-height').matchHeight();
                   });
               });
             });
            
          });
        
    });
    
    $('.match-height').matchHeight();
    
  
});
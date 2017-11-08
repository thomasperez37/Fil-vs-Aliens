$(document).ready(function(){
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function checkCollision() {
        /*var leftBoundsRightSide = $("#left_bound").offset().left + width;*/
    }
    function spawnBoxSprite() {
        $("body").append("<div class='box_alien'><img src='images/Small_Box_sprite_015 copy.png'></div>");
        var randomLocation = getRandomIntInclusive(25,75);
        randomLocation = String(randomLocation);
        
        
    }
    $("body").keydown(function(event) {
        if (event.which === 37) {
            $("#fil").css("left", $("#fil").offset().left - 10);
        } else if (event.which === 39) {
            $("#fil").css("left", $("#fil").offset().left + 10);
        } else {
            return;
        }
    });
    spawnBoxSprite();
});
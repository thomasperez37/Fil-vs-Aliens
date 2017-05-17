$(document).ready(function(){
    function checkCollision() {
        /*var leftBoundsRightSide = $("#left_bound").offset().left + width;*/
    }
    function spawnBoxSprite() {
        
    }
    $("body").keydown(function(event) {
        if (event.which === 37) {
            var left = document.body.clientWidth;
            console.log(left);
            $("#fil").css("left", $("#fil").offset().left + "%");
        } else if (event.which === 39) {
            var right = $("#fil").offset().left + 10;
            $("#fil").css("left", right + "%");
        } else {
            return;
        }
    });
});
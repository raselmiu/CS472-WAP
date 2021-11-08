
    $(document).ready(function () {
        $("#start").click(function () {

            $(".boundary").removeClass("youlose");
            $("#status").text("Start...");

            $(".boundary").on("mouseenter", (function () {
                $(".boundary").addClass("youlose");
                $("#status").text("Sorry, you lost :[");
            }));

            $(".boundary").on("mouseenter", (function () {
                $(".boundary").addClass("youlose");
                $("#status").text("Sorry, you lost :[");
            }));


            $( "#maze" ).mousemove(function( event ) {
                var msg = "Handler for .mousemove() called at ";
                msg += event.pageX + ", " + event.pageY;
                if($(".boundary").hasClass("youlose")){
                    $( "#log" ).addClass('error');
                    $( "#log" ).removeClass('success');
                }else{
                    $( "#log" ).removeClass('error');
                    $("#log").addClass('success');
                }
                    
                $( "#log" ).text(  msg );

                $("end").off("mouseover");                
              });

            $("#maze").on("mouseleave", function () {
                $(".boundary").addClass("youlose");
                $("status").text("Noooooo... You lose!!!!");
                $("end").off("mouseover");

            });

            $("#end").mouseover(function () {
                $("#status").text("WOW....You win!!!!!!");
            });



        });

    });

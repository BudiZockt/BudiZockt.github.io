$(document).ready(function () {
    
  // Emailadresse
  var at = / auf /;
  var dot = / punkt /g;
  var spans = document.getElementsByTagName("span");
  var hm = spans.length;
  for (c=0;c<hm;c++) {
    if(spans[c].className=="mailme"){
      newcnt = spans[c].innerHTML.replace(at,"@");
      newcnt = newcnt.replace(dot,".");
      spans[c].innerHTML = '<a href="mailto:'+newcnt+'" title="E-Mail schreiben">'+newcnt+'</a>';
    }
  }
    
    if ($(window).width() <= 752) {
        $('#menu1').hide();
        $('#menu2').show();
        $('#navigation').hide();
        $('.gross').hide();
        $('.klein').show();
    } else {
        $('#menu1').show();
        $('#menu2').hide();
        $('#navigation').show();
        $('.gross').show();
        $('.klein').hide();
    }
    
    /* Mobile Nav aktivieren */
    $('#simple-menu').sidr();
        
    // Auswahl Einrichtung
    $('#FH').on('change', function() {
        $('#ChangeEin').click();
    });
    
    // Aendern von HsOrt 
    $('#hsort').change(function () {
        $('#-trigger').val('1');
        $('[name=dhssave]').click();
    });
    
    // Filter umschalten
    $('[id^=stg_filter]').change(function () {
        $('#-trigger').val('1');
        document.Form0.submit();
    });
      
    // Aendern von Grund
    $("#grund").change(function () {
        $('#-trigger').val('1');
        $('[name=dhssave]').click();
    });
    $("#grund").change(function () {
        $('#-trigger').val('1');
        $('[name=ihssave]').click();
    }); 
    
    // Qtip einschalten
    $("input[title!='']").qtip({
        style: {
            classes: 'qtip-green qtip-cluetip qtip-shadow, qtip-rounded'
        },
        position: {
            viewport: $(window)
        }
    });

    $("select[title!='']").qtip({
        style: {
            classes: 'qtip-green qtip-cluetip qtip-shadow, qtip-rounded'
        },
        position: {
            viewport: $(window)
        }
    });
    
    $(".tooltip").qtip({
        style: {
            classes: 'qtip-green qtip-cluetip qtip-shadow, qtip-rounded'
        },
        position: {
            viewport: $(window)
        }
    });
        

    jQuery(window).resize(function () {
        if (jQuery(window).width() <= 756) {
            $('#menu1').hide();
            $('#menu2').show();
            $('#navigation').hide();
            $('.gross').hide();
            $('.klein').show();
        }
        else {
            $('#menu1').show();
            $('#menu2').hide();
            $('#navigation').show();
            $('.gross').show();
            $('.klein').hide();
        }
        showViewportSize();
    });
        
});


function showViewportSize() {
   var the_width = $(window).width();
               
   $('#width').text(the_width);
}

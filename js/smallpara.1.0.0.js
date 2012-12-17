/*!
 * jQuery Small Parallax: a simple and small parallax plugin.
 * http://steeleimage.com/portfolio/fsbi
 *
 * Copyright 2012, Michael Steele
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://steeleimage.com/1icense
 *
 * Date: Fri Nov 28 13:50:00 2011 -0400
 *
 * Version 1.0.1
 *
 * Change Log: 1.0.1
 * - Easing and animation delays
 */
function simpleParallax(delayAni, easing) {

delayAni  = typeof(delayAni) ? delayAni : 55;
easing = typeof(easing) ? easing : 'swing';

//My verical parallax world
$('[data-sp]').each(function() {
    var $obj = $(this);//A simple Parallax Item
    
    //Get each command from data-sp
    var rawData = $obj.data('sp');
    var commands = rawData.split(";");    
    commands.pop();//removes empty trailing command
    var len = commands.length;
    
    for (i=0;i<len;i++){
       
        //Get property and speed
        var propertiesArray = commands[i].split(":");   
        var property = propertiesArray[0],
            speed    = propertiesArray[1];  
        
        //Check for current property value, else set 0
        var staticValCheck = parseInt($(this).css(property));        
        var staticVal = isNaN(staticValCheck) ? 0 : staticValCheck;
        
        //TODO add support for multiple properties
        $(window).scroll(function() {            

            var winY = -($(window).scrollTop() / speed); //speed
            var coord = staticVal + winY + 'px'; //apply speed to attribute
            
            var anim = {};
            anim[property] = coord;
            
            $obj.animate(anim,delayAni,easing);            
            
        });        
    }   
});
}
    

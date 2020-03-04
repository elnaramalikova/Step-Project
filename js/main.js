//OUR SERVICES
document.getElementById("tab1Content").style = "display:flex";
function selectTab(e, tabId) {
    var i, tabs, tabcontent;
    
    tabcontent= document.getElementsByClassName('tabs-content');

     for(i=0; i<tabcontent.length; i++){
         tabcontent[i].style.display='none';
     };

    tabs=document.getElementsByClassName('tabs-title');
    for(i=0; i<tabs.length; i++){
        tabs[i].className= tabs[i].className.replace('active', '');
    };
    
    e.target.classList.add('active');
     tabId.style='display:flex';
    
    console.log(document.getElementById(tabId))

};

// LOAD MORE

var btn = document.getElementById('loadmore');
var images=document.querySelectorAll('.more .tabimg');
for(let i=0; i<images.length; i++){  
 images[i].style.display="none";
btn.addEventListener('click', function(){    
images[i].style.display='flex';
btn.style.display='none'; 

});  
}

// OUR AMAZING WORKS

$(document).ready(function(){
    $(".tab").click(function(){
        var buttonvalue= $(this).attr("data-filter");       
        if(buttonvalue =="all"){
            $(".tabimg").show("1000");
        }
        else{
            $(".tabimg").not("." + buttonvalue).hide("1000");
            $(".tabimg").filter("." + buttonvalue).show("1000");
        }
    });
    $(".sec5_tabs li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
});

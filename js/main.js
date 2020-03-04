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
btn.addEventListener('click', function(e){
document.querySelector(".more").style.display='flex';
btn.style.display='none';
});

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
    $(".tab").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
});

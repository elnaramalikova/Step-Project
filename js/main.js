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

//LOAD MORE
// var btn = document.getElementById('loadmore');
// btn.addEventListener('click', function(e){
// document.querySelector(".more").style.display='flex';
// btn.style.display='none';
// });

// var buttons=document.getElementsByClassName('tab')[0];
// var tabimg=document.getElementsByClassName('tabimg')[0];

// buttons.addEventListener('click', function(){
//     for(let j=0; j<buttonvalue.length,tabimg.length; j++){
//         var buttonvalue =buttons[i].getAttribute('data-filter');
//         console.log(j);
//         if(buttonvalue[j] == tabimg[i].className){
//             buttonvalue[j].classList.add('active');
//             tabimg[i].style.display="block";
//         }
//         else{
//             buttonvalue[j].classList.remove('active');
//             tabimg[i].style.display='none'
//         }
//         console.log(tabimg)
    
// }
    
// })
document.getElementsByClassName("all").style = "display:flex";
function selectTab(elll, tabsid) {
    var i, tabs, tabimgs;
    
    tabimgs= document.getElementsByClassName('tabimg');

     for(i=0; i<tabimgs.length; i++){
        
         tabimgs[i].style.display='none';
     };

    tabs=document.getElementsByClassName('tab');
    for(i=0; i<tabs.length; i++){
         var buttonvalue=tabs[i].getAttribute('data-filter');
         if(buttonvalue==tabs[i].className){
        tabs[i].className= tabs[i].className.replace('active', '');
        tabimgs[i].style.display='block';
        console.log(tabs[i])

         }
    };
    
    elll.target.classList.add('active');
     tabsid.style='display:flex';
    
    console.log(tabsid)

};



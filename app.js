

const endDate = document.querySelector("input[name='endDates']");
const clock = document.querySelector(".clock");
let timeInterval;
let timeStop =true;

endDate.addEventListener("change",function(e){
    e.preventDefault();
    clearInterval(timeInterval);
 
    const temp =new Date(endDate.value);
  
    startClock(temp);
    timeStop = false;
})

function startClock(d){
   
    function updateCounter(){
        let tl =timeLeft(d);
        if(tl.total <= 0){
            timeStop = false;
        }
   
     for(let pro in tl){
        
         let el = document.querySelector("."+pro);

         if(el){
         
             el.innerHTML =tl[pro];
         }
     }
}
updateCounter();
if(timeStop){
    timeInterval = setInterval(updateCounter, 1000);
}else{
    clearInterval(timeInterval);
}

}

function timeLeft(d){
   let currentDate = new Date();
 
   let t = Date.parse(d) - Date.parse(currentDate);

   let seconds = Math.floor((t/1000) % 60);
   let minutes = Math.floor((t/1000/60) % 60);
   let hours = Math.floor((t/(1000*60*60))%24);
   let days = Math.floor(t/(1000*60*60*24));

   return{
       "total":t,
       "days":days,
       "hours":hours,
       "minutes":minutes,
       "seconds":seconds
   };

}
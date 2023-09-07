var day = document.getElementById('day')
var utc = document.getElementById('time')

var days = ['days', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

let show = new Date().getDay();
let shoe = new Date();
let curret = new Date();
console.log(curret);
// console.log(show);

let month = days[shoe.getMonth()];

utc.innerHTML = month;
for (let index = 0; index < days.length; index++) {

    function result(){
        if(show.length = days[index]){
    
            day.innerText =  days[show] ;
            return show;
            
                }
    }
  
    
}

window.onload = ()=>{
    result();

}

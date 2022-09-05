console.log("yo")
const h = document.getElementById("h");
const m = document.getElementById("m");
const s = document.getElementById("s");
const jourmois= document.getElementsByTagName("h2");
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(()=>{
    let zeroh ="";
    let zerom ="";
    let zeros ="";
    let date = new Date();
    console.log("0" + date.getMinutes());

    if(date.getHours()<=9){
        zeroh = "0"
    }
    if(date.getMinutes()<=9 ) {
        zerom = "0"
    }
    if(date.getSeconds()<=9 ){
        zeros = "0"   
    }
    h.innerHTML= zeroh + "" + date.getHours();
    m.innerHTML= zerom + "" + date.getMinutes();
    s.innerHTML= zeros + "" + date.getSeconds();
  

    console.log(date.toLocaleDateString('en-US', options));
    var tabdate= date.toLocaleDateString('en-US', options).split(", ");
    jourmois[0].innerHTML="Hello ! Today we are " + tabdate[0] + " and it's " + tabdate[1]

 },1000)
let rate = document.getElementsByName('rating');
let gotRate=0

document.addEventListener("click",function(e){
    if(e.target.id==="submit-btn"){
        getRate()
    }
})

function getRate(){
    for(var i=0;i<rate.length;i++){
        if(rate[i].checked){
            gotRate = rate[i].value
            document.getElementById("card-body").style.display="none";
            document.getElementById("report-card").style.display="flex"
            render()
        }
    }
}

function getResult(){
    let resultBody=`
        <img class="thank-you" src="./images/illustration-thank-you.svg" alt="thank you" />
        <p class="result">You selected ${gotRate} out of 5</p>
        <h1>Thank you!</h1>
        <p class="msg">We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
    `
    return resultBody;
}

function render(){
    document.getElementById("report-card").innerHTML=getResult()
}


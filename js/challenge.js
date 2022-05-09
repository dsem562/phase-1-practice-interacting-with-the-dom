const init = () => {
    
    let timer = document.getElementById("counter");
    let plus = document.getElementById("plus");
    plus.addEventListener("click", increment);
    let minus = document.getElementById("minus");
    minus.addEventListener("click", decrement);
    let heart = document.getElementById("heart");
    heart.addEventListener("click", like);
    const likes = document.getElementsByClassName("likes");
    let pause = document.getElementById("pause");
    pause.addEventListener("click", stop);
    // let resume = document.getElementById("resume");
    // resume.addEventListener("click", resumeFunc);

    // const start = 0;
    // let startCounter = 0;
    let counter = 0;
    
    const startTimer = setInterval(function() {
        timer.innerHTML = counter++
    }, 1000);    
    
    // function count() {        
    //     timer.innerHTML = counter++;               
    // }
    
    function increment() {
        timer.innerHTML = counter++;
    }

    function decrement() {
        timer.innerHTML = counter--;
    }

    function like(e) {
        if(e) {
            console.log(likes);
        };
    }

    function stop(e) {        
        clearInterval(startTimer);
        pause.removeAttribute("id");
        e.target.innerHTML = "resume";
        e.target.id = "resume";
        let resume = document.getElementById("resume");
        resume.addEventListener("click", resumeFunc);
        // console.log(e);
        // console.log(timer.innerHTML);
        // console.log(counter);
    }

    function resumeFunc(e) {
        console.log(e);
        console.log(counter)
        setTimeout(function() {
            setInterval(function() {
                timer.innerHTML = counter++
            }, 1000), (counter * 1000)});
            resume.removeAttribute("id");
        e.target.innerHTML = "pause";
        e.target.id = "pause";
    }
}

document.addEventListener('DOMContentLoaded', init);
let intervalID;
let count = 0;

const init = () => {
    
    let timer = document.getElementById("counter");
    let plus = document.getElementById("plus");
    plus.addEventListener("click", increment);
    let minus = document.getElementById("minus");
    minus.addEventListener("click", decrement);
    let heart = document.getElementById("heart");
    heart.addEventListener("click", like);
    const likes = document.getElementsByClassName("likes");
    let submit = document.getElementById("submit");
    submit.addEventListener("click", submitForm);
    const commentsForm = document.getElementById("comment-form");
    const commentsList = document.getElementById("list");
    const commentsInput = document.getElementById("comment-input");
    let pause = document.getElementById("pause");
    pause.addEventListener("click", stop);
    
    
    interval = setInterval(increment, 1000);

    
    function increment() {
        timer.innerHTML = count++;
    }

    function decrement() {
        timer.innerHTML = count--;
    }   
    
    function stop(e) { 
        clearInterval(interval);
        disableBtns();
        pause.removeAttribute("id");
        e.target.innerHTML = "resume";
        e.target.id = "resume";        
        pause.removeEventListener("click", stop);
        resume.addEventListener("click", resumeFunc); 
    }

    function resumeFunc(e) {
        interval = setInterval(increment, 1000);
        enableBtns();
        resume.removeEventListener("click", resumeFunc);
        resume.removeAttribute("id");
        e.target.innerHTML = "pause";
        e.target.id = "pause";
        pause.addEventListener("click", stop);
    }

    function disableBtns() {
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
    }
    
    function enableBtns() {
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;
    }
    
    function submitForm(e) {
        e.preventDefault();
        const p = document.createElement("p");
        const text = document.createTextNode(commentsInput.value);
        p.appendChild(text);
        commentsList.append(p); 
        commentsForm.reset();
    }

    // Handling Likes

    let likeCounter = 0;
    let prevNum = 0;
    let currentNum = 0;
    
    function like() {
        currentNum = parseInt(timer.innerHTML, 10);
        processLikes(currentNum, prevNum);
        prevNum = currentNum;
    }

    function processLikes(currentNum, prevNum) {
        if (currentNum === prevNum) {
            likeCounter++;
            displayLikes();
        } else {
            likeCounter = 1;
            displayLikes();
        }
    }

    function displayLikes() {        
        const li = document.createElement("li");        
        if (likeCounter === 1) {            
            const timerNum = document.createTextNode(currentNum + " has been liked 1 time.");
            li.appendChild(timerNum);
            likes[0].appendChild(li);
        } else {
            let currentNode = likes[0].childNodes.length - 1;
            const timerNum = document.createTextNode(currentNum + " has been liked " + likeCounter + " times.");
            li.appendChild(timerNum);
            likes[0].replaceChild(li, likes[0].childNodes[currentNode]);
        }
    }    
}

document.addEventListener('DOMContentLoaded', init);
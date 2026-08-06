

function validateClaim() {

    const input = document.getElementById("claim").value.trim().toLowerCase();

    if (input === "") {
        alert("Please enter a statement.");
        return;
    }

    const record = knowledgeBase.find(item =>
        item.statement.toLowerCase().includes(input)
    );

    const result = document.getElementById("result");

    result.style.display = "block";

    if (!record) {

        result.innerHTML = `

        <div class="card shadow-lg border-danger">

            <div class="card-body text-center">

                <h2 class="text-danger">

                    ❌ Knowledge Not Found

                </h2>

                <p>

                    The entered statement is not available in the knowledge base.

                </p>

            </div>

        </div>

        `;

        return;
    }

    saveHistory(record);

    window.scrollTo({

    top: document.getElementById("result").offsetTop - 80,

    behavior: "smooth"

});
    result.innerHTML = `

<div class="card shadow-lg border-0">

<div class="card-header text-white">

<h4>

🧠 Nyāya Knowledge Validation Report

</h4>

</div>

<div class="card-body">

<h4 class="mb-4">

${record.statement}

</h4>

<div class="mb-3">

<h5>👁️ Pratyakṣa (Observation)</h5>

<p>${record.pratyaksha}</p>

</div>

<div class="mb-3">

<h5>🧠 Anumāna (Inference)</h5>

<p>${record.anumana}</p>

</div>

<div class="mb-3">

<h5>⚖️ Upamāna (Comparison)</h5>

<p>${record.upamana}</p>

</div>

<div class="mb-3">

<h5>📖 Śabda (Authoritative Testimony)</h5>

<p>${record.shabda}</p>

</div>

<hr>

<h5>

Confidence Score

</h5>

<div class="progress mb-3">

<div

class="progress-bar bg-success"

style="width:${record.score}%">

${record.score}%

</div>

</div>

<h2 class="text-center">

<span class="badge ${record.verdict=="VALID"?"bg-success":record.verdict=="PARTIALLY VALID"?"bg-warning":"bg-danger"}">

${record.verdict}

</span>

</h2>

</div>

</div>

`;

}

function clearData(){

    document.getElementById("claim").value = "";

    document.getElementById("result").style.display = "none";

    setRandomSample();

}

function saveHistory(record){

    let history=JSON.parse(localStorage.getItem("history"))||[];

    history.unshift(record);

    if(history.length>10){

    history.pop();

    }

    localStorage.setItem("history",JSON.stringify(history));

    updateDashboard();

    loadHistory();

}

function loadHistory(){

    let history=JSON.parse(localStorage.getItem("history"))||[];

    const list=document.getElementById("historyList");

    list.innerHTML="";

    history.forEach(item=>{

    const li=document.createElement("li");

    li.innerHTML=`${item.statement}
    - <b>${item.verdict}</b>`;

    list.appendChild(li);

    });

    updateDashboard();

}

function updateDashboard(){

    let history=JSON.parse(localStorage.getItem("history"))||[];

    document.getElementById("totalSearches").innerText=history.length;

    let valid=0;

    let invalid=0;

    history.forEach(item=>{

    if(item.verdict==="VALID")
    valid++;

    else
    invalid++;

    });

    document.getElementById("validCount").innerText=valid;

    document.getElementById("invalidCount").innerText=invalid;

}

function clearHistory(){

    localStorage.removeItem("history");

    loadHistory();

}

window.onload = function(){

    const suggestionList = document.getElementById("suggestions");

    knowledgeBase.forEach(item => {

        const option = document.createElement("option");
        option.value = item.statement;
        suggestionList.appendChild(option);

    });

    loadHistory();

    setRandomSample();

};

function toggleTheme(){

    document.body.classList.toggle("light-mode");

    const btn=document.getElementById("themeBtn");

    if(document.body.classList.contains("light-mode")){

        btn.innerHTML="☀ Light Mode";

    }else{

        btn.innerHTML="🌙 Dark Mode";

    }

}

document.getElementById("claim").addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        validateClaim();

    }

});

function showSamples(){

    const sampleBox=document.getElementById("sampleBox");

    const sampleList=document.getElementById("sampleList");

    if(sampleBox.style.display==="block"){

    sampleBox.style.display="none";

    return;

    }

    sampleBox.style.display="block";

    sampleList.innerHTML="";

    let shuffled=[...knowledgeBase];

    shuffled.sort(()=>Math.random()-0.5);

    shuffled.forEach(item=>{

    const div=document.createElement("div");

    div.className="sample-item";

    div.innerHTML=item.statement;

    div.onclick=function(){

    document.getElementById("claim").value=item.statement;

    window.scrollTo({

    top:0,

    behavior:"smooth"

    });

    };

    sampleList.appendChild(div);

    });

}

function setRandomSample(){

    const random =
        knowledgeBase[Math.floor(Math.random() * knowledgeBase.length)];

    document.getElementById("claim").value = random.statement;

}
showNOtes();


add = document.getElementById("add_notes");
show = document.getElementById("show_notes")

add.addEventListener("click", ()=>{
    document.querySelector(".card").classList.remove("hide")
    add.classList.add("hide")
    show.classList.add("hide")
   
})

back = document.getElementById("btn_back").addEventListener("click", ()=>{
    document.querySelector(".card").classList.add("hide")
    add.classList.remove("hide")
    show.classList.remove("hide")

})

show.addEventListener("click", ()=>{
    document.querySelector("#all_notes").classList.remove("hide");
    document.querySelector("#first_container").classList.add("hide");
    document.querySelector("#search_text").classList.remove("hide")
    document.querySelector("#search_input").classList.remove("hide")

    
})

backtwo = document.getElementById("btn_back_two").addEventListener("click", ()=>{
    document.querySelector("#all_notes").classList.add("hide");
    document.querySelector("#first_container").classList.remove("hide");
    document.querySelector("#search_text").classList.add("hide")
    document.querySelector("#search_input").classList.add("hide")
    
})

hometext = document.querySelector("#home_text");

hometext.addEventListener(("click"), ()=>{
    document.querySelector("#all_notes").classList.remove("hide");
    document.querySelector("#first_container").classList.add("hide");
    document.querySelector("#search_text").classList.remove("hide")
    document.querySelector("#search_input").classList.remove("hide")

})

navbartext = document.getElementById("navbar_text").addEventListener("click", ()=>{
    document.querySelector(".card").classList.add("hide")
    add.classList.remove("hide");
    show.classList.remove("hide");

    document.querySelector("#all_notes").classList.add("hide");
    document.querySelector("#first_container").classList.remove("hide");
    document.querySelector("#search_text").classList.add("hide")
    document.querySelector("#search_input").classList.add("hide")

})

let a = 0;
save = document.getElementById("btn_save").addEventListener("click",()=>{


    let newEle = document.createElement("h1");
    newEle.setAttribute("id", "appear");
    newEle.innerHTML = "ADDING.."
    let message = document.getElementById("anotherdiv").appendChild(newEle);
    
    document.querySelector("#loader").classList.remove("hide")
    
    setTimeout(() => {
        message.classList.add("hide")
        document.querySelector("#loader").classList.add("hide")
        
        
    }, 300);

    let text = document.getElementById("user_area");
    let allnotes = localStorage.getItem("allnotes");

    if (allnotes===null){

        notesarrray = []
    }
    else{
        notesarrray = JSON.parse(allnotes);
    }

    notesarrray.push(text.value);

    localStorage.setItem("allnotes", JSON.stringify(notesarrray));
    
    text.value ="";
    
    showNOtes();
    
    
    
})

function showNOtes(){
    
    
    let allnotes = localStorage.getItem("allnotes");
    
    if (allnotes===null){
        
        notesarrray = []
    }
    else{
        notesarrray = JSON.parse(allnotes);
    }
    
        
        
        let str = ""
      
        notesarrray.forEach((element, index) => {
            str+=`
            <div class="card singlecard">
                <div class="card-body">
                    <h5 class="card-title"> NOte ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button  class="btn btn-danger" id="${index}" onclick = "deleteNOte(this.id)">Delete NOte </button>
                    
                </div>
            </div>
            `
            
        })
        
        document.getElementById("singlecard").innerHTML = str
    
  
        

    
    
}

function deleteNOte(index){
    
    
    let allnotes = localStorage.getItem("allnotes");
    
    if (allnotes===null){
        
        notesarrray = []
    }
    else{
        notesarrray = JSON.parse(allnotes);
    }
    
    notesarrray.splice(index, 1)
    localStorage.setItem("allnotes", JSON.stringify(notesarrray));

    showNOtes();
    
}


let myLeads  = []
let oldleads = []
const inputBtn  = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const deletebtn = document.querySelector("#delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"))
const tabBtn = document.querySelector("#tab-btn")

if(leadsFromLocalStorage){
   myLeads = leadsFromLocalStorage
   render(myLeads)
}

const tabs = [
    {url: "https:www.linkedin.com/in/ogooluwa-abikoye-1b3568333"}
]

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,  currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
   
})

function render(leads){
    let listItems = ""
    for( i = 0 ; i < leads.length; i ++ ){
    listItems+= `
        <li>
            <a href="${leads[i]}" 
                target ="_blank">${leads[i]}
            </a>
        </li>`
}
ulEl.innerHTML = listItems
}



deletebtn.addEventListener("dblclick",function(){
    console.log("Delete button double-clicked!");
    localStorage.clear()
    myLeads = []
    ulEl.innerHTML = ""
    render(myLeads)
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myleads",JSON.stringify(myLeads))
   render(myLeads)
})

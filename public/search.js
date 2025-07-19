//Building list, replace with backend fetch later
var buildings = [
    "Business Leadership Building",
    "Willis Library",
    "Union Building",
    "Discovery Park",
    "Pohl Recreation Center",
    "Kerr Hall",
    "West Hall",
    "McConnel Hall",
    "Physical Education Building",
    "Chilton Hall",
    "Honors Hall",
    "Maple Hall",
    "Hurley Administration Building",
    "Matthews Hall",
    "Biology Building",
    "Bruce Hall",
    "General Academic Building",
    "Chemistry Building",
    "Wooten Hall",
    "Physics Building",
    "Language Building",
    "Hickory Hall"
]

var results = []

document.getElementById("searchBar").addEventListener("selectionchange", function (){
    results = []
    if(this.value != ""){
        var reg = new RegExp(`${this.value}`, "i")
        for(i in buildings){
            if(buildings[i].match(reg) != null){
                results.push(buildings[i])
            }
        }
    }

    updateResults()
})

function updateResults(){
    for(var i = 0; i < 5; i++){
        if(buildings[i] != null){
            document.getElementById(`result${i}`).textContent = results[i]
        }
        else{
            document.getElementById(`result${i}`).textContent = ""
        }
    }
}
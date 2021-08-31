let addMore = document.getElementById("add-more");
let i=1;
function addCompany(){
    i++;
    let company = document.getElementById("company"+i);
    company.style="display: block";
    if(i===3){
        addMore.style="display: none"
    }
}

let add_Skill = document.getElementById("add-skill");
let j=3;
function addSkill(){
  j++;
  let skill = document.getElementById(j);
  skill.style="display:block";

  if(j===10){add_Skill.style="display: none"}
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*-------------------- Template Usage ------------------------*/

// const supportsTemplate = function (){
//     return "content" in document.createElement('template')
// }

document.addEventListener("DOMContentLoaded",()=>{

    if(supportsTemplate()){
        let temp =  document.getElementById("localTemplate");
        for (let index = 0; index < PROJECT.projects.length; index++) {
            var content = temp.content.cloneNode(true);
            document.querySelector("#localTemplate").after(content)
        }

        var indexCard = document.querySelectorAll(".indexCard");
        indexCard.forEach(function fillInfo(e,i,a) {
            /* ----set link,image,name, and type of the project ----.*/
            e.setAttribute("href",PROJECT.returnProject(i).indexHref)
            e.children[0].style.backgroundImage = "url("+ PROJECT.returnProject(i).indexImgURL + ")";
            e.children[1].children[0].children[0].innerHTML = PROJECT.returnProject(i).projectName;
            e.children[1].children[4].children[0].innerHTML = PROJECT.returnProject(i).projectType;
        }); 
        
        var portfolioCard = document.querySelectorAll(".portfolioCard");
        portfolioCard.forEach(function fillInfo(e,i,a) {
            PROJECT.returnProject(i).filterType.forEach(function test(element,index,array) {
                e.classList.add(element)
            })
            // e.classList.add(PROJECT.returnProject(i).filterType);
            e.children[0].children[0].setAttribute("href",PROJECT.returnProject(i).indexHref);
            e.children[0].children[0].style.backgroundImage = "url("+ PROJECT.returnProject(i).detailImgURL + ")";
            e.children[0].children[1].children[2].children[0].children[0].setAttribute("href",PROJECT.returnProject(i).indexHref);
            e.children[0].children[1].children[0].innerHTML = PROJECT.returnProject(i).projectType;
            e.children[0].children[1].children[2].children[0].children[0].children[0].innerHTML = PROJECT.returnProject(i).projectName;
        })

    }else{
        console.error();
    }
})




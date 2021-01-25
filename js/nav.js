var path = window.location.pathname;
var pageType = path
var name  = path.slice(9,-5);

/*-------------- logo Template -------------- */ 
const logoTemp = document.createElement("template");
logoTemp.innerHTML = `
<a id="logoBM" class="logo" href="/index.html"></a>  
`


/*-------------- Main Nav Template -------------- */ 
const navTemp = document.createElement("template");
navTemp.innerHTML = 
`<nav class="homepage-4-slider-navigation left hidden-xs text-center d-none d-md-block">
<div class="rotate">
    <div class="row">
        <div class="col-sm-6">
            <a class="mouseover-simple" href="about.html">About Me</a>
        </div>
        <div class="col-sm-6">
            <a class="mouseover-simple" href="#" style = "color:grey">My Blog</a>
        </div>
    </div>
</div>
</nav>

<nav class="homepage-4-slider-navigation right hidden-xs text-center d-none d-md-block">
<div class="rotate">
    <div class="row">
        <div class="col-sm-6">
            <a class="mouseover-simple" href="contacts.html">Contact Me</a>
        </div>
        <div class="col-sm-6">
            <a class="mouseover-simple" href="portfolio.html">Portfolio</a>
        </div>
    </div>
</div>
</nav>`;

/*-------------- Hidden Nav Template -------------- */
const hiddenNavTemp = document.createElement("template");
hiddenNavTemp.innerHTML = 
`
<div class="overlay frame" data-rel="1">
    <div class="animation-wrapper full-size"></div>
    <div class="content-wrapper full-size">
        <div class="overlay-cell-align">
            <div class="cell-view page-height">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                        
                            <nav class="text-center single-column clearfix">
                                <ul>
                                    <li class="active"><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="#" style="color:grey">My Blog</a></li>
                                    <li><a href="portfolio.html">Portfolio</a></li>
                                    <li><a href="contacts.html">Contact</a></li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class="button-close"></a>
    </div>
</div>
`

/*-------------- Bottom Nav Template -------------- */
const bottomNavTemp = document.createElement("template");
bottomNavTemp.innerHTML = 
`
<div class="row nopadding">
    <div class="col-xs-4 col-4">
        <a class="bottomNavLeft portfolio-detail-related-entry" href="#">
            <span class="background full-size" style="background-image: url(img/portfolio-36.jpg);"></span>
            <span class="text hidden-xs d-none d-md-block">
                <span class="wide-container align-left">
                    <span class="tag"><span class="inline-indent"></span>photoshooting</span>
                    <span class="h4 light"><b>LADY WHO WAITING</b></span>
                </span>
            </span>
        </a>
    </div>
    <div class="col-xs-4 col-4">
        <div class="portfolio-detail-related-entry">
            <a class="square-hamburger-icon" href="/portfolio.html">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>
    </div>
    <div class="col-xs-4 col-4">
        <a class="bottomNavRight portfolio-detail-related-entry" href="#">
            <span class="background full-size" style="background-image: url(img/portfolio-37.jpg);"></span>
            <span class="text hidden-xs d-none d-md-block">
                <span class="wide-container align-right">
                    <span class="tag"><span class="inline-indent"></span>photoshooting</span>
                    <span class="h4 light"><b>LADY IN BLACK</b></span>
                </span>
            </span>
        </a>
    </div>
</div>
`
const supportsTemplate = function (){
return "content" in navTemp
}

const COMPONENTS = [
    {insertID:"#navBar",template: navTemp},
    {insertID:"#hiddenNav",template: hiddenNavTemp},
    {insertID:"#bottomNav",template: bottomNavTemp},
    {insertID:"#logo",template: logoTemp}
]

document.addEventListener("DOMContentLoaded",()=>{
 
    if(supportsTemplate()){
        COMPONENTS.forEach(element => { 
            if (nav = document.querySelector(element.insertID)) {
                console.log(`${element.insertID} is ready`);

                nav.insertBefore(element.template.content,nav.firstChild);
            
                switch (element.insertID) {
                    case "#bottomNav":

                        let index = PROJECT.projects.findIndex((e)=>e.projectID === name);
                        let currentIndex = PROJECT.returnCurrentIndex(index)
    
                        function fillInfo(leftProject,rightProject) {
                            document.querySelector(".bottomNavLeft").children[0].style.backgroundImage = "url("+ PROJECT.returnProject(leftProject).detailImgURL + ")";
                            document.querySelector(".bottomNavLeft").setAttribute("href",PROJECT.returnProject(leftProject).indexHref);
                            document.querySelector(".bottomNavLeft").children[1].children[0].children[0].innerHTML =`<span class="inline-indent"></span>` + PROJECT.returnProject(leftProject).projectType;
                            document.querySelector(".bottomNavLeft").children[1].children[0].children[1].children[0].innerHTML = PROJECT.returnProject(leftProject).projectName;
                            document.querySelector(".bottomNavRight").children[0].style.backgroundImage = "url("+ PROJECT.returnProject(rightProject).detailImgURL + ")";
                            document.querySelector(".bottomNavRight").setAttribute("href",PROJECT.returnProject(rightProject).indexHref);   
                            document.querySelector(".bottomNavRight").children[1].children[0].children[0].innerHTML = `<span class="inline-indent"></span>` +  PROJECT.returnProject(rightProject).projectType;
                            document.querySelector(".bottomNavRight").children[1].children[0].children[1].children[0].innerHTML = PROJECT.returnProject(rightProject).projectName;
                        }
    
                        switch (currentIndex) {
                            case 0:
                                fillInfo(PROJECT.projects.length-1,currentIndex+1)   
                                break;
    
                            case PROJECT.projects.length-1:
                                fillInfo(currentIndex-1,0)  
                                break;
    
                            default:
                                fillInfo(currentIndex-1,currentIndex+1)  
                        }
                        
                        break;

                    case "#logo":
                        let project = PROJECT.projects.find((e)=>e.projectID === name)

                        if (!PROJECT.projects.find((e)=>e.projectID == name)||project.projectBG =="light") {
                            var animation = bodymovin.loadAnimation({
                                container: document.getElementById('logoBM'),
                                renderer: 'svg',
                                loop: false,
                                autoplay: true,
                                path: 'data.json'
                            })
                        }
                        else {
                            var animation = bodymovin.loadAnimation({
                                container: document.getElementById('logoBM'),
                                renderer: 'svg',
                                loop: false,
                                autoplay: true,
                                path: 'logoW.json'
                            })
                        }

                        function logoAnimation() {
                            $(function(){
                            "use strict";
                            animation.play();
                            })
                        }
                        break;
                
                    // default:
                    //     break;
                }

            }
            else{console.log(`${element.insertID} doesn't exist`);}
            
        });
        // navBar.insertBefore(navTemp.content, navBar.firstChild);
        // hiddenNavBar.after(hiddenNavTemp.content);

    }else{
        console.error();
    }
})

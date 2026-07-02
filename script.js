}
/*==========================================
            SODA PORTFOLIO
            PART 13 / 20
==========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const progress = document.querySelector(".loading-progress");

    let width = 0;

    const loading = setInterval(() => {

        width += Math.random() * 8 + 3;

        if (width >= 100) {

            width = 100;

            clearInterval(loading);

            setTimeout(() => {

                loader.classList.add("loader-hidden");

                setTimeout(() => {

                    loader.style.display = "none";

                }, 1000);

            }, 350);

        }

        progress.style.width = width + "%";

    }, 80);

});

/*==========================================
            SCROLL REVEAL
==========================================*/

const revealElements = document.querySelectorAll(
`
section,
.project-card,
.about-card,
.skill-card,
.stat-card,
.genre,
.contact-card,
.info-card
`
);

const revealObserver = new IntersectionObserver(

(entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

},

{
    threshold:0.15
}

);

revealElements.forEach((element)=>{

    element.classList.add("reveal");

    revealObserver.observe(element);

});
/*==========================================
            CURSOR GLOW
==========================================*/

const cursorGlow = document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

});

document.addEventListener("mouseleave",()=>{

    cursorGlow.style.opacity = "0";

});

document.addEventListener("mouseenter",()=>{

    cursorGlow.style.opacity = "1";

});

/*==========================================
            BACK TO TOP
==========================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        backToTop.style.opacity = "1";
        backToTop.style.pointerEvents = "auto";

    }else{

        backToTop.style.opacity = "0";
        backToTop.style.pointerEvents = "none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==========================================
        ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 180;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/*==========================================
        SMOOTH NAVIGATION
==========================================*/

navLinks.forEach(link=>{

    link.addEventListener("click",(event)=>{

        event.preventDefault();

        const target = document.querySelector(

            link.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});
/*==========================================
        FLOATING RED PARTICLES
==========================================*/

const background = document.querySelector(".background");

for(let i = 0; i < 40; i++){

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "%";

    particle.style.top = Math.random() * 100 + "%";

    particle.style.width = Math.random() * 6 + 2 + "px";

    particle.style.height = particle.style.width;

    particle.style.animationDuration =
        Math.random() * 12 + 8 + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    background.appendChild(particle);

}

/*==========================================
            HERO PARALLAX
==========================================*/

const hero = document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth / 2 - e.clientX) / 35;

    const y = (window.innerHeight / 2 - e.clientY) / 35;

    hero.style.transform =
        `translate(${x}px, ${y}px)`;

});

/*==========================================
        PROJECT CARD 3D EFFECT
==========================================*/

const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(event)=>{

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;

        const y = event.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - .5) * 12;

        const rotateX =
            ((rect.height / 2 - y) / rect.height) * 12;

        card.style.transform =

            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
            `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =

            `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
            `;

    });

});

/*==========================================
        FLOATING INFO CARDS
==========================================*/

const floatingCards = document.querySelectorAll(

    ".info-card,.about-card,.skill-card"

);

floatingCards.forEach((card,index)=>{

    card.animate(

        [

            {

                transform:"translateY(0px)"

            },

            {

                transform:"translateY(-10px)"

            },

            {

                transform:"translateY(0px)"

            }

        ],

        {

            duration:3500 + index * 350,

            iterations:Infinity,

            easing:"ease-in-out"

        }

    );

});
/*==========================================
        TWINKLING PARTICLES
==========================================*/

const particles = document.querySelectorAll(".particle");

particles.forEach((particle,index)=>{

    particle.animate(

        [

            {

                opacity:.2,

                transform:"scale(1)"

            },

            {

                opacity:1,

                transform:"scale(1.8)"

            },

            {

                opacity:.2,

                transform:"scale(1)"

            }

        ],

        {

            duration:2500 + Math.random()*3500,

            iterations:Infinity,

            delay:index*80,

            easing:"ease-in-out"

        }

    );

});

/*==========================================
        PROFILE GLOW
==========================================*/

const profileRing = document.querySelector(".profile-ring");

if(profileRing){

    setInterval(()=>{

        profileRing.animate(

            [

                {

                    filter:"brightness(1)"

                },

                {

                    filter:"brightness(1.6)"

                },

                {

                    filter:"brightness(1)"

                }

            ],

            {

                duration:1800,

                easing:"ease-in-out"

            }

        );

    },1800);

}

/*==========================================
        IMAGE SHINE
==========================================*/

document.querySelectorAll(".project-image").forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.animate(

            [

                {

                    filter:"brightness(1)"

                },

                {

                    filter:"brightness(1.25)"

                },

                {

                    filter:"brightness(1)"

                }

            ],

            {

                duration:700,

                easing:"ease"

            }

        );

    });

});

/*==========================================
        MAGNETIC BUTTONS
==========================================*/

document.querySelectorAll(

".primary-btn,.secondary-btn,.project-btn,.contact-button"

).forEach(button=>{

    button.addEventListener("mousemove",(event)=>{

        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left - rect.width/2;

        const y = event.clientY - rect.top - rect.height/2;

        button.style.transform =

        `translate(${x*.12}px,${y*.12}px)`;

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translate(0,0)";

    });

});

/*==========================================
        PERFORMANCE
==========================================*/

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        document.body.classList.add("paused");

    }else{

        document.body.classList.remove("paused");

    }

});
/*==========================================
        HERO ENTRANCE ANIMATION
==========================================*/

window.addEventListener("load",()=>{

    const heroElements=document.querySelectorAll(

        ".hero-tag,.hero h1,.hero p,.hero-buttons,.hero-right"

    );

    heroElements.forEach((element,index)=>{

        element.animate(

            [

                {

                    opacity:0,

                    transform:"translateY(50px)"

                },

                {

                    opacity:1,

                    transform:"translateY(0px)"

                }

            ],

            {

                duration:900,

                delay:index*180,

                fill:"forwards",

                easing:"ease-out"

            }

        );

    });

});

/*==========================================
        STATS COUNTER
==========================================*/

const statNumbers=document.querySelectorAll(".stat-card h1");

const counterObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting)return;

        const element=entry.target;

        const text=element.textContent;

        const target=parseInt(text.replace(/\D/g,""));

        if(isNaN(target))return;

        let count=0;

        const speed=Math.max(15,2000/target);

        const counter=setInterval(()=>{

            count++;

            element.textContent=count+"+";

            if(count>=target){

                clearInterval(counter);

                element.textContent=text;

            }

        },speed);

        counterObserver.unobserve(element);

    });

},{threshold:.5});

statNumbers.forEach(stat=>{

    counterObserver.observe(stat);

});

/*==========================================
        PROJECT CARD GLOW
==========================================*/

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.animate(

            [

                {

                    boxShadow:"0 15px 35px rgba(255,40,40,.15)"

                },

                {

                    boxShadow:"0 0 70px rgba(255,40,40,.45)"

                },

                {

                    boxShadow:"0 20px 45px rgba(255,40,40,.25)"

                }

            ],

            {

                duration:600,

                easing:"ease"

            }

        );

    });

});

/*==========================================
        SECTION FADE-IN
==========================================*/

const sections=document.querySelectorAll("section");

sections.forEach((section,index)=>{

    section.animate(

        [

            {

                opacity:0

            },

            {

                opacity:1

            }

        ],

        {

            duration:1000,

            delay:index*120,

            fill:"both"

        }

    );

});
/*==========================================
        PART 18 / 20
        NAVBAR + PARALLAX + SPARKLES
==========================================*/

/*==========================================
        NAVBAR SCROLL EFFECT
==========================================*/

const navbar = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.style.background =
            "rgba(15,0,0,.88)";

        navbar.style.backdropFilter =
            "blur(30px)";

        navbar.style.borderBottom =
            "1px solid rgba(255,40,40,.25)";

        navbar.style.boxShadow =
            "0 15px 35px rgba(255,40,40,.18)";

    }

    else{

        navbar.style.background =
            "rgba(12,0,0,.55)";

        navbar.style.borderBottom =
            "1px solid rgba(255,255,255,.06)";

        navbar.style.boxShadow = "none";

    }

});

/*==========================================
        HERO PARALLAX
==========================================*/

const heroSection = document.querySelector(".hero");
const profileCard = document.querySelector(".profile-card");

window.addEventListener("mousemove",(event)=>{

    const x =
        (event.clientX-window.innerWidth/2)/45;

    const y =
        (event.clientY-window.innerHeight/2)/45;

    if(heroSection){

        heroSection.style.transform =
            `translate(${x}px,${y}px)`;

    }

    if(profileCard){

        profileCard.style.transform =
            `
            rotateY(${x*.25}deg)
            rotateX(${-y*.25}deg)
            `;

    }

});

/*==========================================
        PROFILE SPARKLES
==========================================*/

const wrapper =
document.querySelector(".profile-wrapper");

if(wrapper){

    for(let i=0;i<15;i++){

        const sparkle =
        document.createElement("span");

        sparkle.className = "sparkle";

        sparkle.style.left =
            Math.random()*100+"%";

        sparkle.style.top =
            Math.random()*100+"%";

        sparkle.style.animationDelay =
            Math.random()*4+"s";

        wrapper.appendChild(sparkle);

    }

}

/*==========================================
        BUTTON RIPPLE
==========================================*/

document.querySelectorAll(

".primary-btn,.secondary-btn,.project-btn,.contact-button"

).forEach(button=>{

    button.addEventListener("click",(event)=>{

        const ripple =
        document.createElement("span");

        ripple.className = "ripple";

        const rect =
        button.getBoundingClientRect();

        ripple.style.left =
        event.clientX-rect.left+"px";

        ripple.style.top =
        event.clientY-rect.top+"px";

        button.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },700);

    });

});

/*==========================================
        IMAGE PARALLAX
==========================================*/

document.querySelectorAll(".project-image")

.forEach(image=>{

    image.addEventListener("mousemove",(event)=>{

        const rect =
        image.getBoundingClientRect();

        const x =
        ((event.clientX-rect.left)/rect.width-.5)*18;

        const y =
        ((event.clientY-rect.top)/rect.height-.5)*18;

        image.style.transform =

        `
        scale(1.06)
        translate(${x}px,${y}px)
        `;

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform =
        "scale(1) translate(0,0)";

    });

});

/*==========================================
        RANDOM GLOW
==========================================*/

setInterval(()=>{

    document.querySelectorAll(".project-card")

    .forEach(card=>{

        card.style.boxShadow =

        `
        0 20px 50px
        rgba(
        255,
        ${40+Math.random()*30},
        ${40+Math.random()*30},
        .18)
        `;

    });

},2500);
/*==========================================
            PART 19 / 20
        PREMIUM FINAL EFFECTS
==========================================*/

/*==========================================
        FLOATING LIGHTS
==========================================*/

const lightsContainer = document.querySelector(".background");

if(lightsContainer){

    for(let i = 0; i < 20; i++){

        const light = document.createElement("div");

        light.className = "floating-light";

        light.style.left = Math.random() * 100 + "%";

        light.style.top = Math.random() * 100 + "%";

        light.style.width = Math.random() * 120 + 60 + "px";

        light.style.height = light.style.width;

        light.style.opacity = Math.random() * 0.25;

        light.style.animationDuration =
            10 + Math.random() * 12 + "s";

        lightsContainer.appendChild(light);

    }

}

/*==========================================
        PROJECT CARD CLICK
==========================================*/

document.querySelectorAll(".project-card")

.forEach(card=>{

    card.addEventListener("click",()=>{

        card.animate(

            [

                {

                    transform:"scale(1)"

                },

                {

                    transform:"scale(.98)"

                },

                {

                    transform:"scale(1)"

                }

            ],

            {

                duration:250,

                easing:"ease-out"

            }

        );

    });

});

/*==========================================
        HERO TITLE GLOW
==========================================*/

const heroTitle = document.querySelector(".hero h1");

if(heroTitle){

    setInterval(()=>{

        heroTitle.animate(

            [

                {

                    textShadow:
                    "0 0 0px rgba(255,0,0,0)"

                },

                {

                    textShadow:
                    "0 0 35px rgba(255,60,60,.7)"

                },

                {

                    textShadow:
                    "0 0 0px rgba(255,0,0,0)"

                }

            ],

            {

                duration:2500,

                easing:"ease-in-out"

            }

        );

    },2500);

}

/*==========================================
        SECTION STAGGER
==========================================*/

document.querySelectorAll(

".about-card,.skill-card,.project-card,.contact-card"

).forEach((element,index)=>{

    element.style.animation =

        `fadeUp .8s ease forwards`;

    element.style.animationDelay =

        `${index * 120}ms`;

});

/*==========================================
        IMAGE PRELOADER
==========================================*/

window.addEventListener("load",()=>{

    document.querySelectorAll("img")

    .forEach(image=>{

        const preload = new Image();

        preload.src = image.src;

    });

});

/*==========================================
        FPS OPTIMIZATION
==========================================*/

let lastScroll = 0;

window.addEventListener("scroll",()=>{

    const now = Date.now();

    if(now - lastScroll < 16){

        return;

    }

    lastScroll = now;

});

/*==========================================
        CONSOLE MESSAGE
==========================================*/

console.log(

"%cSoda Portfolio Loaded Successfully",

"color:#ff3333;font-size:18px;font-weight:bold;"

);
/*==========================================
            PART 20 / 20
            FINAL INITIALIZATION
==========================================*/

document.addEventListener("DOMContentLoaded",()=>{

    console.log("✅ Soda Portfolio Initialized");

    /*==============================
        REMOVE FOCUS AFTER CLICK
    ==============================*/

    document.querySelectorAll("a,button")

    .forEach(element=>{

        element.addEventListener("mouseup",()=>{

            element.blur();

        });

    });

    /*==============================
            DISABLE IMAGE DRAG
    ==============================*/

    document.querySelectorAll("img")

    .forEach(image=>{

        image.draggable = false;

        image.addEventListener("dragstart",(event)=>{

            event.preventDefault();

        });

    });

    /*==============================
            EXTERNAL LINKS
    ==============================*/

    document.querySelectorAll("a[target='_blank']")

    .forEach(link=>{

        link.setAttribute(

            "rel",

            "noopener noreferrer"

        );

    });

    /*==============================
            NAVBAR SHADOW
    ==============================*/

    const nav = document.querySelector("nav");

    if(nav){

        nav.style.transition = ".35s";

    }

    /*==============================
        SCROLL TO TOP ON REFRESH
    ==============================*/

    if("scrollRestoration" in history){

        history.scrollRestoration = "manual";

    }

    window.scrollTo(0,0);

    /*==============================
        LOADING COMPLETE
    ==============================*/

    document.body.classList.add("website-loaded");

});

/*==========================================
        WINDOW RESIZE
==========================================*/

window.addEventListener("resize",()=>{

    document.documentElement.style.setProperty(

        "--window-width",

        window.innerWidth+"px"

    );

});

/*==========================================
        ERROR HANDLER
==========================================*/

window.addEventListener("error",(event)=>{

    console.warn(

        "Portfolio Error:",

        event.message

    );

});

/*==========================================
        PAGE VISIBILITY
==========================================*/

document.addEventListener(

    "visibilitychange",

    ()=>{

        if(document.hidden){

            console.log("Portfolio Paused");

        }else{

            console.log("Portfolio Active");

        }

    }

);

/*==========================================
        FINAL MESSAGE
==========================================*/

console.log(

`%c
███████╗ ██████╗ ██████╗  █████╗
██╔════╝██╔═══██╗██╔══██╗██╔══██╗
███████╗██║   ██║██║  ██║███████║
╚════██║██║   ██║██║  ██║██╔══██║
███████║╚██████╔╝██████╔╝██║  ██║
╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝

Portfolio Created by Soda
`,

"color:#ff2b2b;font-weight:bold;font-size:13px;"

);

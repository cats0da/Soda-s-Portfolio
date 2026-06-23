// SCROLL REVEAL
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
    if(entry.isIntersecting){
    entry.target.classList.add("show");
    }
    });
    });
    
    document.querySelectorAll("section,.card,.stat").forEach(el=>{
    observer.observe(el);
    });
    
    // NAV ACTIVE
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");
    
    window.addEventListener("scroll",()=>{
    let current="";
    
    sections.forEach(sec=>{
    if(scrollY >= sec.offsetTop - 200){
    current = sec.id;
    }
    });
    
    links.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute("href")==="#"+current){
    link.classList.add("active");
    }
    });
    });

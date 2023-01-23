const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

// jeg hentet id-ene til "nav", "article" og "title" 
const nav = document.getElementById ("nav");
const article = document.getElementById("article");
const tiltle = document.getElementById("title")

/* jeg løp gjennom resources arrayen for å hente spesifike ojekter. jeg brukte en if test for å sjekke om tittelen er lik category i resources arrayen.
hvis den er lik titellen så printes ut riktig tittel og text til HTML siden */
resources.map((i)=> {
 if(tiltle.innerHTML==i.category)
article.innerHTML += "<h2>" + i.category + "</h2>" + "<p>" + i.text + "</p>" ;


// resources.forEach((element) => element.sources.forEach((ting)=>{
//     if(title.innerHTML==element.category){
//     article.innerHTML += "<ul><li><a href='" + ting.url + "'>" + ting.title ; }
// }))
 }) 

 /* her løp jeg resources arrayen på andre nivå og denne gangen brukte jeg forEach. jeg sjekket om titellen til HTML siden var lik caategory i resource arayyen
 og skrev ut riktige lenker til de forkjellige HTML sidene */
resources.forEach((i)=> i.sources.forEach((hey) =>{
    // if(tiltle.innerHTML==i.category){
    // article.innerHTML += "<h2>" + i.category + "</h2>" + "<p>" + i.text + "</p>"  ; }
     if( tiltle.innerHTML == i.category){
         article.innerHTML +=  "<ul><li><a href='" + hey.url + "'>" + hey.title
     }
 }) )
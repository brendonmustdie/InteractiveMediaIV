// Production nav
 const navigationData = [
   { title: "Home", link: "https://brendonmustdie.github.io/InteractiveMediaIV/index.html" },
    { title: "Blog posts", link: "https://brendonmustdie.github.io/InteractiveMediaIV/Blogs/blog-posts.html" },
   { title: "Design Page", link: "https://brendonmustdie.github.io/InteractiveMediaIV/Pages/design.html"}
     { title: "Obsess", link: "https://brendonmustdie.github.io/InteractiveMediaIV/Pages/ocd-sim.html" },
    ];
   
// Development nav
// const navigationData = [
//   { title: "Home", link: "../index.html" },
 //  { title: "Blog posts", link: "../Blogs/blog-posts.html" },
 //  { title: "Design Page", link: "../Pages/design.html" },
 //  { title: "Obsess", link: "../Pages/ocd-sim.html" },
// ];
   
   const navigations = document.getElementsByClassName("navigation");
   
   for (var i = 0; i < navigations.length; i++) {
     let list = document.createElement("ul");
   
     for (var j = 0; j < navigationData.length; j++) {
       let listItemLink = document.createElement("a");
       listItemLink.innerText = navigationData[j].title;
       listItemLink.setAttribute("href", navigationData[j].link);
       let listItem = document.createElement("li");
       listItem.appendChild(listItemLink);
       list.appendChild(listItem);
     }
   
     navigations[i].appendChild(list);
   }
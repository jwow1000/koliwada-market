window.Webflow ||= [];

window.Webflow.push(() => {
  // place buttons on the map according to the CMS coordinates
	document.querySelectorAll(".kwm-button").forEach(el => {
    const x = parseFloat(el.dataset.x);
    const y = parseFloat(el.dataset.y);
    el.style.left = `${x}%`;
    el.style.top = `${y}%`;
  });
  
  // make the season buttons change the image and rich text
  document.querySelectorAll(".season-button1").forEach(el => {
    el.addEventListener("click", () => {
      const type = el.dataset.type;
      handleSeason(type);
    })
  });


})  

// function to change the bg image and the refs to the texts
function handleSeason( season ) {
  // change the bg
  // select the bg wrapper, change opacity
  document.querySelectorAll(".kwm-bg").forEach(el => {
    if(el.dataset.type === season) {
      el.style.opacity = "1";
    } else {
      el.style.opacity = '0';
    }
  })


}
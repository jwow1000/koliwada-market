window.Webflow ||= [];

window.Webflow.push(() => {
  let seasonState = "season";

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
    });
  });

  // give the button overlays story action
  document.querySelectorAll(".kwm-button").forEach(el => {
    el.addEventListener("click", () => {
      const name = el.dataset.name;
      handleDetail(name);
    });
  }); 
  
  // handle click on button to show story
  function handleDetail(name) {
    // console.log("name", name); 
    // show the name story
    document.querySelectorAll(".kwm-story").forEach(el => {
      console.log("log the items: ", el);
      if(el.dataset.name === name) {
        el.style.display = "grid";
        el.style.opacity = "1";
        el.style.pointerEvents = "auto";
        // select and change the blurbs in the story
        document.querySelectorAll(".kwm-story-blurb-rt").forEach(el => {
          if(el.dataset.type === seasonState) {
            el.style.opacity = "1";
            el.style.position = "relative";
          } else {
            el.style.opacity = '0';
            el.style.position = "absolute";
          }
        }); 
        el.addEventListener("click", () => {
          el.style.display = "none";
          el.style.opacity = "0";
          el.style.pointerEvents = "none";
        })
      } else {
        el.style.display = "none";
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
      }
    })
  }

  

  // function to change the bg image and the refs to the texts
  function handleSeason( season ) {
    seasonState = season;
    // change the bg
    // select the bg wrapper, change opacity
    document.querySelectorAll(".kwm-bg").forEach(el => {
      if(el.dataset.type === season) {
        el.style.opacity = "1";
      } else {
        el.style.opacity = '0';
      }
    });

    // make the button selected
    document.querySelectorAll(".season-button1").forEach(el => {
      if(el.dataset.type === season) {
          el.classList.add('selected');
        } else {
          el.classList.remove('selected');
        }
    });

    // select and change the blurbs in the story
    document.querySelectorAll(".kwm-story-blurb-rt").forEach(el => {
      if(el.dataset.type === season) {
        el.style.opacity = "1";
        el.style.position = "relative";
      } else {
        el.style.opacity = '0';
        el.style.position = "absolute";
      }
    }); 
  }
});
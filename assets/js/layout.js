// Create side header and siderbar dynamically on all pages
class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h1 id="title">leekie_faucet</h1>`;
    }
}

customElements.define("site-header", SiteHeader);

// Star falling animation
// Based on https://codepen.io/StarKnightt/pen/eYxXxaR
function stars() {
    let star = document.createElement("div");
    star.setAttribute("class", "star");
    document.body.appendChild(star);
    // Set position on x axis
    star.style.left = Math.random() * + innerWidth + "px";
  
    // Allow for slightly variables in size/duration
    let size = Math.random() * 15;
    let duration = Math.random() * 3;
  
    // Set height and width to adjust gif in background
    star.style.height = (20 + size) + "px";
    star.style.width = (20 + size) + "px";
    star.style.animationDuration = 3 + duration + "s";

    setTimeout(function () {
      document.body.removeChild(star);
    }, 7000);

    // Increase the font size of tail because icon smaller
    let tailSize = size;
    let tailFactor = 1;

    let newTail = star;
    
    // Create max 10 trailing children
    for (let i = 0; i < 10; i++) {
        let tail = document.createElement("div")
        tail.setAttribute("class", "star-tail");

        if (tailFactor * tailSize >= 2 ) {
            newTail.appendChild(tail);
            let duration = Math.random() * 2;
            tail.insertAdjacentHTML("afterbegin", "<div style=\"animation-duration:" + (1 + duration) + "s\"></div>")
            tail.style.fontSize = tailFactor * tailSize + "px";
        }
        // If tail too small, stop loop
        else {
            console.log(i)
            break;
        }
        // Add additional spacing for first trail
        if (i == 0) {
            tail.style.transform = "translate(0px, -40px)"
        }

        newTail = tail;
        tailFactor *= 0.85 ;
    }
}
setInterval(function () {
    stars();}, 100);
let health = 100;
let hitCount = 0;

function slap() {
  console.log("slapped");

  health--;
  hitCount++;
  drawSlap();
  setTimeout(drawCharacter, 300);
}

function punch() {
  health -= 5;
  hitCount++;
  drawPunch();
  setTimeout(drawCharacter, 300);
}

function kick() {
  health -= 10;
  hitCount++;
  drawKick();
  setTimeout(drawCharacter, 300);
}

function feedThulu() {
  health += 10;
  drawCharacter();
}

function drawHits() {
  let hitElem = document.getElementById("hit-count");

  hitElem.innerText = hitCount;
}

function oceanArena() {
  let arenaElem = document.getElementById("arena");
  arenaElem.classList.remove("space");
  arenaElem.classList.add("ocean");
}

function spaceArena() {
  document.getElementById("arena").classList.remove("ocean");

  document.getElementById("arena").classList.add("space");
}

function mountainArena() {
  let newArenaElem = document.getElementById("arena");
  newArenaElem.classList.remove("space");
  newArenaElem.classList.remove("ocean");
  newArenaElem.classList.add("mountain");
}

function drawHealth() {
  let healthElem = document.getElementById("health-bar");
  let healthDisplayElem = document.getElementById("health-display");
  if (health < 90) {
    healthDisplayElem.classList.add("strong");
  } else if (health < 80) {
    healthDisplayElem.classList.add("weak");
  }
  healthElem.innerText = health;
}

function drawCharacter() {
  let thuluElem = document.getElementById("thulu-image");

  if (health > 75) {
    template = "";
    template += `
 <img
              src="assets/no-bg-health-75-thulu (1).png"
              alt=""
            />
 `;
    thuluElem.innerHTML = template;
  } else if (health <= 75 && health > 50) {
    template = "";
    template += `
<img src="assets/health-75-thulu.png" alt="" />
 `;
    thuluElem.innerHTML = template;
  } else if (health <= 50 && health > 25) {
    template = "";
    template += `
  <img src="assets/health-50-thulu.png" alt="" />
 `;
    thuluElem.innerHTML = template;
  } else if (health <= 25 && health > 0) {
    template = "";
    template += `
 <img src="assets/health-25-thulu.png" alt="" />
 `;
    thuluElem.innerHTML = template;
  } else {
    template = "";
    template += `
 <img src="assets/health-0-thulu.png" alt="" />
 `;
    thuluElem.innerHTML = template;
  }
  drawHealth();
  drawHits();
}

drawCharacter();

function drawSlap() {
  template = "";
  let charaterElem = document.getElementById("thulu-image");

  template += `
    
      
      <img
        src="assets/slap-thulu.png"
        alt=""
      />
    `;
  charaterElem.innerHTML = template;
}

function drawPunch() {
  template = "";
  let charaterElem = document.getElementById("thulu-image");

  template += `
    
      
      <img
        src="assets/punch-thulu.png"
        alt=""
      />
    `;
  charaterElem.innerHTML = template;
}

function drawKick() {
  template = "";
  let charaterElem = document.getElementById("thulu-image");

  template += `
    
      
      <img
        src="assets/kick-thulu.png"
        alt=""
      />
    `;
  charaterElem.innerHTML = template;
}

const clockEls = document.querySelectorAll("#clock");
function tick(){
  const d = new Date();
  clockEls.forEach(el => el.textContent = d.toLocaleTimeString("en-GB"));
}
tick();
setInterval(tick, 1000);

const q = document.getElementById("q");
const clear = document.getElementById("clear");
const list = document.getElementById("list");
const count = document.getElementById("count");

function update(){
  if(!list) return;
  const rows = Array.from(list.querySelectorAll(".row"));
  const term = (q?.value || "").trim().toLowerCase();

  let shown = 0;
  rows.forEach(r=>{
    const hay = (r.textContent + " " + (r.getAttribute("data-tags")||"")).toLowerCase();
    const ok = !term || hay.includes(term);
    r.style.display = ok ? "" : "none";
    if(ok) shown++;
  });

  if(count) count.textContent = shown + " shown";
}
update();

q?.addEventListener("input", update);
clear?.addEventListener("click", ()=>{
  q.value = "";
  update();
});

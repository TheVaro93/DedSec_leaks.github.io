const copyBtn = document.getElementById("copyBtn");
const topBtn = document.getElementById("topBtn");
const twAge = document.getElementById("twAge");

function setAge(){
  const mins = 15 + Math.floor(Math.random() * 40);
  twAge.textContent = `${mins}m`;
}
setAge();

copyBtn.addEventListener("click", async () => {
  try{
    await navigator.clipboard.writeText(location.href);
    copyBtn.textContent = "Copied";
    setTimeout(()=>copyBtn.textContent="Copy link", 900);
  }catch(e){
    copyBtn.textContent = "Error";
    setTimeout(()=>copyBtn.textContent="Copy link", 900);
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({top:0,behavior:"smooth"});
});

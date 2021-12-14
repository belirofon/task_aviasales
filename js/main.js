const firstInput = document.getElementById("input_1");
const tabs = document.querySelectorAll(".tab");
const inputs = document.querySelectorAll(".js-input");
const firstLabel = document.getElementById("label");



const handleListener = document.addEventListener("click", (event) => {
  if(event.target === firstInput) {
    inputToggle()
  } else (event.target === tabs) 
    tabsToggle()
})
const inputToggle = () => {
  for (let item of inputs) {
    
    item.checked =  !item.checked;
    firstInput.checked = !firstInput.checked;
  }
}
const tabsToggle = () => {
  tabs.forEach(item => {
    item.classList.remove("checked");
  })
  event.target.classList.toggle("checked");
}

window.addEventListener('load', handleListener);

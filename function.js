const buttonLogin = document.querySelector(`.login_button`);
const buttonRegister = document.querySelector(`.register_button`);
const spanColor = document.querySelector(`span`);
const regForm = document.getElementById(`regForm`)
const logForm = document.getElementById(`logForm`)
let candao = true;
let candao2 = false;
let candao3 = true

buttonLogin.onmouseleave = (e) => {
  if (!candao2) {
    spanColor.style.right = `-30px`;
    spanColor.style.backgroundColor = `var(--color3)`;
  }
};
buttonRegister.onmouseleave = (e) => {
  if (candao2) {
    spanColor.style.right = `200px`;
    spanColor.style.backgroundColor = `var(--color3)`;
  }
};
buttonLogin.onmousemove = (e) => {
  spanColor.style.right = `200px`;
  candao ? (spanColor.style.backgroundColor = `var(--color1)`) : 0;
};
buttonRegister.onmousemove = (e) => {
  spanColor.style.right = `-30px`;
  !candao ? (spanColor.style.backgroundColor = `var(--color1)`) : 0;
};
buttonLogin.onclick = (e) => {
  e.preventDefault();
  candao = false;
  candao2 = true;
  spanColor.style.backgroundColor = `var(--color3)`;
  if(candao3){
    candao3 = false
    logForm.style.display = `block`
    regForm.style.display = `none`
  }
};
buttonRegister.onclick = (e) => {
  e.preventDefault();
  candao = true;
  candao2 = false;
  spanColor.style.backgroundColor = `var(--color3)`;
  if (!candao3) {
    candao3 = true
    regForm.style.display = `block`
    logForm.style.display = `none`

  }
};

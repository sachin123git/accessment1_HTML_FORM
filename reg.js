function checkfname(){
    
      let f_name = document.getElementById("fname").value;
      let reg_ex = /^[a-zA-Z]*$/;
      if (reg_ex.test(f_name)) {
    
        return false;
      } else {
        alert("enter only alphabeat")
        return false;
      }

    }

function checklname(){
    let l_name = document.getElementById("lname").value;
    let reg_ex = /^[a-zA-Z]*$/;
    if (reg_ex.test(l_name)) {
      return false;
    } else {
      alert("enter only alphabeat");
      return false;
    }

}

function check_mobile() {
  let mobile = document.getElementById("mono").value;
  let reg_mo_ex = /^[0-9]*$/;
  if (reg_mo_ex.test(mobile)) {
    
    return false;
  } else {
     alert("Alphabet not allowed")
    return false;
  }
}

function check_empty(){
    let input = document.querySelector("input").value;
    if(input == ""){
        alert("fill the blank items");
        fname.classList.add("error");
        lname.classList.add("error");
        email.classList.add("error");
        mono.classList.add("error");
        date.classList.add("error");
        add.classList.add("error");
        city.classList.add("error");
        area.classList.add("error");
        state.classList.add("error");
        pass.classList.add("error");
        return false;
    }else{
         fname.classList.remove("error");
         lname.classList.remove("error");
         email.classList.remove("error");
         mono.classList.remove("error");
         date.classList.remove("error");
         add.classList.remove("error");
         city.classList.remove("error");
         area.classList.remove("error");
         state.classList.remove("error");
         pass.classList.remove("error");
         return false;
    }
}
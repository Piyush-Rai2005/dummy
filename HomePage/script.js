function toggle(section){
    let blur=document.querySelector('.blur');
    blur.classList.toggle('active');
    if(section==='login'){
        let login=document.querySelector('.loginPage');
        login.classList.toggle('active');
        let about=document.querySelector('.info');
        about.classList.remove('active');
    }
    else{
        let about=document.querySelector('.info');
        about.classList.toggle('active');
        let login=document.querySelector('.loginPage');
        login.classList.remove('active');   
    }
}
document.getElementById("dashboard").addEventListener("click", function() {
  window.location.href = '/dashboard/dashboard.html';
});

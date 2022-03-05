document.addEventListener("DOMContentLoaded", (event) => {

  //open and close folder icon toggle
	
  document.getElementById('folder').addEventListener('click', () => {     
	  openFolder()
    });
	
const openFolder = () => {
	  document.getElementById('open').classList.toggle('invisible');
    document.getElementById('closed').classList.toggle('invisible');
}
})


window.onload = () => {

}
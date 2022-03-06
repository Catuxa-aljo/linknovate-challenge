document.addEventListener("DOMContentLoaded", (event) => {

  //open and close folder icon toggle
	
  document.querySelectorAll('.folders').forEach(folder => {
    folder.addEventListener('click', () => {     
	  folder.querySelectorAll('.folder').forEach(fold => {
      fold.classList.toggle('invisible')
    })
    })
   });
	
const openFolder = () => {
	  document.getElementById('open').classList.toggle('invisible');
    document.getElementById('closed').classList.toggle('invisible');
}
})


window.onload = () => {

}
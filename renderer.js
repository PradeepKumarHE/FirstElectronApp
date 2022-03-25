document.addEventListener('DOMContentLoaded', async() => {
   let names=window.api.getData();
   let divId=document.getElementById("");
   let namestring=names.join("<br> /");
   divId.innerHTML=namestring;
});
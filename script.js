const main = document.querySelector('main'); 
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function displayList(){
  main.innerHTML = "";
  list.forEach(item => {
   const div =  document.createElement('div');
   div.textContent = item;
   main.append(div);
  });
}
// displayList();
// displayList();//


function sortDescending() {
 list.sort((a, b) => {
   if (a > b) {
     return -1;
   }
   else {
     return 1;
   }
  }); 
}
function sortAscending(){
  list.sort((a, b) => a < b )
}

displayList();

  document.querySelector('#sort-descending').addEventListener('click', function(){
    sortDescending();
    displayList();
  });
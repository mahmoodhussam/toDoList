const clear = document.querySelector('#clear');
const date = document.querySelector('#date');
const list = document.querySelector('.list');
const check = document.querySelector('.check');
const trach = document.querySelector('.trach');
const addI = document.querySelector('.addI');
const input = document.querySelector('#input');
const done = "fa-check-circle";
const fdone = "fa-circle";
const line_th = "line"
document.addEventListener('keyup' , addToDo);
clear.addEventListener('click' , deleteAll);
list.addEventListener('click' , function(event){
	let element = event.target;
	if(element.classList.contains('check')){

		completeToDo(element);
	}
	else if(element.classList.contains('trach')){
		deleteToDo(element);
	}
});

function addToDo(event){
	if(event.keyCode == 13){
		if(input.value != ""){
		text = 
		 	   '<li class = "item">'+ 	
			   '<div id = "left">'+			
			   '<i class="far fa-circle check"></i>'+
				
			    '<p>'+input.value+'</p>'+
				'</div>'+	
				'<i class="fas fa-trash-alt trach"></i>'+
				
				'</li>' ; 
		list.insertAdjacentHTML('beforeend' , text);
		input.value = "";
	}

}
	
}

function completeToDo(element){
	element.classList.toggle(done); 
	element.classList.toggle(fdone); 
	element.parentNode.lastElementChild.classList.toggle(line_th);
}

function deleteToDo(element){
	element.parentNode.remove();
}
function deleteAll(){
	list.innerHTML = "" ; 
}
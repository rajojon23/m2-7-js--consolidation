// 😋
//const topTenList --- for reference only 

let butt_2018 = document.querySelector("#butt_2018");
let button_year = document.querySelectorAll(".boom");
let year_top = document.querySelector("#yeartop");
let hover_message = document.querySelector(".eeee");

let food_display = document.querySelector(".bbbb");
let pos_display = document.querySelector(".aaaa");

launch_default();


button_year.forEach((button)=> {

	button.addEventListener("click", function(event){

		clear_buttons();

		let text_year = event.target.textContent;
		year_top.textContent = text_year;

		event.target.style.backgroundColor = "#5b2a86";
		event.target.style.color = "#fff";


		deploy_food(text_year);
	});


});



//function for reverting back original style of year buttons
function clear_buttons(){
	button_year.forEach((button)=> {
			button.style.background = "transparent";
			button.style.color = "#5b2a86";
	});
}

//function for extracting the food info based on clicked items
function deploy_food(year){
	let food_pos = document.querySelectorAll(".that");

	food_pos.forEach((pos) => {

		pos.addEventListener("click", function(event){

			let pos_text = pos.textContent;
			let pos_num = parseInt(pos_text);


			let food_choice = topTenList[year][pos_num-1];

			display_food(food_choice);

		});

	});
}


//function for manipilating any content of the ui 
function display_food(food_choice){

	food_display.style.display = "block";
	pos_display.style.display = "block";
	hover_message.style.display = "none";

	pos_display.textContent = food_choice["id"];
	food_display.textContent = food_choice["name"];
}


//function for initial state of the web page: 2018 foods are 'deployed' by default
function launch_default(){
	food_display.style.display = "none";
	pos_display.style.display = "none";

	let button_18 = document.querySelector("#butt_2018");

	button_18.style.backgroundColor = "#5b2a86";
	button_18.style.color = "#fff";

	deploy_food(2018);
}



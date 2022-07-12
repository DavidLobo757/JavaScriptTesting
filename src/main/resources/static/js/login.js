 var submitBtn = document.querySelector("#submitBtn")
 var username = document.querySelector("#username")
 var users = []
         
         submitBtn.addEventListener('click', () => {
        	var username = document.querySelector("#username")
        	var password = document.querySelector("#password")
        	
        	if(username.value == '' && password.value == '') {
        		alert("Please enter a username and password")
        		console.log("Invalid login attempt")
        	} else {
        		console.log("Input look valid, proceed with form submission")
        		var user = {
					"username" : username.value,
					"password" : username.value
				}
        		
        		users.push(user);
        	}
         })
       	 
         username.addEventListener('blur', () => {
			var username = document.querySelector("#username")
			var password = document.querySelector("#password")
			var user = {
				"username": username.value,
				"password": password.value
				
			}
			
	       fetch(`http://localhost:8080/users/exists`, {
				method: "Post",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(user)
			})
	       	.then((response) => response.json())
			.then((data) => {
				console.log(data)
			})
	     })
//	     
//	     
//	   This is how you would write it in json format 
//	     body: `{
//	     	"username": "${username.value}",
//	     	"password": "${password.value}"
//	     }`)
//	     
//	     
//	     
// ?username=${username.value}&password=${password.value}	     
	     
//	     .then(function(response) {
//					reponse.json()
//  	 })
//	     .then((data) => {
//				console.log(data)
//	     })
//	     d we could also just do .then((response) {
//				                    console.log(response)
//		                         })
	     
var usernameTextBox = document.querySelector("#username")
var passwordTextBox = document.querySelector("#password")

	usernameTextBox.addEventListener('focus', function() {
		console.log("username text box in focus")
	})
	
	usernameTextBox.addEventListener('blur', () => {
		console.log("username text box is blured")
	})
	
	passwordTextBox.addEventListener('focus', function() {
		console.log("password text box in focus")
	})
	
	passwordTextBox.addEventListener('blur', () => {
		console.log("password text box is blured")
	})
	
	
	
	
	
	
	
	
	
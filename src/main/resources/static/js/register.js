var usernameTextbox = document.querySelector("#username")
var passwordTextbox = document.querySelector("#password")
var eyeIcons = document.querySelectorAll('.fa-eye')

eyeIcons.forEach( (eyeIcon) =>{
	eyeIcon.addEventListener('click', () => {
		if (eyeIcon.classList.contains('fa-eye')) {
			eyeIcon.classList.replace('fa-eye', 'fa-eye-slash')
		} else {
			eyeIcon.classList.replace('fa-eye-slash', 'fa-eye')
		}
	})
})

// This is for demonstration purposes

function myPromise() {
	
	return new Promise((resolve, reject) =>{
		let i = 1
		
		if (i === 1) {
			resolve("hey, i === 1, so we're cool!'")
		} else {
			reject("Absolute fail. i is not 1, boooooo")
		}
		
	})
}
// Make sure to always remove the root url because in production it's not going to be the root url
// it already picks up the root url 
 
// For demonstration purposes
//myPromise.then( (message) =>{
//		console.log(message)
//	}).catch( (message) =>{
//		console.log(message)
//	})

usernameTextbox.addEventListener('blur', ()=> {
	var user = {
		'username': usernameTextbox.value,	
	}
	fetch('/users/exists', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(user)
	}) 
	.then((responseEntity) =>  responseEntity.json())
	.then( (data) =>{
		// triple equals not only validates but the datatype for example if what you're checking is a boolean then the other value has to be a value'
		if (data === true) {
			// this users already exists!
			console.log("username already exists")
			usernameTextbox.focus()
			usernameTextbox.select()
			showErrorAnimation().then((message) =>{
				// animation is completed at this point
				console.log(message)
				console.log("We're now in the call back function'")
				usernameTextbox.style.backgroundColor = 'rgb(255,255,255)'
			})
			
		}
	})
})


// If the user does not type out the actual username but instead puts in an automatic input let's say from google fill it won't show the animation


function showErrorAnimation () {
	return new Promise ( (resolve, reject) =>{
		console.log("We're in the showErrorAnimation function")
		var i = 0
		
		var animationInterval = setInterval( () => {
					i++
					usernameTextbox.style.backgroundColor = `rgb(${i}, 0, 0)`
					
					
					if (i >= 255) {
						clearInterval(animationInterval);
						resolve("Done executing animation code")
						
					}
					
			}, 1)
	})
	
}

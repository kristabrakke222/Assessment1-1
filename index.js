var numberofvolunteersEl = document.getElementsByName('numberofvolunteers')[0]
numberofvolunteersEl.onkeyup=(e) => {
	if(e.keyCode===13){
		e.preventDefault()
		let number= (numberofvolunteersEl.value)
		let listelement=document.getElementById("volunteerlist")
		listelement.innerHTML=""
		for (var i=1;i<=number;i++){
			let input=document.createElement("input")
			input.setAttribute("type","text")
			input.setAttribute("name","volunteer"+i)
			listelement.appendChild(input)
		}
	}
}


var submitButton = document.getElementById('pageForm')

submitButton.onsubmit = (e) => {
    // Prevent Page refresh
	e.preventDefault()



    // Declare variable for form values. get all the elements by there name.
    var recipientNameEl = document.getElementsByName('recipientName')[0]
    var organizationNameEl = document.getElementsByName('organizationName')[0]

    var eventDateEl = document.getElementsByName('eventDate')[0]
    var websiteURLEl = document.getElementsByName('websiteURL')[0]
    var hostNameEl = document.getElementsByName('hostName')[0]

    // Grab the text out of the inputs
    var recipientName = recipientNameEl.value;
    var organizationName = organizationNameEl.value;
	var numberofvolunteers = numberofvolunteersEl.value;
    var eventDate = eventDateEl.value;
    var websiteURL = websiteURLEl.value;
    var hostName = hostNameEl.value;
	
	var recipients=[recipientName]
	
			let number= (numberofvolunteersEl.value)
		for (var i=1;i<=number;i++){
			console.log ("volunteer"+i)
			recipients.push(document.getElementsByName("volunteer"+i)[0].value)
			
		}
			
		document.getElementById("messages").innerHTML=""
			for (var i=0;i<=number;i++){
	recipientName=recipients[i]
	var message =`Hello ${recipientName}!
        <br/>
        <br/> You have been invited to volunteer for an event held by ${organizationName} on ${eventDate}. Please come to the following website: ${websiteURL} to sign up as a volunteer. There are ${numberofvolunteers} volunteers coming.
        <br/>
        <br/> Thanks!
        <br/>
        <br/>
			${hostName}`
			var div=document.createElement("div")
			div.innerHTML=message
			document.getElementById("messages").appendChild(div)
			}
/*
    // Declare values for email template
    var recipientNameField = document.getElementById('recipientName')
    var organizationNameField = document.getElementById('organizationName')
	var numberofvolunteersField = document.getElementById('numberofvolunteers')
    var eventDateField = document.getElementById('eventDate')
    var websiteURLField = document.getElementById('websiteURL')
    var hostNameField = document.getElementById('hostName')

    // Set the values of the template to what is in the input fields
    recipientNameField.innerText = recipientName
    organizationNameField.innerText = organizationName
	numberofvolunteersField.innerText = numberofvolunteers
    eventDateField.innerText = eventDate
    websiteURLField.innerText = websiteURL
    hostNameField.innerText = hostName */
}
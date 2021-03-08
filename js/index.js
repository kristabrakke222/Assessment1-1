

var submitButton = document.getElementById('pageForm')

submitButton.onsubmit = (e) => {
    // Prevent Page refresh
	e.preventDefault()

    // Declare variable for form values. get all the elements by there name.
    var recipientNameEl = document.getElementsByName('recipientName')[0]
    var organizationNameEl = document.getElementsByName('organizationName')[0]
	var numberofvolunteersEl = document.getElementsByName('numberofvolunteers')[0]
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
    hostNameField.innerText = hostName
}
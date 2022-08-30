This is a simple restaurant table booking system build using NodeJS,  MySQL, Express, and React.




Things to add if project was for real client:

        -Time validation is currently done on the client side, and form will currently accept bookings 
	for today, but at an earlier time than right now (hope that makes sense :D). Given more time 
	i would validate this in the backend.

        -Email/SMS booking info to customer

        -Mobile number confirmation SMS

        -Allergy field in form (maybe a list of common allergies to select from)

        -Schema validation for forms, and better validation of mobile number

        -Ability to update booking information. This would have to include going through the table availability again.

        -More secure booking reference numbers, some kind of unique random string would be better.

        -Create user account functionality to increase security. 
	Rather than being able to search for a booking in the database, only the relevent bookings
	will be sent to a users account. OR could completely remove the booking search system from
	the client, and just send booking confirmation via email
	-





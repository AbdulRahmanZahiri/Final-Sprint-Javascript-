fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        // Step 4: Using a forEach loop to iterate over all the records
        data.forEach(record => {
            console.log(`Name: ${record.name}, ID: ${record.IdNumber}, Phone: ${record.phoneNumber}, Address: ${record.Address}, Gender: ${record.Gender}, Salary: ${record.salary}`);
        });

        // Step 5: Write three functions to return strings of data describing the contents of the JSON file
        function getNames(data) {
            return data.map(record => record.name).join(', ');
        }

        function getIdNumber(data) {
            return data.map(record => record.IdNumber).join(', ');
        } 


        function getPhoneNumbers(data) {
            return data.map(record => record.phoneNumber).join(', ');
        }


        function getAddress(data) {
            return data.map(record => record.Address).join(', ');
        }

        function getGender(data) {
            return data.map(record => record.Gender).join(', ');
        }
 

        function getSalaries(data) {
            return data.map(record => record.salary).join(', ');
        }

        
    
        // Logging the results to the console
        console.log("Names: " + getNames(data));
        console.log("ID's: " + getIdNumber(data));
        console.log("Phone Numbers: " + getPhoneNumbers(data));
        console.log("Address: " + getAddress(data));
        console.log("Gender: " + getSalaries(data));
        console.log("Salaries: " + getSalaries(data));
        

        // Displaying the results on the browser window
        document.body.innerHTML += `<p>Names: ${getNames(data)}</p>`;
        document.body.innerHTML += `<p>ID's: ${getIdNumber(data)}</p>`;
        document.body.innerHTML += `<p>Phone Numbers: ${getPhoneNumbers(data)}</p>`;
        document.body.innerHTML += `<p>Gender: ${getGender(data)}</p>`;
        document.body.innerHTML += `<p>Salaries: ${getSalaries(data)}</p>`;
    })
    .catch(error => console.error('Error:', error));

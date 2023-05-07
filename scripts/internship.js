addInternshipData = () => {
        const name = document.getElementById('name').value;
        const enrollmentNo = document.getElementById('enroll').value;
        const email = document.getElementById('email').value;
        const phoneNo = document.getElementById('cno').value;
        const internshipTitle = document.getElementById('internshipTitle').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const offerLetter = document.getElementById('offerLetter');
        const completionCertificate = document.getElementById('completionCerti');
        const intershipReport = document.getElementById('internshipReport');

        const offer_file = JSON.stringify(offerLetter.files[0]);
        const completion_file = JSON.stringify(completionCertificate.files[0]);
        const internshipReport_file = JSON.stringify(intershipReport.files[0]);

        const formdata = {
            enroll: enrollmentNo,
            name: name,
            phoneNo: phoneNo,
            email: email,
            internshipTitle: internshipTitle,
            startDate: startDate,
            endDate : endDate,
            offer_file: offer_file,
            completion_file: completion_file,
            internshipReport_file: internshipReport_file
        };

        fetch('/localhost:3000/api/internship/store', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the server
                alert('Data added successfully:', data);
            })
            .catch(error => {
                console.error('Error adding data:', error);
            });
    }
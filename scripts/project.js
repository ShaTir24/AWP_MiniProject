document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', () => {
        const leaderName = document.getElementById('LeaderName').value;
        const leaderEnroll = document.getElementById('LeaderEnroll').value;
        const leaderEmail = document.getElementById('LeaderEmail').value;
        const leaderPhoneNo = document.getElementById('LeaderPhone').value;
        const member1Name = document.getElementById('Member1').value;
        const member1Enroll = document.getElementById('Mem1Enroll').value;
        const member1Email = document.getElementById('Mem1Email').value;
        const member2Name = document.getElementById('Member2').value;
        const member2Enroll = document.getElementById('Mem2Enroll').value;
        const member2Email = document.getElementById('Mem2Email').value;
        const member3Name = document.getElementById('Member3').value;
        const member3Enroll = document.getElementById('Mem3Enroll').value;
        const member3Email = document.getElementById('Mem3Email').value;
        const member4Name = document.getElementById('Member4').value;
        const member4Enroll = document.getElementById('Mem4Enroll').value;
        const member4Email = document.getElementById('Mem4Email').value;
        const projectName = document.getElementById('Pname').value;
        const projectAbstract = document.getElementById('abstract').value;
        const projectReport = document.getElementById('Report_file');

        const report_file = projectReport.files[0];


        // Send the data to your Node.js server using AJAX or fetch API
        // In your server-side code, you can use Mongoose to save the data to MongoDB
        // Example: Use the 'fetch' API to send a POST request

        const formdata = {
            leaderName: leaderName,
            leaderEnroll: leaderEnroll,
            leaderEmail: leaderEmail,
            leaderPhoneNo: leaderPhoneNo,
            member1Name: member1Name,
            member1Enroll: member1Enroll,
            member1Email: member1Email,
            member2Name: member2Name,
            member2Enroll: member2Enroll,
            member2Email: member2Email,
            member3Name: member3Name,
            member3Enroll: member3Enroll,
            member3Email: member3Email,
            member4Name: member4Name,
            member4Enroll: member4Enroll,
            member4Email: member4Email,
            projectName: projectName,
            projectAbstract: projectAbstract,
            report_file: report_file
        };

        fetch('/localhost:3000/api/project/store', {
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
    });
});
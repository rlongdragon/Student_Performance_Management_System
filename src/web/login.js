

async function login(id, pas) {
    if (id == undefined || pas == undefined) {
        document.getElementById('error').style.display = "block";
        return;
    } 
    let checked = false;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: JSON.stringify({ 
            username: id,
            password: pas
        })
    };

    let response = await fetch('your_google_apps_script_web_application_url', options);
    let textResponse = await response.text();

    if (textResponse != "null") {
        checked = true;
    }

    let userID = parseInt(textResponse) -1;
    
    if (checked){
        userID = (id * 500000).toString(16);
        window.location.href = "student.html?id=" + userID;
    } else {
        document.getElementById('error').style.display = "block";
    }
}

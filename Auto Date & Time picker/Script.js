function updateDateTime() {
    let now = new Date();
    let formattedDateTime = now.toLocaleString(); 
    document.getElementById("datetime").innerHTML = formattedDateTime;
}

setInterval(updateDateTime, 1000); // Update every second
updateDateTime(); // Run on page load

AOS.init();

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function redirectToPage() {
    // Get the selected option value
    const selectedPage = document.getElementById('arrival').value;

    // Check if a selection was made, then redirect to the selected page
    if (selectedPage) {
        window.location.href = selectedPage;
    } else {
        alert("Gelieve een bestemming te kiezen.");
    }
}
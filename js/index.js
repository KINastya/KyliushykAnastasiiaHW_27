function redirectWithProtocol(protocol) {
    var link = document.getElementById("linkInput").value;
    if (!link.startsWith("http://") && !link.startsWith("https://")) {
        link = protocol + "://" + link;
    }
    window.location.href = link;
}
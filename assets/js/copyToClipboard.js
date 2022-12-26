function copyToClipboard(toCopy) {
     // Copy the text inside the text field
    navigator.clipboard.writeText(toCopy);
    alert("Copied ["+toCopy+"] to clipboard.");
}
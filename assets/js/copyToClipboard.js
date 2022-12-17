function copyToClipboard(toCopy) {
     // Copy the text inside the text field
    navigator.clipboard.writeText(toCopy);
    
    // Alert the copied text
    alert("Copied: " + toCopy);
  }
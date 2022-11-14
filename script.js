let examples = document.querySelectorAll("#example");

for (var i = 0; i < examples.width; i++) {
  console.log(`${examples[i].width} ${document.width}`)
  if (examples[i].width > document.width) {
    examples[i].width = document.width; 
  }
}

document.addEventListener('DOMContentLoaded', function() {
    const writingLink = document.getElementById('writingLink');
    const writingDropdown = document.getElementById('writingDropdown');
  
    writingLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      if (writingDropdown.style.display === 'block') {
        writingDropdown.style.display = 'none';
      } else {
        writingDropdown.style.display = 'block';
      }
    });
  
    // Close the dropdown if clicked outside
    document.addEventListener('click', function(event) {
      if (!writingLink.contains(event.target) && !writingDropdown.contains(event.target)) {
        writingDropdown.style.display = 'none';
      }
    });
  });
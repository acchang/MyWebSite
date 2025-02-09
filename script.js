document.addEventListener('DOMContentLoaded', function () {
    const aboutLink = document.getElementById('aboutLink');
    const aboutWindow = document.getElementById('aboutWindow');
    const projectsLink = document.getElementById('projectsLink');
    const projectsWindow = document.getElementById('projectsWindow');
    const writingLink = document.getElementById('writingLink');
    const writingWindow = document.getElementById('writingWindow');
    const otherStuffLink = document.getElementById('otherStuffLink');
    const otherStuffWindow = document.getElementById('otherStuffWindow');
  
    // Function to close all windows except the one being clicked
    function closeAllWindows(exceptWindow) {
      [aboutWindow, projectsWindow, writingWindow, otherStuffWindow].forEach((window) => {
        if (window !== exceptWindow) {
          window.style.display = 'none';
        }
      });
    }
  
    // Toggle About Me window
    aboutLink.addEventListener('click', function (event) {
      event.preventDefault();
      closeAllWindows(aboutWindow);
      aboutWindow.style.display = aboutWindow.style.display === 'block' ? 'none' : 'block';
    });
  
    // Toggle Projects window
    projectsLink.addEventListener('click', function (event) {
      event.preventDefault();
      closeAllWindows(projectsWindow);
      projectsWindow.style.display = projectsWindow.style.display === 'block' ? 'none' : 'block';
    });
  
    // Toggle Writing window
    writingLink.addEventListener('click', function (event) {
      event.preventDefault();
      closeAllWindows(writingWindow);
      writingWindow.style.display = writingWindow.style.display === 'block' ? 'none' : 'block';
    });
  
    // Toggle Other Stuff window
    otherStuffLink.addEventListener('click', function (event) {
      event.preventDefault();
      closeAllWindows(otherStuffWindow);
      otherStuffWindow.style.display = otherStuffWindow.style.display === 'block' ? 'none' : 'block';
    });
  
    // Close windows when clicking outside
    document.addEventListener('click', function (event) {
      if (
        !aboutLink.contains(event.target) &&
        !aboutWindow.contains(event.target) &&
        !projectsLink.contains(event.target) &&
        !projectsWindow.contains(event.target) &&
        !writingLink.contains(event.target) &&
        !writingWindow.contains(event.target) &&
        !otherStuffLink.contains(event.target) &&
        !otherStuffWindow.contains(event.target)
      ) {
        closeAllWindows(null);
      }
    });
  });
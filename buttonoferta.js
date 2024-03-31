function openPopup() {
    var popup = document.getElementById("popupContainer");
    popup.style.display = "block";
    setTimeout(function() {
      popup.style.transform = "translate(-50%, -50%) scale(1)";
    }, 50);
  }
  
  function closePopup() {
    var popup = document.getElementById("popupContainer");
    popup.style.transform = "translate(-50%, -50%) scale(0)";
    setTimeout(function() {
      popup.style.display = "none";
    }, 300);
  }
  
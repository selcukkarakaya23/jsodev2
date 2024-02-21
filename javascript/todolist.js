document.addEventListener("DOMContentLoaded", function () {
    var existingItems = document.querySelectorAll("#list li");
    existingItems.forEach(function (item) {
      addCloseButton(item);
    });
  
    function newElement() {
      var inputValue = document.getElementById("task").value;
      if (inputValue === "") {
        showErrorToast("Listeye boş ekleme yapamazsınız!");
      } else {
        var li = document.createElement("li");
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        addCloseButton(li); 
        document.getElementById("list").appendChild(li);
        showSuccessToast("Listeye eklendi.");
      }
      document.getElementById("task").value = "";
    }
  
    document.getElementById("list").addEventListener("click", function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
    });
  
    function addCloseButton(item) {
      var closeButton = document.createElement("span");
      var closeText = document.createTextNode("\u00D7");
      closeButton.className = "close";
      closeButton.appendChild(closeText);
      closeButton.addEventListener("click", function () {
        var listItem = this.parentElement;
        listItem.style.display = "none";
        showSuccessToast("Listeden kaldırıldı.");
      });
  
      item.appendChild(closeButton);
    }
  
    function showErrorToast(message) {
      var errorToast = new bootstrap.Toast(document.querySelector(".toast.error"));
      document.querySelector(".toast.error .toast-body").innerText = message;
      errorToast.show();
    }
  
    function showSuccessToast(message) {
      var successToast = new bootstrap.Toast(document.querySelector(".toast.success"));
      document.querySelector(".toast.success .toast-body").innerText = message;
      successToast.show();
    }
  
    document.getElementById("liveToastBtn").addEventListener("click", newElement);
  });


document.addEventListener("DOMContentLoaded", function () {
  
    var currentDay = dayjs().format("dddd, MMMM D");
    var currentHour = dayjs().hour();
  
   
    document.getElementById("currentDay").textContent = currentDay;

    var timeBlocks = document.querySelectorAll(".time-block");
    timeBlocks.forEach(function (timeBlock) {
  
      var hour = parseInt(timeBlock.id.split("-")[1]);
  
      
      if (hour < currentHour) {
        timeBlock.classList.add("past");
      } else if (hour === currentHour) {
        timeBlock.classList.add("present");
      } else {
        timeBlock.classList.add("future");
      }
  
      var savedEvent = localStorage.getItem(timeBlock.id);
      if (savedEvent) {
        timeBlock.querySelector("textarea").textContent = savedEvent;
      }
       timeBlock.querySelector(".saveBtn").addEventListener("click", function () {
      var eventText = timeBlock.querySelector("textarea").value;
        localStorage.setItem(timeBlock.id, eventText);
      });
    });
  });
  
  
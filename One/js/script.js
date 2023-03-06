function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
  let element = document.getElementById("art");
  document.getElementById("tweetyText").innerHTML =
    "<q>I thought I thaw a puddy tat!</q> - <q>!Me pareció ver un lindo gatito!</q>";
  document.getElementById("title").setAttribute("class", "blink");
  element.classList.remove("hide");
}

function allowDrop(event) {
  event.preventDefault();

  // to start
  const start = () => {
    setTimeout(function () {
      confetti.start();
    }, 1000); // 1000 = 1 seconds
  };
  // to stop
  const stop = () => {
    setTimeout(function () {
      confetti.stop();
    }, 5000); // 5000 = 5 seconds
  };
  start();
  stop();
}
/*
function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("demo").innerHTML = "Cat food was dropped";
  //document.getElementById("p1").innerHTML = "New text!";
  document.getElementById("title").setAttribute("class", "blink");
}
*/

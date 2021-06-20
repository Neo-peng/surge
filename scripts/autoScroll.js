// 自动滚屏
var body = $response.body;
console.log("script autoScroll executed!")
var isScrolling = true;

function autoScroll() {
  if (isScrolling) {
    window.scrollBy(0, 1);
    setTimeout('autoScroll()', 10)
  }
}

function process_touch(ev) {
  console.log("touched btn");
  isScrolling = !isScrolling;
  ev.preventDefault();
}

let btn = document.createElement("button");
btn.innerHTML = "start scroll";
btn.addEventListener("touchend");
btn.onclick = function() {
  console.log("click")
}
document.body.appendChild(btn);
$done({body})
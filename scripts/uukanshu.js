let headers = $response.headers;
headers['X-Modified-By'] = 'Surge';
let body = $response.body;
// 过滤掉推荐书籍和下方的分享按钮
let res = body.match(
  /<div class="(samebooks1|share)[\s\S]*?"[\s\S]*?>[\s\S]*?<\/div>/g
);
if (res !== null) {
  for (let e of res) {
    body = body.replaceAll(e, '');
  }
} else {
}
let style =
  '"width:50px;height:50px;background:grey;opacity:0.5;border-radius:50%;"';
let containerStyle =
  '"width:50px;height:150px;backgroud:red;position:fixed;right:0;top:50%;opacity:0.5"';
let upArrowStyle =
  '"width:30px;height:30px;margin:10px;background:transparent;border:solid grey;border-width: 0 5px 5px 0;display: inline-block;transform: rotate(-135deg); -webkit-transform: rotate(-135deg);"';
let downArrowStyle =
  '"width:30px;height:30px;margin:10px;background:transparent;border:solid grey;border-width: 0 5px 5px 0;display: inline-block;transform: rotate(45deg); -webkit-transform: rotate(45deg);"';
// 添加自动滚屏按钮
let s = `<script>  
 let area = document.createElement("div")
 let btn = document.createElement("button"); 
 let pageupBtn = document.createElement("button");
 let pagedownBtn = document.createElement("button");

 var speed = 40;
 let isScrolling = false; 
 let autoScroll = () => {if(isScrolling){window.scrollBy(0, 1);setTimeout(autoScroll, speed)}};

 btn.setAttribute("id", "scrollBtn");
 btn.innerHTML = "start scroll"; 

 let startScroll = function(event) {isScrolling=!isScrolling; autoScroll();}; 
 let handlePageup = () => {window.scrollBy(0, -window.innerHeight)};
 let handlePagedown = () => {window.scrollBy(0, window.innerHeight)}
 
 btn.style.cssText += ${style}; 
 area.style.cssText += ${containerStyle};
 pageupBtn.style.cssText += ${upArrowStyle};
 pagedownBtn.style.cssText += ${downArrowStyle};

 btn.addEventListener("click", startScroll); 
 pageupBtn.addEventListener("click", handlePageup);
 pagedownBtn.addEventListener("click", handlePagedown);

 area.appendChild(pageupBtn)
 area.appendChild(btn)
 area.appendChild(pagedownBtn)
 
 document.body.insertBefore(area, document.body.firstChild); 
 </script>"; `;
// var endBody = body.match(/<\/body>/g)
body = body + s;
// console.log(body);
$done({ body, headers });

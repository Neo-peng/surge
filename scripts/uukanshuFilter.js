var body = $response.body;
// 过滤掉推荐书籍和下方的分享按钮
var res = body.match(/<div class="(samebooks1|share)[\s\S]*?"[\s\S]*?>[\s\S]*?<\/div>/g)

if (res !== null) {
  for (let e of res) {
    body = body.replaceAll(e, "")
  }
} else {
}
var style = "\"width:50px;height:50px;float:right;background:grey;position:fixed;right:0;top:50%;opacity:0.5;border-radius:50%;\""
var s = `<script> \
 console.log('hello') \
 let btn = document.createElement(\"button\"); \
 let isScrolling = false; \
 let onclick = function() {console.log(\"click\"); isScrolling=!isScrolling; autoScroll()}; \
 btn.innerHTML = \"start scroll\"; \
 btn.style.cssText += ${style}; \
 btn.addEventListener(\"click\", onclick); \
 let autoScroll = () => {if(isScrolling){window.scrollBy(0, 1);setTimeout(autoScroll, 10)}};
 document.body.appendChild(btn); \
 </script>"; `
// var endBody = body.match(/<\/body>/g)
body = body + s
console.log(body)
$done({body});

// let headers = $response.headers;
// headers['X-Modified-By'] = 'Surge';

// $done({ headers });

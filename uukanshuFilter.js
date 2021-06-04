var body = $response.body;
// console.log(re.test(body));
// 过滤掉推荐书籍和下方的分享按钮
var res = body.match(/<div class="(samebooks1|share)[\s\S]*?"[\s\S]*?>[\s\S]*?<\/div>/g)
// console.log(typeof res)
if (res !== null) {
  for (let e of res) {
    console.log(e)
    console.log("分割线")
    body = body.replaceAll(e, "")
  }
} else {
  console.log("no match")
}
$done({body});

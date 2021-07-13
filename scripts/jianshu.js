let url = $request.url;
// 简书的跳转url
let regex = /^https:\/\/links\.jianshu\.com\/go\?to=(.*)/;
// 从简书的跳转url中找到跳转链接
url = regex.exec(url)[1];
let dest = unescape(url);
// 从跳转链接中找出host
let hostRegex = /^https?:\/\/([^\/]*)/;
let host = hostRegex.exec(dest)[1];
// 重写请求头的host和location
const myHeaders = { Location: dest, Host: host };
// 重写请求
const myRequest = {
  url: dest,
  method: 'GET',
  headers: myHeaders,
};
$done(myRequest);

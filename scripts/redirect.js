let url = $request.url
let regex = /^https:\/\/www\.jianshu\.com\/go-wild\?ac=2&url=(.*)/
url = regex.exec(url)[1]

const myHeaders = {"location": unescape(url)};
const myStatus = 302;
const myResponse = {
  status: myStatus,
  headers: myHeaders
}

$done(myResponse)


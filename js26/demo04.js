var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    //console.log(Object.keys(req),"___",Object.keys(res));
    //console.log("req.url��",req.url);
    // var getDataObj = url.parse(req.url,true).query;//parse�����еڶ�������Ϊtrue�Ļ�����һ������
    var getDataStr = url.parse(req.url).query;//parse�����еڶ�������Ϊtrue�Ļ�����һ������

    res.writeHead(200, {
        "Content-Type": "text/plain",
        // res.writeHead(200, {"Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*", //�ں��֧�ֿ�����ʵ����ã���Ӧͷ�е�����
        "Access-Control-Allow-Methods": "GET, POST"
    });
    setTimeout(function () {
        res.end("��ã������յ��㷢����Ϣ��"+getDataStr);
    },20000*Math.random());
    //res.end("���������Ϣ�ǣ�"+getDataStr);
}).listen(8080,"127.0.0.1");
console.log("start server!");

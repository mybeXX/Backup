const reloadURL = "http://127.0.0.1:6170/reload";
$httpClient.get(reloadURL, (error, response, data) => {
  if (error) {
    console.log("配置重载失败: " + error);
  } else {
    console.log("配置已重载，DNS 缓存可能已更新");
  }
  $done();
});
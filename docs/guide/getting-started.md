# 快速开始

欢迎使用 PokeForum API！本文档将帮助你快速接入和使用我们的 API 服务。

## 前提条件

在开始之前，请确保你具备以下条件：

- 一个有效的 PokeForum 账号
- 熟悉基本的 HTTP 请求和 RESTful API 概念
- 安装了你喜欢的 HTTP 客户端（如 cURL、Postman 等）

## 基础 URL

```
https://api.pokeforum.com/v1
```

## 认证方式

所有 API 请求都需要进行认证。我们在请求头中使用 Bearer Token：

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

获取 Access Token 的方式请参考 [认证文档](/api/authentication)。

## 第一个请求

下面是一个简单的示例，获取当前用户信息：

::: code-group

```bash [cURL]
curl -X GET \
  https://api.pokeforum.com/v1/user/me \
  -H 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

```javascript [JavaScript]
fetch('https://api.pokeforum.com/v1/user/me', {
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

```python [Python]
import requests

headers = {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
}

response = requests.get('https://api.pokeforum.com/v1/user/me', headers=headers)
print(response.json())
```

:::

## 响应格式

所有 API 响应都使用 JSON 格式，结构如下：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    // 实际返回的数据
  }
}
```

## 下一步

- 查看完整的 [API 端点列表](/api/endpoints)
- 了解 [错误处理机制](/api/errors)
- 阅读 [认证详细文档](/api/authentication)

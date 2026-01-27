# 认证

PokeForum API 使用 OAuth 2.0 + Bearer Token 进行身份认证。

## 获取 Access Token

### 密码模式

适用于你自己的账号：

```http
POST /v1/auth/token
Content-Type: application/json

{
  "grant_type": "password",
  "username": "your_username",
  "password": "your_password"
}
```

**响应示例：**

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "token_type": "Bearer",
    "expires_in": 3600,
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### 授权码模式

适用于第三方应用：

1. 引导用户访问授权页面：

```
https://pokeforum.com/oauth/authorize?
  client_id=YOUR_CLIENT_ID&
  redirect_uri=YOUR_REDIRECT_URI&
  response_type=code&
  scope=read,write&
  state=RANDOM_STATE
```

2. 用户授权后，会重定向到：

```
YOUR_REDIRECT_URI?code=AUTH_CODE&state=RANDOM_STATE
```

3. 使用授权码换取 Token：

```http
POST /v1/auth/token
Content-Type: application/json

{
  "grant_type": "authorization_code",
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET",
  "code": "AUTH_CODE",
  "redirect_uri": "YOUR_REDIRECT_URI"
}
```

## 使用 Access Token

在 API 请求头中添加：

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

## 刷新 Token

Access Token 过期后，使用 Refresh Token 获取新的 Token：

```http
POST /v1/auth/token
Content-Type: application/json

{
  "grant_type": "refresh_token",
  "refresh_token": "YOUR_REFRESH_TOKEN"
}
```

## 撤销 Token

退出登录时，撤销当前 Token：

```http
POST /v1/auth/revoke
Authorization: Bearer YOUR_ACCESS_TOKEN
```

## 安全建议

1. **不要在客户端暴露 Client Secret**
   - 授权码模式只适用于服务器端应用
   - 纯前端应用请使用 PKCE 扩展

2. **妥善存储 Token**
   - 移动端：使用 Keychain (iOS) 或 Keystore (Android)
   - Web 端：使用 HttpOnly Cookie 或内存存储

3. **处理 Token 过期**
   - 监听 401 状态码
   - 使用 Refresh Token 获取新的 Access Token
   - 刷新失败时引导用户重新登录

## 错误处理

认证相关错误：

| 错误码 | 说明 |
|--------|------|
| invalid_request | 请求参数错误 |
| invalid_client | 客户端认证失败 |
| invalid_grant | 授权凭证无效或过期 |
| unauthorized_client | 客户端未授权使用此授权类型 |
| unsupported_grant_type | 不支持的授权类型 |
| invalid_scope | 无效的权限范围 |

# 错误处理

本文档介绍 API 的错误处理机制和常见错误。

## 错误响应格式

所有错误响应都遵循统一的格式：

```json
{
  "code": 400,
  "message": "请求参数错误",
  "errors": [
    {
      "field": "email",
      "message": "邮箱格式不正确"
    }
  ]
}
```

## 错误码说明

### 客户端错误 (4xx)

#### 400 - Bad Request
请求参数错误，请检查请求体。

```json
{
  "code": 400,
  "message": "请求参数错误",
  "errors": [
    {
      "field": "title",
      "message": "标题不能为空"
    }
  ]
}
```

#### 401 - Unauthorized
未授权，缺少或无效的认证信息。

```json
{
  "code": 401,
  "message": "未授权，请先登录"
}
```

#### 403 - Forbidden
禁止访问，权限不足。

```json
{
  "code": 403,
  "message": "权限不足，无法执行此操作"
}
```

#### 404 - Not Found
请求的资源不存在。

```json
{
  "code": 404,
  "message": "帖子不存在或已被删除"
}
```

#### 409 - Conflict
资源冲突，如重复创建。

```json
{
  "code": 409,
  "message": "用户名已存在"
}
```

#### 422 - Unprocessable Entity
请求格式正确，但语义错误。

```json
{
  "code": 422,
  "message": "无法处理请求",
  "errors": [
    {
      "field": "password",
      "message": "密码强度不足"
    }
  ]
}
```

#### 429 - Too Many Requests
请求过于频繁，触发速率限制。

```json
{
  "code": 429,
  "message": "请求过于频繁，请稍后再试",
  "retry_after": 60
}
```

### 服务器错误 (5xx)

#### 500 - Internal Server Error
服务器内部错误。

```json
{
  "code": 500,
  "message": "服务器内部错误"
}
```

#### 502 - Bad Gateway
网关错误，通常是上游服务故障。

#### 503 - Service Unavailable
服务暂时不可用，可能是维护中。

```json
{
  "code": 503,
  "message": "服务维护中，请稍后再试"
}
```

## 常见错误场景

### 参数验证失败

当请求参数不符合要求时：

```json
{
  "code": 400,
  "message": "请求参数错误",
  "errors": [
    {
      "field": "email",
      "message": "邮箱格式不正确",
      "code": "invalid_format"
    },
    {
      "field": "password",
      "message": "密码长度至少 8 位",
      "code": "too_short"
    }
  ]
}
```

### 资源不存在

```json
{
  "code": 404,
  "message": "资源不存在",
  "resource": "post",
  "resource_id": "12345"
}
```

### 认证过期

```json
{
  "code": 401,
  "message": "Token 已过期",
  "token_expired": true,
  "expires_at": "2024-01-15T10:00:00Z"
}
```

## 错误处理建议

### 客户端处理

```javascript
async function apiRequest(url, options) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      // 处理错误
      switch (data.code) {
        case 401:
          // Token 过期，尝试刷新
          await refreshToken();
          return apiRequest(url, options);
        case 403:
          // 权限不足，提示用户
          showError('权限不足');
          break;
        case 429:
          // 请求过于频繁，等待后重试
          const retryAfter = data.retry_after || 60;
          await delay(retryAfter * 1000);
          return apiRequest(url, options);
        default:
          throw new Error(data.message);
      }
    }

    return data;
  } catch (error) {
    console.error('API 请求失败:', error);
    throw error;
  }
}
```

### 指数退避重试

对于 429 和 503 错误，建议使用指数退避策略：

```javascript
async function retryWithBackoff(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (error.code === 429 || error.code === 503) {
        const delay = Math.pow(2, i) * 1000;
        await sleep(delay);
        continue;
      }
      throw error;
    }
  }
  throw new Error('重试次数耗尽');
}
```

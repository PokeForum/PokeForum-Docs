# API 参考

本文档详细介绍 PokeForum API 的核心概念和使用规范。

## HTTP 方法

API 使用标准的 HTTP 方法：

| 方法 | 用途 |
|------|------|
| GET | 获取资源 |
| POST | 创建资源 |
| PUT | 更新资源（完整替换） |
| PATCH | 更新资源（部分更新） |
| DELETE | 删除资源 |

## 状态码

API 使用标准的 HTTP 状态码：

| 状态码 | 含义 | 说明 |
|--------|------|------|
| 200 | OK | 请求成功 |
| 201 | Created | 资源创建成功 |
| 204 | No Content | 删除成功，无返回内容 |
| 400 | Bad Request | 请求参数错误 |
| 401 | Unauthorized | 未授权，缺少或无效的 Token |
| 403 | Forbidden | 禁止访问，权限不足 |
| 404 | Not Found | 资源不存在 |
| 429 | Too Many Requests | 请求过于频繁 |
| 500 | Internal Server Error | 服务器内部错误 |

## 分页

列表接口支持分页，使用以下查询参数：

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| page | integer | 1 | 页码 |
| per_page | integer | 20 | 每页数量（最大 100） |

### 分页响应示例

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "items": [...],
    "pagination": {
      "page": 1,
      "per_page": 20,
      "total": 100,
      "total_pages": 5
    }
  }
}
```

## 排序

列表接口支持排序：

```
GET /v1/posts?sort=-created_at
```

- 使用 `+` 或省略前缀表示升序
- 使用 `-` 前缀表示降序
- 支持多字段排序，用逗号分隔

## 过滤

列表接口支持过滤：

```
GET /v1/posts?status=published&category=tech
```

## 字段选择

使用 `fields` 参数指定返回的字段：

```
GET /v1/posts/123?fields=id,title,content
```

## 时间戳格式

所有时间戳使用 ISO 8601 格式：

```
2024-01-15T08:30:00Z
```

## 速率限制

API 实行速率限制：

- 认证用户：1000 请求/小时
- 未认证用户：60 请求/小时

响应头中包含限速信息：

```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

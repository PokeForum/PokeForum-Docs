# API 端点

本文档列出所有可用的 API 端点。

## 用户相关

### 获取当前用户

```http
GET /v1/user/me
```

获取当前登录用户的信息。

**响应示例：**

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 123,
    "username": "pokeuser",
    "email": "user@example.com",
    "avatar": "https://cdn.example.com/avatar.jpg",
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

### 更新用户信息

```http
PATCH /v1/user/me
```

更新当前用户的信息。

**请求体：**

```json
{
  "username": "newusername",
  "email": "newemail@example.com"
}
```

## 帖子相关

### 获取帖子列表

```http
GET /v1/posts
```

获取帖子列表。

**查询参数：**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| page | integer | 否 | 页码，默认 1 |
| per_page | integer | 否 | 每页数量，默认 20 |
| category | string | 否 | 分类筛选 |
| author | string | 否 | 作者用户名 |

**响应示例：**

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "id": 1,
        "title": "帖子标题",
        "content": "帖子内容...",
        "author": {
          "id": 123,
          "username": "author"
        },
        "category": "tech",
        "created_at": "2024-01-15T08:00:00Z",
        "updated_at": "2024-01-15T08:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 20,
      "total": 100,
      "total_pages": 5
    }
  }
}
```

### 获取单个帖子

```http
GET /v1/posts/{id}
```

获取指定帖子的详细信息。

### 创建帖子

```http
POST /v1/posts
```

创建新帖子。

**请求体：**

```json
{
  "title": "帖子标题",
  "content": "帖子内容",
  "category": "tech",
  "tags": ["api", "documentation"]
}
```

### 更新帖子

```http
PATCH /v1/posts/{id}
```

更新指定帖子。

### 删除帖子

```http
DELETE /v1/posts/{id}
```

删除指定帖子。

## 评论相关

### 获取评论列表

```http
GET /v1/posts/{post_id}/comments
```

获取指定帖子的评论列表。

### 创建评论

```http
POST /v1/posts/{post_id}/comments
```

为指定帖子创建评论。

**请求体：**

```json
{
  "content": "评论内容",
  "parent_id": null
}
```

## 分类相关

### 获取分类列表

```http
GET /v1/categories
```

获取所有可用分类。

**响应示例：**

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": 1,
      "name": "技术",
      "slug": "tech",
      "description": "技术讨论",
      "post_count": 150
    },
    {
      "id": 2,
      "name": "生活",
      "slug": "life",
      "description": "生活杂谈",
      "post_count": 80
    }
  ]
}
```

## 搜索相关

### 搜索

```http
GET /v1/search
```

搜索帖子、用户或评论。

**查询参数：**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| q | string | 是 | 搜索关键词 |
| type | string | 否 | 搜索类型：posts, users, comments，默认全部 |
| page | integer | 否 | 页码 |
| per_page | integer | 否 | 每页数量 |

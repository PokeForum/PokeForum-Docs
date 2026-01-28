# 命令行

PokeForum CLI 命令参考。

## 基本用法

```bash
pokeforum [command] [flags]
```

## 可用命令

| 命令 | 说明 |
|------|------|
| `server` | 启动服务器 |
| `migrate` | 运行数据库迁移 |
| `admin` | 创建管理员账户 |
| `version` | 显示版本信息 |

## 示例

```bash
# 启动服务器
pokeforum server

# 创建管理员
pokeforum admin --username admin --password secret
```

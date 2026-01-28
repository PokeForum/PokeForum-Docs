# 配置

PokeForum API 配置说明。

## 配置文件

配置文件位于 `config.yaml`：

```yaml
server:
  port: 8080
  host: "0.0.0.0"

database:
  driver: "mysql"
  dsn: "user:password@tcp(localhost:3306)/pokeforum"

jwt:
  secret: "your-secret-key"
  expire: 86400
```

## 环境变量

| 变量                     | 说明     | 默认值    |
|------------------------|--------|--------|
| `POKEFORUM_PORT`       | 服务端口   | `8080` |
| `POKEFORUM_DB_DSN`     | 数据库连接串 | -      |
| `POKEFORUM_JWT_SECRET` | JWT 密钥 | -      |

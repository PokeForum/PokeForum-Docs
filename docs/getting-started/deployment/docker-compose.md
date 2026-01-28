# Docker-Compose

使用 Docker Compose 一键启动完整服务。

## 前置要求

- Docker 已安装
- Docker Compose 已安装

## 启动步骤

```bash
docker-compose up -d
```

## 配置文件

```yaml
version: '3.8'
services:
  api:
    image: pokeforum/api:latest
    ports:
      - "8080:8080"
```

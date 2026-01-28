# 更新

PokeForum API 版本更新指南。

## 检查更新

\`\`\`bash
pokeforum version
\`\`\`

或访问 [Releases](https://github.com/PokeForum/PokeForum/releases) 页面查看最新版本。

## 更新步骤

### Docker 更新

\`\`\`bash
docker pull pokeforum/api:latest
docker stop pokeforum
docker rm pokeforum
docker run -d -p 8080:8080 --name pokeforum pokeforum/api:latest
\`\`\`

### 二进制更新

\`\`\`bash
# 下载最新版本
wget https://github.com/PokeForum/PokeForum/releases/latest/download/pokeforum-linux-amd64

# 停止服务
systemctl stop pokeforum

# 替换二进制文件
mv pokeforum-linux-amd64 /usr/local/bin/pokeforum
chmod +x /usr/local/bin/pokeforum

# 启动服务
systemctl start pokeforum
\`\`\`

## 数据库迁移

更新后需要运行数据库迁移：

\`\`\`bash
pokeforum migrate
\`\`\`

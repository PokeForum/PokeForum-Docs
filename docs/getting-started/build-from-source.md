# 从源代码编译

从源码构建 PokeForum API。

## 前置要求

- Go 1.21+
- Node.js 18+
- pnpm

## 后端编译

```bash
git clone https://github.com/PokeForum/PokeForum.git
cd PokeForum
go build -o pokeforum
```

## 前端编译

```bash
cd web
pnpm install
pnpm build
```

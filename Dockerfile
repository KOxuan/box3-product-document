# stage1 - 构建所有 VitePress 项目
FROM node:22.17.1-bookworm AS builder

USER root

ENV NODE_OPTIONS="--max-old-space-size=8192"

WORKDIR /usr/src/app

# 复制 package files
COPY package*.json ./
COPY .npmrc ./

# 安装依赖
RUN npm ci

# 复制源代码和 git 历史
COPY . ./

# 构建所有项目到统一的 dist 目录
RUN npm run build:all

# stage2 - 生产环境运行时
FROM node:22.17.1-bookworm

USER root

RUN groupadd -g 1001 box && useradd -r -u 1001 -g box -m -d /usr/src/app -s /bin/bash -c "box user" box

WORKDIR /usr/src/app

# 复制 package files 用于生产依赖
COPY package*.json ./
COPY .npmrc ./

# 只安装生产依赖
RUN npm ci --only=production && npm cache clean --force

# 从构建阶段复制构建好的静态文件（统一的 dist 目录）
COPY --from=builder /usr/src/app/dist ./dist

# 复制服务器文件
COPY --from=builder /usr/src/app/server.js ./

EXPOSE 9966

USER box

CMD ["npm", "run", "prod"]

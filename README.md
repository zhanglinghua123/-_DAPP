# netshop

## Project setup

- 启动Ganache，创建好本地链
- 到该项目的Build目录下面，用以下命令部署区块链

```
truffle migrate
```

- 然后将合约地址输入到Web3/abi.js的address变量中，这样我们就建立起来了本地链，并将其与项目连接
- 然后通过npm install 安装项目依赖即可

### Compiles and hot-reloads for development

```
- 通过该命令来运行项目
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

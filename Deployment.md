# Mac/Windos 部署项目步骤
使用本项目时要现按照如下教程进行部署之后，才可正常使用。

### 1.环境变量修改
在微信开发者工具中找到app.js,将下面的env修改为自己的env（环境ID），可在“云开发-设置-环境ID”中找到
```bash
wx.cloud.init({
env: 'xly-l8f6v',//修改为自己的环境ID
traceUser: true,
})
```

### 2.Node.js下载
Mac/Windows :
- Node.js下载，点击链接，选择对应的系统，即可下载:http://nodejs.cn/download/

### 3.Node.js安装
下载完成之后点击安装，直接next安装即可。打开电脑终端（Windows电脑为cmd命令提示符，Mac电脑为终端Terminal），然后逐行输入并按Enter执行下面的代码
```bash
node --version
npm --version
```
如果显示为v10.15.0以及6.11.3（版本号可能有所不同），表明你的Node.js环境已经安装成功


### 4.部署并上传云函数
1. 展开微信开发者工具中cloudfunctions文件夹，找到getOpenId文件夹，在右键菜单中选择在终端中打开
2. 在终端输入以下代码后按Enter回车执行。
```bash
npm install
```
3. 下载完成后，右键getOpenId文件夹，点击“创建并部署：所有文件”，这时会将本地的云函数上传到云端。

### 5.同步数据库
你需要在“微信开发者工具-云开发-数据库”中，创建“basketball、study、user和userInfo”四个集合。

### 6.最后
- 你可以手动导入你自己的数据到数据库
- 点击“个人”页面，点击微信一键登录后，就可以正常使用了。



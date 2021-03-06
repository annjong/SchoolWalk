# 校中行

#### 介绍
通过本程序可以快速的找到同僚，高效解决了同学之间的室内外娱乐活动问题，增进同学之间感情。依托此程序发布信息，可以让有共同目标的人聚在一起。相互促进、共同进步。

#### 项目截图
![首页截图](https://raw.githubusercontent.com/annjong/SchoolWalk/SchoolWalk/miniprogram/image/index.png)
![个人中心截图](https://raw.githubusercontent.com/annjong/SchoolWalk/SchoolWalk/miniprogram/image/my.png)

#### 项目功能
现实现功能：
- 1.个人信息的获取
- 2.用户信息反馈
- 3.历史上的今天信息获取
- 4.用户发起预约学习信息
- 5.用户寻找预约学习信息并预约
- 6.用户发起约球信息
- 7.用户寻找约球信息并预约

项目完成后可实现功能（部分未开发）：
- 1.个人信息获取
- 2.用户信息反馈及获取
- 3.用户发起预约学习信息
- 4.用户寻找预约学习信息
- 5.用户发起预约娱乐类活动信息
- 6.用户寻找娱乐类活动活动信息
- 7.按条件筛选相关信息
- 8.用户预约成功后调取聊天窗口
- 9.寻找校内同城伙伴
- 10.校园课表查询

#### 部署流程
如果您想了解具体的部署流程，请参考[Deployment.md](https://github.com/annjong/SchoolWalk/blob/SchoolWalk/Deployment.md)文件。
1.  将文件进行打包下载。
2.  在微信开发者工具中导入SchooWalk项目。
3.  将app.js文件中的env修改为自己的环境。
4.  您需要具有Node.js环境。
5.  在云数据库中创建basketball,study,user,userInfo四个集合。
6.  上传并部署cloudfunctions中的getOpenId文件夹。
7.  在个人中心点击“微信一键登录”即可开始使用。

#### 执照

Apache许可证 版本号2.0

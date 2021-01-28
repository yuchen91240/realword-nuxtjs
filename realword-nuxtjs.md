##### realword-nuxtjs 操作步骤

###### 一、项目初始化

1. 创建目录realword-nuxtjs 

   ``` javascript
   mkdir realword-nuxtjs
   ```

2. 切换到realword-nuxtjs目录，安装nuxt

   ```javascript
   npm i nuxt
   ```

3. 配置启动脚本，在package.json文件scripts中添加

   ``` javascript
   "dev": "nuxt",
   ```

4. 创建pages目录，配置初始页面index.vue

###### 二、项目初始化—导入样式资源

1. 创建app.html文件，插入样式链接，css资源本土化

2. 

   https://www.jsdelivr.com

3. 

###### 三、项目初始化—布局组件

1. page文件夹下创建layout文件夹，创建index.js文件

   ``` javascript
   <template>
     <div>
       <!-- 顶部导航栏 -->
       <nav class="navbar navbar-light">
         <div class="container">
           <a class="navbar-brand"
              href="index.html">conduit</a>
           <ul class="nav navbar-nav pull-xs-right">
             <li class="nav-item">
               <!-- Add "active" class when you're on that page" -->
               <a class="nav-link active"
                  href="">Home</a>
             </li>
             <li class="nav-item">
               <a class="nav-link"
                  href="">
                 <i class="ion-compose"></i>&nbsp;New Post
               </a>
             </li>
             <li class="nav-item">
               <a class="nav-link"
                  href="">
                 <i class="ion-gear-a"></i>&nbsp;Settings
               </a>
             </li>
             <li class="nav-item">
               <a class="nav-link"
                  href="">Sign up</a>
             </li>
           </ul>
         </div>
       </nav>
   
       <!-- 子路由 -->
       <nuxt-child></nuxt-child>
   
       <!-- 底部内容 -->
       <footer>
         <div class="container">
           <a href="/"
              class="logo-font">conduit</a>
           <span class="attribution">
             An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
           </span>
         </div>
       </footer>
   
     </div>
   </template>
   <script>
   export default {
     name: 'LayoutIndex',
   
   }
   </script>
   <style>
   </style>
   ```

   

2. 创建nuxt.config.js，自定义路由表规则

   ``` javascript
   /**
    * Nuxt.js配置文件
    */
   
   module.exports = {
     router: {
       extendRoutes(routes, resolve) {
         // 自定义路由规则
           // 清除Nuxt.js基于pages目录默认生成的路由规则
         routes.splice(0)
         routes.push(...[{
             path: '/',
             component: resolve(__dirname, 'pages/layout/'),
             children: [{
               path: '', // 默认子路由
               name: 'home',
               component: resolve(__dirname, 'pages/home/'),
             }]
           },
         ])
       }
     }
   }
   ```

   

3. 删除步骤一创建的pages目录下的index.vue

4. pages下创建home文件夹，新建index.vue文件，复制realword中的home模板至文件中

   ``` javascript
   <template>
     <div class="home-page">
   
       <div class="banner">
         <div class="container">
           <h1 class="logo-font">conduit</h1>
           <p>A place to share your knowledge.</p>
         </div>
       </div>
   
       <div class="container page">
         <div class="row">
   
           <div class="col-md-9">
             <div class="feed-toggle">
               <ul class="nav nav-pills outline-active">
                 <li class="nav-item">
                   <a class="nav-link disabled"
                      href="">Your Feed</a>
                 </li>
                 <li class="nav-item">
                   <a class="nav-link active"
                      href="">Global Feed</a>
                 </li>
               </ul>
             </div>
   
             <div class="article-preview">
               <div class="article-meta">
                 <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
                 <div class="info">
                   <a href=""
                      class="author">Eric Simons</a>
                   <span class="date">January 20th</span>
                 </div>
                 <button class="btn btn-outline-primary btn-sm pull-xs-right">
                   <i class="ion-heart"></i> 29
                 </button>
               </div>
               <a href=""
                  class="preview-link">
                 <h1>How to build webapps that scale</h1>
                 <p>This is the description for the post.</p>
                 <span>Read more...</span>
               </a>
             </div>
   
             <div class="article-preview">
               <div class="article-meta">
                 <a href="profile.html"><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
                 <div class="info">
                   <a href=""
                      class="author">Albert Pai</a>
                   <span class="date">January 20th</span>
                 </div>
                 <button class="btn btn-outline-primary btn-sm pull-xs-right">
                   <i class="ion-heart"></i> 32
                 </button>
               </div>
               <a href=""
                  class="preview-link">
                 <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
                 <p>This is the description for the post.</p>
                 <span>Read more...</span>
               </a>
             </div>
   
           </div>
   
           <div class="col-md-3">
             <div class="sidebar">
               <p>Popular Tags</p>
   
               <div class="tag-list">
                 <a href=""
                    class="tag-pill tag-default">programming</a>
                 <a href=""
                    class="tag-pill tag-default">javascript</a>
                 <a href=""
                    class="tag-pill tag-default">emberjs</a>
                 <a href=""
                    class="tag-pill tag-default">angularjs</a>
                 <a href=""
                    class="tag-pill tag-default">react</a>
                 <a href=""
                    class="tag-pill tag-default">mean</a>
                 <a href=""
                    class="tag-pill tag-default">node</a>
                 <a href=""
                    class="tag-pill tag-default">rails</a>
               </div>
             </div>
           </div>
   
         </div>
       </div>
   
     </div>
   </template>
   
   <script>
   export default {
     name: 'HomeIndex',
     components: {},
     data () {
       return {
       };
     },
   
     created () { },
   
     methods: {}
   }
   
   </script>
   <style lang='less' scoped>
   </style>
   ```

   

###### 四、项目初始化—导入登录注册页面

 1. pages下创建login文件夹，文件夹下新建index.vue

    ``` javascript
    <template>
      <div class="auth-page">
        <div class="container page">
          <div class="row">
    
            <div class="col-md-6 offset-md-3 col-xs-12">
              <h1 class="text-xs-center">Sign up</h1>
              <p class="text-xs-center">
                <a href="">Have an account?</a>
              </p>
    
              <ul class="error-messages">
                <li>That email is already taken</li>
              </ul>
    
              <form>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg"
                         type="text"
                         placeholder="Your Name">
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg"
                         type="text"
                         placeholder="Email">
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg"
                         type="password"
                         placeholder="Password">
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">
                  Sign up
                </button>
              </form>
            </div>
    
          </div>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      name: 'LoginIndex',
      components: {},
      data () {
        return {
        };
      },
    
      created () { },
    
      methods: {}
    }
    
    </script>
    <style lang='less' scoped>
    </style>
    ```

	2. 注册与登录共用一个页面，路由中添加配置

    ``` javascript
    {
    	path: '/login',
    	name: 'login',
    	component: resolve(__dirname, 'pages/login/'),
    },
    {
    	path: '/register',
    	name: 'register',
    	component: resolve(__dirname, 'pages/login/'),
    },
    ```

 3. 处理登录注册页面

    ``` javascript
    <template>
      <div class="auth-page">
        <div class="container page">
          <div class="row">
    
            <div class="col-md-6 offset-md-3 col-xs-12">
              <h1 class="text-xs-center"> {{ isLogin ? 'Sign in' : 'Sign up'}}</h1>
              <p class="text-xs-center">
                <!-- <a href="">Have an account?</a> -->
                <nuxt-link v-if="isLogin"
                           to="/register">Need an account?</nuxt-link>
                <nuxt-link v-else
                           to="/login">Have an account?</nuxt-link>
              </p>
    
              <ul class="error-messages">
                <li>That email is already taken</li>
              </ul>
    
              <form>
                <fieldset v-if="!isLogin"
                          class="form-group">
                  <input class="form-control form-control-lg"
                         type="text"
                         placeholder="Your Name">
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg"
                         type="text"
                         placeholder="Email">
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg"
                         type="password"
                         placeholder="Password">
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">
                  {{ isLogin ? 'Sign in' : 'Sign up'}}
                </button>
              </form>
            </div>
    
          </div>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      name: 'LoginIndex',
      computed: {
        isLogin () {
          return this.$route.name === 'login'
        },
      },
    
      data () {
        return {
        };
      },
    
      created () { },
    
      methods: {}
    }
    
    </script>
    <style lang='less' scoped>
    </style>
    ```

    

###### 五、项目初始化—导入剩余页面

 1. 在pages下创建profile目录，创建index.vue

    ``` javascript
    
    ```

    

 2. nuxt.config.js文件中配置路由

    ``` javascript
    {
    	path: '/profile/:username',
    	name: 'profile',
    	component: resolve(__dirname, 'pages/profile/'),
    },
    ```

 3. pages下创建settings，创建index.vue

    ``` javascript
    
    ```

 4. 配置路由

    ``` javascript
    {
    	path: '/settings',
    	name: 'settings',
    	component: resolve(__dirname, 'pages/settings/'),
    },
    ```

    

 5. pages下创建settings，创建index.vue

    ``` javascript
    
    ```

 6. 配置路由

    ``` javascript
    {
    	path: '/settings',
    	name: 'settings',
    	component: resolve(__dirname, 'pages/settings/'),
    },
    ```

    

 7. pages下创建editor，创建index.vue

    ``` javascript
    
    ```

 8. 配置路由

    ``` javascript
    {
    	path: '/editor',
    	name: 'editor',
    	component: resolve(__dirname, 'pages/editor/'),
    },
    ```

 9. pages下创建article，创建index.vue

    ``` javascript
    
    ```

 10. 配置路由

     ``` javascript
     {
     	path: '/article/:slug',
     	name: 'article',
     	component: resolve(__dirname, 'pages/article/'),
     },
     ```

     

     

###### 六、项目初始化—顶部导航栏链接处理

	1. 将a链接，替换为nuxt-link
 	2. 

###### 七、项目初始化—处理导航栏链接高亮

​	1. 

###### 八、项目初始化—封装请求模块

	1. 

###### 九、登录注册—实现基本登录功能

1. request.js

   ``` javasc
   /**
    * 基于axios封装的请求模块
    */
   
   import axios from 'axios'
   
   const request = axios.create({
     baseURL: 'https://conduit.productionready.io'
   })
   
   export default request
   ```

2. 安装axios

   ``` javas
   npm i axios
   ```

   

###### 十、登录注册—封装请求方法、表单验证

​	1. 

###### 十一、登录注册—错误处理

	1. 
 	2. 

###### 十二、登录注册—将登录状态存储到容器中

	1. 新建store目录
 	2. 

###### 十三、登录注册—登录状态持久化

	1. 安装js-cookie包

###### 十四、登录注册—处理导航栏链接展示状态

​	1.

###### 十五、登录注册—处理页面访问权限

 1. 创建middleware目录

 2. 页面添加拦截处理

    

###### 十六、首页—展示公共文章列表

​	1.

###### 十七、首页—列表分页—分页参数的使用

​	1.

###### 十八、首页—列表分页—页码处理

​	1.

###### 十九、首页—展示文章标签列表

​	1.

###### 二十、首页—优化并行异步任务

​	1.

###### 二十一、首页—处理标签列表链接和数据

​	1.

###### 二十二、首页—处理导航栏—展示状态处理

​	1.

###### 二十三、首页—处理导航栏—标签高亮及链接

​	1.

###### 二十四、首页—处理导航栏—展示用户关注的文章列表

	1. 

###### 二十五、首页—设置用户Token

	1. 创建plugins目录

###### 二十六、首页—文章发布时间格式化处理

	1. 导入dayjs组件

###### 二十七、首页—文章点赞

###### 二十八、文章详情—展示基本信息

###### 二十九、文章详情—把markdown转为HTML

​	1. 安装markdown-it组件

###### 三十、文章详情—展示文章作者相关信息

###### 三十一、文章详情—设置页面meta优化SEO

###### 三十二、 文章评论—通过客户端渲染展示评论列表

###### 三十三、发布部署—打包

​	1. package.json中添加命令

```json
 "build": "nuxt build",
 "start": "nuxt start",
```

###### 三十四、 发布部署

 1. 配置文件nuxt.config.js添加

    ``` javasc
    server: {
        host: '0.0.0.0',
        port: 3000
    },
    ```

	2. 宝塔Linux面板登录腾讯云服务器，新建realword-nuxtjs目录，将打包的realword-nuxtjs.zip文件上传服务器

    ![image-20210126202703675](C:\Users\yuchen\AppData\Roaming\Typora\typora-user-images\image-20210126202703675.png)

	3. 将压缩文件解压到当前位置

    ![image-20210126204238833](C:\Users\yuchen\AppData\Roaming\Typora\typora-user-images\image-20210126204238833.png)

4. 在软件商店中安装 PM2管理器

   ![image-20210126204406103](C:\Users\yuchen\AppData\Roaming\Typora\typora-user-images\image-20210126204406103.png)

   5. 打开终端，切换到加压文件路径，执行npm i命令，执行命令失败！  解决方案：先执行npm i nuxt   成功后，在执行npm i

   6. npm run  start 启动项目

      ![image-20210126205949352](C:\Users\yuchen\AppData\Roaming\Typora\typora-user-images\image-20210126205949352.png)

###### 三十五、使用PM2启动Node服务

 1. 在项目目录下安装PM2，npm install --global pm2

 2. 启动项目，pm2 start npm -- start

    

###### 三十六、 自动化部署

	1. 使用GitHub Actions工具

 	2. 配置GitHub Access Token
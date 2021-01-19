# vue-tabbar

> 开发一个导航栏组件，主要在移动端使用，可以打开浏览器的手机模式查看。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 使用说明
1. TabBar组件代表整个导航栏，TabBarItem组件代表导航按钮（包括文字和图片）
2. 在TabBar组件中传入若干个TabBarItem组件
3. 在TabBarItem组件中传入两张图片和文字
   1. 一张代表按钮未激活时的图片，slot的name是 `item-icon`
   2. 另一张代表按钮被激活时显示的图片，slot的name是 `item-icon-active`
   3. 文字的slot的name是 `slot-text`。另外，文字的默认颜色是橘红色，如果对该颜色不满意，可以在使用TabBarItem的地方传入 `activeColor` 参数
4. 配合路由使用的步骤
   1. 自己先定义好路由和组件的映射关系
   2. 在使用TabBarItem的地方传入 `path` 参数



封装好的组件在 `src/components/tabbar` 路径下，可以直接复制使用。使用案例请查看 App.vue 文件




- `<small>`标签呈现小号字体效果；
- `import url()`在 css 文件中导入其他样式表，优点是把多个样式表导入到一个样式表中，在页面里面只需要导入一个样式表即可；
- `:root`这个 CSS 伪类匹配文档树的根元素。 对于 HTML 来说，`:root`表示`<html>`元素，除了优先级更高之外，与 html 选择器相同。 其在声明全局 CSS 变量时很有用

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

- `box-sizing: border-box`: 为元素设定的宽度和高度决定了元素的边框盒。就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。

- `flex` 布局

  - 容器上的属性
    - `flex-direction`: 属性决定主轴的方向（即项目的排列方向）
      - row 主轴为水平方向，起点在左端。
      - row-reverse 主轴为水平方向，起点在右端。
      - column 主轴为垂直方向，起点在上沿。
      - column-reverse 主轴为垂直方向，起点在下沿。
    - `justify-content`: 属性定义了项目在主轴上的对齐方式。
      - flex-start（默认值）：左对齐
      - flex-end：右对齐
      - center： 居中
      - space-between：两端对齐，项目之间的间隔都相等。
      - space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
    - `align-items`属性定义项目在交叉轴上如何对齐。
      - flex-start：交叉轴的起点对齐。
      - flex-end：交叉轴的终点对齐。
      - center：交叉轴的中点对齐。
      - baseline: 项目的第一行文字的基线对齐。
      - stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。

- `CSS` 中的`视口单位`

  - `视口单位`中的“视口”，桌面端指的是浏览器的可视区域；**“视区”所指为浏览器内部的可视区域大小**，即 window.innerWidth/window.innerHeight 大小，不包含任务栏标题栏以及底部工具栏的浏览器区域大小。`视口单位`主要包括以下四个：
  - `vw`：1vw 等于视口宽度的 1%。
  - `vh`：1vh 等于视口高度的 1%。
  - `vmin`：选取 vw 和 vh 中最小的那个。
  - `vmax`：选取 vw 和 vh 中最大的那个。

- text-align: center
- box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3)
  - `box-shadow`属性用于在元素的框架上添加阴影效果。 你可以在同一元素上设置多个阴影效果， 并用逗号将他们分隔开。该属性可设置的值包括阴影的 X 轴偏移量、Y 轴偏移量、模糊半径、扩散半径和颜色。
  - 语法示例
    - `box-shadow: 60px -16px teal;` /_ x 偏移量 | y 偏移量 | 阴影颜色 _/
    - `box-shadow: 10px 5px 5px black;` /_ x 偏移量 | y 偏移量 | 阴影模糊半径 | 阴影颜色 _/
    - `box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);` /_ x 偏移量 | y 偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 _/
  - [Box-shadow generator](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Backgrounds_and_Borders/Box-shadow_generator) 是一个允许你生成 `box-shadow` 的交互式工具。
- `border-radius: 5px;`
  - `border-*-radius`属性的值可分别设定水平半径和垂直半径； 若省略垂直半径， 则垂直半径默认采用水平半径的值。
  - 而每个值，支持的单位有**固定长度**和**百分比**。若设置百分比格式，则水平半径的百分比是指边框的宽度，而垂直半径的百分比是指边框的高度。
  - 使用四个（椭）圆分别与边框的四个角取交集形成圆角效果。
  - ![示例](https://images2015.cnblogs.com/blog/153475/201611/153475-20161110154102108-522676325.png)
  - 举例
    - `border-radius:20px;` // 表示圆角的水平半径和垂直半径都为 20px 长度。
    - `border-radius:20px/40px;` // 表示圆角的水平半径的长度为 20px，垂直半径的长度为 20px
    - `border-radius:20%;` // 表示圆角的水平半径和垂直半径都为各自边框长度的 20%。
    - `border-radius:20%/30%;` // 表示圆角的水平半径为边框宽度的 20%，垂直半径都为边框高度的 20%。
    - `border-radius:20px/30%;` // 表示圆角的水平半径长度 20px，垂直半径都为边框高度的 20%。
- `margin: 20px 40px 60px;` 三个值分别表示：（上 20px；左、右 40px；下 60px）
- `text-align: center;`:`text-align` CSS 属性定义行内内容（例如文字）如何相对它的块父元素对齐。
  - 对父级元素使用`test-align:center`; 其父元素内的行级块、行级元素和文本有居中效果
  - 而父元素内的块级元素会继承`test-align:center`属性，影响其内部的行级块、行级元素和文本
- 定位： 更改元素盒子 `position` 属性，可以相对于它在常规文档流中的位置重新定位。`position` 属性有 4 个值：`static`、`relative`、`absolute`、`fixed`，默认值为`static`。
  - `static`(默认)
    - 将块级元素自上而下排布，就是我们所说的正常的文档流
  - 相对定位 `relative`
    - 相对位置相对的时它原来在文档流中的位置（或者默认位置）
    - 可以使用 top、right、bottom、left 属性来改变它的位置
    - 相对定位的元素不脱离原文档流， 原位置依然保留。
  - 绝对定位 `absolute`
    - 相对于第一个相对定位的父元素进行定位，如果没有则是相对于 body 进行定位
    - 相对定位元素完全脱离常规文档流， 该元素之前占据的位置也会被回收
  - 固定定位 `fixed`
    - 从完全移除文档流的角度说，固定定位与绝对定位类似
    - 固定定位元素的定位上下文是视口（浏览器的可视区域），因此他不会随页面的滚动而滚动
  - 只有元素的`position`属性设置为 static 以外的值， top、bottom、right、left 才会有效

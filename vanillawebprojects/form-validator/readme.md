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
- border-radius: 5px;

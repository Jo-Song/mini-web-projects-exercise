- `.seat:nth-child(n)` 选择器匹配`.seat`父元素的第 n 个子元素，**不论元素的类型**，n 可以是数字、关键词或公式。与之对应的是`:nth-last-child(n)`。

  - 序号写法： `li:nth-child(3){background:orange}`把第三个 li 的背景设置为橙色
  - 倍数写法：
    - `li:nth-child(3n){background:orange}`把第 3、第 6 等所有 3 的倍数的 li 的背景设为橙色
    - `li:nth-child(2n){background:orange}`把第偶数个的 li 的背景设为橙色
    - `li:nth-child(2n+1){background:orange}`把第奇数个的 li 的背景设为橙色
  - 倍数分组：
    - `li:nth-child(3n+1){background:orange}` 匹配 1,4,7....
    - `li:nth-child(3n+5){background:orange}` 匹配 5,8,11....
    - `li:nth-child(5n-1){background:orange}` 匹配 4,9,14....

- `:nth-of-type(n)` 匹配**同类型**中的第 n 个同级兄弟元素，n 的写法与`:nth-child(n)`相同，区别在于`:nth-of-type(n)`只在同类型元素中做计算。 与之对应的是`:nth-last-of-type(n)`。

- `perspective`属性：[相关知识](https://www.cnblogs.com/yanggeng/p/11285856.html)

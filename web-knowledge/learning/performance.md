项目中用到的性能提升点:
1. React + Redux， virtual DOM提升渲染性能
2. Rust + WebAssembly 提升JS运算性能
3. 用setTimeout分割耗时运算到不同的事件循环，避免页面卡顿; full --> delta
4. 减少页面重绘和重排
5. 压缩资源，如minify css/js
6. caching, e.g. HTTP cache
7. code splitting, prefetch, preload
8. debounce, throttle
Fast way to complete the mandatory training:
1. API.LMSSetValue("cmi.core.score.raw","99");
2. API.LMSSetValue("cmi.core.lesson_status","completed");
3. API.LMSFinish("");

- Promise微队列？
- HashMap和Hashtable的区别： http://www.importnew.com/7010.html
- 详解synchronized与Lock的区别与使用java.util.concurrent.locks.Lock：https://blog.csdn.net/u012403290/article/details/64910926
- 如何让两个thread串行执行？ 
- equals, hashCode: http://kakajw.iteye.com/blog/935226
- 哈希表算法？
- GC算法 
- mysql索引的数据结构？
    - http://blog.codinglabs.org/articles/theory-of-mysql-index.html
    - https://www.jianshu.com/p/1775b4ff123a
- 内存溢出, CPU高耗问题排查? 
- MapReduce

- 深入理解计算机系统CSAPP： https://book.douban.com/subject/5333562/
- 我建议你看Berkeley改版后的基于Python的SICP：http://numbbbbb.com/2016/03/28/20160328_%E6%88%91%E5%A6%82%E4%BD%95%E7%94%A8%E4%B8%A4%E5%91%A8%E6%97%B6%E9%97%B4%E5%88%B7%E5%AE%8C%20SICP/
- 算法导论
- 代码大全: https://book.douban.com/subject/1477390/
- 设计模式：https://book.douban.com/subject/1052241/
- 编程大师访谈录：https://read.douban.com/ebook/387679/?dcs=subject-rec&dcm=douban&dct=1052241
- 架构
- 前端框架实现原理(源码解析)
- 代码重构
- 编码：https://book.douban.com/subject/4822685/
- 计算机程序设计艺术： https://book.douban.com/subject/1130500/


- javascript-algorithms: https://github.com/trekhleb/javascript-algorithms
- behavioral interview: https://www.youtube.com/watch?v=PJKYqLP6MRE&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=38
- java-design-patterns: https://github.com/iluwatar/java-design-patterns


Chrome disable web security:
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --user-data-dir="C:\Users\l2wang\temp" --disable-web-security

unit test config:
- admin-core: --compilers js:./mocha.testCore.compiler.js -i -g "\(UI only\)" --require ts-node/register
- react-ui: --compilers js:./mocha.testReactUi.compiler.js -i -g "\(UI only\)" --require ts-node/register

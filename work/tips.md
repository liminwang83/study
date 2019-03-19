Fast way to complete the mandatory training:
1. API.LMSSetValue("cmi.core.score.raw","99");
2. API.LMSSetValue("cmi.core.lesson_status","completed");
3. API.LMSFinish("");


- javascript-algorithms: https://github.com/trekhleb/javascript-algorithms
- behavioral interview: https://www.youtube.com/watch?v=PJKYqLP6MRE&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=38
- java-design-patterns: https://github.com/iluwatar/java-design-patterns


Chrome disable web security:
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --user-data-dir="C:\Users\l2wang\temp" --disable-web-security

unit test config:
- admin-core: --compilers js:./mocha.testCore.compiler.js -i -g "\(UI only\)" --require ts-node/register
- react-ui: --compilers js:./mocha.testReactUi.compiler.js -i -g "\(UI only\)" --require ts-node/register

How to Start 5G release build with Gulp：
gulp serve --max-old-space-size=5120 --5G
try to remove .tmp folder first.

Dashboard:  https://jiradc.int.net.nokia.com/Dashboard.jspa?selectPageId=57623
Kanban: https://jiradc.int.net.nokia.com/secure/RapidBoard.jspa?rapidView=4397
Commit epics and future epics(commit by end FB): https://jiradc.int.net.nokia.com/secure/Dashboard.jspa?selectPageId=62599

Hi Limin,
hzuidv01 server build has been completed. We will send the password 1 to 1 email.
Name:    hzuidv01.china.nsn-net.net
Address:  10.159.218.254
Password: Temp1234

starting docker before run case:
$docker start pysct-docker1
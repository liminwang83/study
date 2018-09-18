require(['./math'], function (math) {
    console.log('basicNum: ', math.basicNum);
    console.log('add 100: ', math.add(math.basicNum, 100));

    window.onload = function () {
        const node = document.createElement('p');
        node.innerHTML = 'add 100: ' + math.add(math.basicNum, 100);
        node.className = 'alerts';
        node.onclick = function () {
            console.log('clicked');
        };
        document.body.appendChild(node);
    };
});
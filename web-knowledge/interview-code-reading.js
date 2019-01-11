var obj = {
    a: 33,
    output() {
        alert(this.a);
    }
};

setTimeout(obj.output, 1000);
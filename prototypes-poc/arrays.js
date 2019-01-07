module.exports = {
    asyncForEach,
    processUntilSuccess
};

function asyncForEach(array, maxProcessingTimeMs, processItemFunction, onDoneFunction, timeoutFunction = setTimeout) {
    const that = array;

    function internal(offset) {
        let success = false;
        let i = offset;

        const start = Date.now();
        for (; i < that.length && !success; i++) {
            success = processItemFunction(that[i]) === true;

            const time = Date.now() - start;
            if (time > maxProcessingTimeMs && i !== that.length - 1 && !success) {
                timeoutFunction(timeoutCallback);
                break;
            }
        }

        if (onDoneFunction && i === that.length) onDoneFunction();

        function timeoutCallback() {
            i++;
            internal(i);
        }
    }

    internal(0);
}

function processUntilSuccess(array, maxProcessingTimeMs, processItemFunction, onDoneFunction, timeoutFunction = setTimeout) {
    const that = array;

    function internal(offset) {
        let success = false;

        let i = offset;
        const start = Date.now();
        for (; i < that.length && !success; i++) {
            success = processItemFunction(that[i]) === true;

            const time = Date.now() - start;
            if (time > maxProcessingTimeMs && !success) {
                timeoutFunction(timeoutCallback);
                break;
            }
        }
        if (onDoneFunction && (success || i === that.length)) onDoneFunction();

        function timeoutCallback() {
            i++;
            internal(i);
        }
    }

    internal(0);
}

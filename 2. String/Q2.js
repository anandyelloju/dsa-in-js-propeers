// Encode the Message

function encode(message) {
    const n = message.length;
    if (n === 0) return "";

    let res = [];
    let count = 1;

    for (let i = 1; i < n; i++) {
        if (message[i] === message[i - 1]) {
            count++;
        } else {
            res.push(message[i - 1] + count);
            count = 1;
        }
    }

    res.push(message[n - 1] + count);
    return res.join("");
}


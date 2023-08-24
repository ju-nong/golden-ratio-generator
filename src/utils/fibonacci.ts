function fibonacci(n: number) {
    if (n < 0) {
        return [];
    }

    if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    }

    const arr = [0, 1];

    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}

export default fibonacci;

export function createKeyGen() {
    let nextKey = 0;
    const history: number[] = [];
    const remains: number[] = [];
    return {
        getNextKey: () => {
            const key = remains.pop() ?? nextKey++;
            history.push(key);
            return key;
        },
        getLastKey: () => {
            while (history.length !== 0) {
                const last = history.pop();
                if (last !== undefined) return last;
            }
            return history.pop();
        },
        reuse: (key: number) => {
            const idx = history.indexOf(key);
            if (idx !== -1) delete history[idx];
            remains.push(key);
        }
    };
}
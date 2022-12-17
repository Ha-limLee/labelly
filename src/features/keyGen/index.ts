export function useKeyGen() {
    let nextKey = 0;
    const remains: number[] = [];
    return {
        get: () => {
            return remains.pop() || nextKey++;
        },
        reuse: (key: number) => {
            remains.push(key);
        }
    };
}
class SegmentTree<E> {
    /**
     * 线段树
     */
    constructor(
        private data: E[] = []
    ) {
    }

    getSize(): number {
        return this.data.length;
    }

    get(index: number): E {
        if (index < 0 || index >= this.data.length) {
            throw new RangeError('Illegal index');
        }
        return this.data[index];
    }
}

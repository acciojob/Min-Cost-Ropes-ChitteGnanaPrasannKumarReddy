function mincost(arr) {
    const heap = new MinPriorityQueue({ priority: x => x });
    arr.forEach(num => heap.enqueue(num));
    
    let totalCost = 0;

    while (heap.size() > 1) {
        let first = heap.dequeue().element;
        let second = heap.dequeue().element;

        let cost = first + second;
        totalCost += cost;

        heap.enqueue(cost);
    }

    return totalCost;
}

module.exports = mincost;


function josephus(list, m) {
  let node = list.head;
  let tail = list.find((node) => node.next === null);
  tail.next = node;

  while (list.head.next != list.head) {
    for (let i = 1; i < m; i++) {
      node = node.next;
    }
    if (node.next === list.head) {
      list.head = list.head.next;
    }
    node.next = node.next.next;
    node = node.next;
    
  }
  return node.value;
}

module.exports = josephus;

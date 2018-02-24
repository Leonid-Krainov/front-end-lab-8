let debounce = (callBack, ms = 1000) => {
  let timer = null;
  return function () {
    let newCallBack = () => {
      callBack();
      timer = null;
    }
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(newCallBack, ms);
  }
}

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 1'
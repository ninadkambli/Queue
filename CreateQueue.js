function createQueue() {
const queue =[]
return{
  addItem(x){
    queue.unshift(x)
  },
  removeItem(){
    if(queue.length === 0){
      return undefined
    }
    else{
      return queue.pop()
    }
  },
  nextItemToBeRemoved(){
    if(queue.length === 0){
      return undefined
    }
    else{
      return queue[queue.length - 1]
    }
  },
  get_length(){
    return queue.length
  },

  isEmpty(){
      return queue.length === 0
    },

  printQueue(){
    return queue
  }
  
  }
  
}

exports.createQueue = createQueue
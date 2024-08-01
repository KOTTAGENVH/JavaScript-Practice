//Queue FIFO

class Queue {
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        if(this.isEmpty())
            return "Queue is empty"
        return this.items.shift()
    }
    front(){
        if(this.isEmpty())
            return "No elements in Queue"
        return this.items[0]
    }
    
}
class Todo {
    constructor(task) {
        this.task = task;
        console.log(task)
    }

static Builder = class {
    static title = null;
    static content = null;
    static timeLimit = null;
    static done = false;
    static withTitle(title){
        this.title = title;
        return this;
    }
    static withContent(content){
        this.content = content;
        return this;
    }
    static withTimeLimit(timeLimit){
        this.timeLimit = timeLimit;
        return this;
    }
    static withDone(done){
        this.done = done;
        return this;
    }
    static build(){
        return new Todo().task;
        console.log(build);
    }
}
}
export default Todo;


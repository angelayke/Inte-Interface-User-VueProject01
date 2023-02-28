class ObserverOne {

    constructor(events) {
        this.ev = this.createEventsObjets(events)
    }

    //subscribe - steak
    subscribe(event, callback) {
        if (!this.ev[event]){
            this.ev[event] = [];
        }

        this.ev[event].push(callback);

        return() => this.unsubscribe(event, callback)
    }

    //unsubscribe - blé d'Inde
    unsubscribe(event, callback) {
        if (!this.ev[event]) return;
        this.ev[event] = this.ev[event].filter (
            cb => cb !== callback
        );
    }

    //publish - patate
    publish(event, ...arg) {
        if (!this.ev[event]) return;
        this.ev[event].forEach(cb => cb(...arg || []));
    }

    createEventsObjets(events) {
        return Object.values(events).reduce((acc, value) => {
            if (!acc[value]){
                acc = { ...acc, [value]: [] }
            }
            return acc;
        })
    }
}

export default ObserverOne;
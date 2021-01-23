import {Observable} from "rxjs/Observable";


var observable = new Observable((observer:any) => {
    try {
        observer.next('Hey guys');
        observer.next('How are you');

        setInterval(() => {
            observer.next("I am good");
        }, 2000)

        // observer.complete();
        // observer.next('This will not send');
    } catch (error) {
        observer.error(error)
    }
});

let observer = observable.subscribe((x:any) => {
    
    addItem(x);
},
(error:any)=> addItem(error),
() => addItem("Completed")

);

let observer2 = observable.subscribe(x => {
    addItem(x);
});

observer.add(observer2);

setTimeout(()=> {
    observer.unsubscribe();
}, 6001);

function addItem(val:any) {

    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);

    document.getElementById("output").appendChild(node);
    
}
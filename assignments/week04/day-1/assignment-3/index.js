var stack = [];

var push = document.getElementById('push');
push.addEventListener('click', function(){
    stack.push(document.getElementById('input').value);
    var outStack = document.getElementById('outStack');
    outStack.innerHTML = stack;
});

var pop = document.getElementById('pop');
pop.addEventListener('click', function(){
    stack.pop();
    var outStack = document.getElementById('outStack');
    outStack.innerHTML = stack;
});

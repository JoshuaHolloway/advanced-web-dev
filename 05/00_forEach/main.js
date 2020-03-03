let arr = [1, 2, 3];

console.log('Built-in forEach():');
arr.forEach((val, index, arr) => {
    console.log('index=', index, ' val=', val, ' arr=', arr);
});

//========================

// Roll my own forEach
function ForEach(arr, f) {
    for (let i = 0; i < arr.length; i++)
        f(arr[i], i, arr);
}

function do_on_each_elem(val, index, arr) {
    console.log('index=', index, ' val=', val, ' arr=', arr);
}

console.log('Self rolled forEach():');
ForEach(arr, do_on_each_elem);

//========================

class ForEach_class {
    constructor(arr) {
        this.arr = arr;
    }

    ForEach(f) {
        for (let i = 0; i < this.arr.length; i++)
            f(this.arr[i], i, this.arr);
    }
}

console.log('Rolled own with class');
let x = new ForEach_class(arr);
x.ForEach(do_on_each_elem);
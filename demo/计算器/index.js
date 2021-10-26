
let clear = document.querySelector('#clear');
let lis = document.querySelector('.simple').querySelectorAll('li');
let process = document.querySelector('.process').querySelector('p');
let result = document.querySelector('.result');

let pro = [];
let reg = /^\d$/;
let height = 35;
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mousedown', e => {

        let text = lis[i].innerHTML;

        // 是等号，突出结果
        if (text === '=') {
            process.style.fontSize = '20px';
            result.style.fontSize = '35px';
            process.style.color = '#ccc';
            let proBox = process.parentElement;
            process = document.createElement('p');
            process.style.fontSize = '20px';
            process.style.color = '#ccc';
            proBox.appendChild(process);
            height += 30;
            proBox.style.height = height + 'px';
        } else {
            // 不是就突出过程
            process.style.fontSize = '35px';
            process.style.color = '';
            result.style.fontSize = '20px';

        
            // 如果是 清楚/前退功能符号
            if (text === 'C') {
                pro.length = 0;
                clear.innerHTML = 'AC'; 
                result.innerHTML = 0;
                process.innerHTML = '';
                return ;
            } else if (text === 'AC') {
                return;
            } else if (text === '') {
                pro.pop();      // 回退
            } else if (text === '切换') {
                alert('还没做好，等等等等~');
            } else {
                // 把每一步操作放到数组里
                if (!reg.test(pro[pro.length-1]) && !reg.test(text)) {
                    // 重复输入运算符，就更新运算符
                    pro.pop();
                    pro.push(text);
                }else {
                    // 否则直接把操作压入数组
                    pro.push(text);
                }
            }
        }
           
        
        // 运算后输出结果
        let res = calculate(pro);
        if (!isNaN(pro[pro.length-1])) {
            result.innerHTML = res;
        }

        if (!pro.length) {
            result.innerHTML = 0;
        }
        
        process.innerHTML = pro.join('');
        console.log(process.clientWidth);
        
        if (pro.length) {
            clear.innerHTML = 'C';
        }else {
            clear.innerHTML = 'AC'; 
        }

    })
}

/*
// 按顺序计算
function calculate(array) {
    let num = '';
    let resArr = [];
    let res = 0;
    let operator = '';
    let i = 0;

    // 第一个数计为 res
    while (!isNaN(array[i]) || (array[i] === '.' && !isNaN(array[i+1])) && i < array.length) {
        num += array[i++];
    }
    num = num - 0;
    res += num;
    num = '';

    // 把第一个数放到数组里，方便后面操作
    resArr.push(res);
    
    while (i < array.length) {
        // 退出循环后 array[i] 为运算符，记一下
        operator = array[i++];
        // 这时 重新计后一个 num
        while (!isNaN(array[i]) || (array[i] === '.' && !isNaN(array[i+1])) && i < array.length) {
            num += array[i++];
        }
        num = num - 0;
        // 根据运算符判断 res 和 num 做什么运算
        switch (operator) {
            case '+': res += num; break;
            case '-': res -= num; break;
            case '/': res /= num; break;
            case '%': res %= num; break;
            case '×': res *= num; break;
            default: break;
        }
        // 算完把 num 初始化
        num = '';
    }
    if (!isNaN(array[array.length-1])) {
        result.innerHTML = res;
    } else {

    }
    
}
*/


function calculate(array) {
    let stack1 = [];    // 数字栈
    let stack2 = [];    // 符号栈
    let p1 = null, p2 = null;
    let num = '';

    // 把数组中的元素分类放入两个栈中
    for (let i = 0; i < array.length; i++) {
        if (reg.test(array[i]) || (array[i] === '.' && reg.test(array[i+1]))) {
            num += array[i];
        } else {
            stack1.push(num);
            stack2.push(array[i]);
            num = '';
        }
    }
    stack1.push(num);
    let res = num;

    // 给运算符设置一个优先级
    let map = {
        '+' : 1,
        '-' : 1,
        '×' : 2,
        '/' : 2,
        '%' : 2
    };

    while (stack1.length > 1) {

        if (map[stack2[0]] >= map[stack2[1]] || stack2.length === 1) {
            let num1 = stack1.shift();
            let num2 = stack1.shift();
            switch (stack2[0]) {
                case '+' : stack1.unshift((num1-0) + (num2-0)); break;
                case '-' : stack1.unshift((num1-0) - (num2-0)); break;
                case '×' : stack1.unshift((num1-0) * (num2-0)); break;
                case '/' : stack1.unshift((num1-0) / (num2-0)); break;
                case '%' : stack1.unshift((num1-0) % (num2-0)); break;
                default: break;   
            }
            stack2.shift();
        } else {
            let num1 = stack1[1];
            let num2 = stack1[2];
            switch (stack2[1]) {
                case '×' : stack1[1] = (num1-0) * (num2-0); break;
                case '/' : stack1[1] = (num1-0) / (num2-0); break;
                case '%' : stack1[1] = (num1-0) % (num2-0); break;
                default: break;
            }
            stack1.splice(2, 1);
            stack2.splice(1,1);
        }

    }
    res = stack1[0];
    return res;
}
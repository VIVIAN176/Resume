
let demo = document.querySelector('#demo')
let n = 1
demo.innerHTML = n


//setTimeout()只执行一次就结束了
// setTimeout(() => {
//     n = n + 1
//     demo.innerHTML = n
// }, 1000)


//用setInterval()
// setInterval(() => {
//     n = n + 1
//     demo.innerHTML = n
// }, 1000)

// setInterval(() => { demo.innerHTML = n + 1 }, 1000)
//这样就不行？？？？？？

//老手不用setInterval()用递归的setTimeout()
// setTimeout(() => {
//     n = n + 1
//     demo.innerHTML = n
//     setTimeout(() => {
//         n = n + 1
//         demo.innerHTML = n
//         setTimeout(() => {
//             n = n + 1
//             demo.innerHTML = n
//         }, 1000)
//     }, 1000)
// }, 1000)


//函数封装

// let step = () => {
//     setTimeout(() => {
//         n = n + 1
//         demo.innerHTML = n
//         step()
//     }, 500)
// }

// //大师调用法调用函数
// step.call(undefined)


//添加条件
let step = () => {
    if (n < 20) {
        setTimeout(() => {
            n = n + 1
            demo.innerHTML = n
            step()
        }, 500)
    }
    else { }
}
//大师调用法调用函数
step.apply(null)
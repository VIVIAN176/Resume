
let demo = document.querySelector('#demo')
// let n = 1
let n = 0 //n从0开始，what different?咿刚好字符串下标就是从0开始的
let str = `你好，我叫张得瘦，这是我的简历` //申明一个字符串 我用了比较好用反引号`` 
// demo.innerHTML = n
// demo.innerHTML = str[n]
// demo.innerHTML = str.substring((0, n))


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
    if (n < str.length) {
        setTimeout(() => {
            n = n + 1
            // demo.innerHTML = n
            // demo.innerHTML = str[n]
            demo.innerHTML = str.substring(0, n)
            // console.log(n)  console.log()调试大法
            step()
        }, 150)
    }
    else { }
}
//大师调用法调用函数
step.apply(null)
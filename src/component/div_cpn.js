import "../style/div_style.css"
import "../style/content.less"
import img from "../img/juwenzhang.jpg"

const divEl = document.createElement('div')

divEl.textContent = 'Hello'
divEl.classList.add('container')
divEl.classList.add('content')

document.body.appendChild(divEl)

// 开始实现使用我们的图片资源
const imgEl = document.createElement('img')
imgEl.src = img
imgEl.width = "200"
document.body.appendChild(imgEl)

// 开始实现设置我们的背景
document.body.classList.add('bgImg')

console.log(imgEl)
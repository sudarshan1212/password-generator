showpassword=document.querySelector('#showpassword')
let upper="ABCDEFGHIJKLMNOPQRSTUVWXUZ"
let lower=upper.toLowerCase()
let symbol="!@#$%^&*()/*-+"
let num="0123456789"

let len=12
let allchars=upper+lower+symbol+num
function createpass(){
    let pass=""
    // pass+=upper[Math.floor(Math.random()*1)]
    // pass+=lower[Math.floor(Math.random()*lower.length)]
    // pass+=symbol[Math.floor(Math.random()*symbol.length)]
    // pass+=num[Math.floor(Math.random()*num.length)]
   
   
    while(pass.length<=len){
        pass+=allchars[Math.floor(Math.random()*allchars.length)]
    }
    showpassword.value=pass
}
function copy(){
    showpassword.select()
    document.execCommand("copy")
}
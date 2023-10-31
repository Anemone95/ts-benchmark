// @ts-nocheck
export function f(){
    let a="fff";
    let b={};
    b[a]=()=>{console.log('called')};
    b[a]();
}
f();

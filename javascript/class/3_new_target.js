function f(){
    if(!new.target){
        throw new Error('please use new')
    }
}

f()
new f()

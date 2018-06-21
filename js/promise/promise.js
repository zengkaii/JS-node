class Promise {
    constructor(executor){
        // 成功的值
        // promise 状态有几种？
        // pending 等待
        // resolved 成功
        // rejected 失败
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        let resolve = (value) =>{
            if(this.status === 'pending') {
                this.status = 'resolved';
                this.value = value;
            }
            console.log('执行了rosolve')
        };
        let reject = (reason) =>{
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.reason = reason;
            }
            console.log('执行了reject')
        
        };
        executor(resolve,reject);
    }

    then(onFullfilled,onRejected){
        if (this.status === 'resolved') {
            onFullfilled(this.value);
        }
        if (this.status === 'rejected') {
            onRejected(this.reason);
        }
        console.log('执行了.then()');
    }
}
module.exports=Promise;
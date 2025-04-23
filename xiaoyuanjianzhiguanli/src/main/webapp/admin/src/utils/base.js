const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoyuanjianzhiguanli/",
            name: "xiaoyuanjianzhiguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoyuanjianzhiguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园兼职管理系统"
        } 
    }
}
export default base

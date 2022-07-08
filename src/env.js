// 导出一个地址
let baseURL;
//process.env获取当前node.js进程内的环境变量，最终这个环境变量会写入node.js。NODE_ENV获取当前传过来的参数
switch(process.env.NODE_ENV){
    // 开发
    case 'development':
        baseURL ='http://dev-mall-pre.springboot.cn/api';
    break;
    // 测试
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
    break;
    // 生产
    case 'prod':
        baseURL = 'http://prod-mall-pre.springboot.cn/api';
    break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api';
    break;
}

export default{
    baseURL
}
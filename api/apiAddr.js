// api 地址
export const FORMDATA = 'FORMDATA';
export default {
    // login:'POST login',
    // queryUser:'/user',
    // queryUsers:'/users',
    // deleteUser:'/user/', // url为 / 结尾的后面是路径参数  例： /user/1
    // updateUser:'POST /user/update',
    // createUser:'POST /user/create',
    // uploadSubject:`POST /chapter/import/ ${FORMDATA}`,//导入章节
    // test: 'GET /t/test',

    queryQnToken: 'GET /website/web/common/qiniuToken',//获取七牛云上传token

    //站点
    queryBanners: 'GET /website/web/website/webBannerList', // Banner
    queryWebsite: 'GET /website/web/website/detail', //详情
    queryFriendLink: 'GET /website/web/website/blogrollList', //友情链接

    queryTelCode: "POST /user/web/sms/captcha",//获取验证码
    loginCode: 'POST /user/web/student/captchaLogin',//验证码登录
    loginPwd: 'POST /user/web/student/passwordLogin',//密码登录
    queryUser: 'GET /user/web/student/loginInfo',//用户信息
    updateUser: 'POST /user/web/student/info',//修改用户信息
    updateUserOpt: 'POST /user/web/student/baseInfo',//修改单个用户信息
    updatePwd: 'GET /user/web/student/forgetpwd',//忘记密码
    validPwd: 'POST /user/web/student/verifypwd',//验证手机号码
    updateUserPhone: "POST /user/web/student/changePhone",//修改手机号码
    updateUserPassword: "POST /user/web/student/setpwd",//修改密码
    validPhone: "POST /user/web/student/verifyphone",
    //商品
    queryGoods: "GET /goods/web/goods/list",
    queryGoodDetail: "GET /goods/web/goods/detail",

    queryUserMessage: "GET /user/web/student/notificationMessage",
    // queryFooterData: 'GET /qbxyapi/website/web/website/blogrollList',
    queryCourse: 'GET /curriculum/web/curriculum/mine',
    querySubjects: 'GET /curriculum/web/subject/list',
    querySubject: "GET /curriculum/web/subject/detail",
    querySubjectPlan: "GET /curriculum/web/subject/detailPlan",
    querySubjectLive: "GET /curriculum/web/subject/detailLive",

    queryDefaultSubject: 'GET /curriculum/web/subject/plan',
};

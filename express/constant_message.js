const CONSTANT = {
    // 相关提示语言设定
    RESULT: {
        ADMINISTRATOR_USERNAME_DUPLICATE: '重复的用户名',
        DESTROY_TEAM_BUT_HAS_CUSTOMER: '该团队仍有客户，请先将客户移出此团队',
        INVALID_NAME_OR_PASSWORD: '用户名或密码错误',
        INVALID_EMAIL: '邮箱无效',
        OPERATE_FAILED: '操作失败',

        // sequelize 框架错误信息
        SequelizeEagerLoadingError: '服务内部错误',
        SequelizeDatabaseError: '数据库查询错误',
        SequelizeUniqueConstraintError: '唯一索引冲突',


        // 系统错误
        MYSQL_DUP_ENTRY: "数据重复",
        MYSQL_ETIMEDOUT: "数据库超时",
        MYSQL_ERR: "数据库错误",

        // 通用返回
        OK: "操作成功",
        ID_NULL: "无效的ID",
        INDEX_NULL: "无效的index",
        INVALID_FILTERS: "无效的过滤选项",
        DOMAIN_INVALID: "无效的域名",
        DOMAIN_INVALID_2: "找不到公司",
        Id_INVALID: "找不到此用户",
        Id_INVALID_2: "无效的用户",
        UPDATE_INVALID_KEY: "无效的更新字段",
        DELETE_FAILED: "删除失败",
        MEMBER_ID_NULL: "无效的MemberId",
        LOGIN_TYPE_INVALID: "无效的登录类型",
        DELETE_ADMIN_FAILED_TEAMLEADER: "团队内至少一个TeamLeader",
        NO_DATA_FOUND: '没有数据',
        PRIVILEGE_ILLEGAL: '没有权限',

        // 登录
        LOGIN_SUCCESS: "登录成功",
        LOGIN_INVALID_USER: "无此用户",
        LOGIN_INVALID_PASSWORD: "密码错误",
        LOGIN_FIRST: "请先登录",

        // token
        TOKEN_REFRESH_SUCCESS: "token刷新成功",
        TOKEN_INVALID: "无效的token",
    }
}

module.exports = CONSTANT

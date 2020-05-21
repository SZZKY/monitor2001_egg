/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1588659821103_1790";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  exports.sequelize = {
    dialect: "mysql", // support: mysql, mariadb, postgres, mssql
    database: "escalator_monitor", //数据库名
    host: "122.51.20.27",
    port: "3306",
    username: "test", //账号
    password: "test192636", //密码
  };

  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

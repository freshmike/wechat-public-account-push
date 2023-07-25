/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx22b17e2f772ed527',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'ef775b03b9bf8e4a88d8b93af371b84e',

  PROVINCE: '湖南',
  CITY: '张家界',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小可爱',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'opk196H20gG090xYNp4EBRIFIieg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'T4xaeD_3lux5vaIwyWVLGlEIlbVcFVwP2RiRlhgO_0U',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-26',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小可爱', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '节日', name: '相识纪念日', year: '2013', date: '09-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2017-06-17' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-01-21' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'T4xaeD_3lux5vaIwyWVLGlEIlbVcFVwP2RiRlhgO_0U',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '	5jTi8Kp9vWPZP6gYSYApFHanHpAVUdvN3wJCAAMESOg',
    }
  ],

}

module.exports = USER_CONFIG


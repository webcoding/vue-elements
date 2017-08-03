
// 所有的 tag 标签，全部使用单数形式
// 对于扩展的标签名，使用大驼峰格式（区别于常规标签）
// 项目中引用全用同名大驼峰，必要情况可以加 Plus 前缀

/*
  组件分类：
  - HTML 标签扩展，如: CheckSwitch Dialog Toast Progress Preloader Searchbar ActionSheet
  - 经典布局 如：card list-block login-screen msg-page
    (极尽升华，仅使用一个或两个标签组合实现，可用于作为 HTML 标签的扩展)
*/

const navList = [
  // 分组
  // base form view navigation other
  {
    title: '布局',
    small: 'Layout',
    list: [
      // {
      //   icon: '',
      //   link: 'abc',
      //   title: '模板',
      //   small: 'abc',
      //   desc: '',
      //   type: 'base',
      //   status: 'todo',
      // },
      {
        icon: '',
        link: 'blank',
        title: '间距留白',
        small: 'blank',
        desc: '',
        type: 'layout',
        status: 'todo',
      },
      // {
      //   icon: '',
      //   link: 'typography',
      //   title: '排版样式',
      //   small: 'typography',
      //   desc: '',
      //   type: 'base',
      //   status: 'doing',
      // },
      // {
      //   icon: '',
      //   link: 'grid',
      //   title: '栅格系统',
      //   small: 'grid',
      //   desc: '',
      //   type: 'base',
      //   status: 'doing',
      // },
      {
        icon: '',
        link: 'flex',
        title: '弹性布局',
        small: 'flex',
        desc: '',
        type: 'base',
        status: 'doing',
      },
      // {
      //   icon: '',
      //   link: 'webp',
      //   title: '图片优化',
      //   small: 'webp',
      //   desc: '',
      //   type: 'base',
      //   status: 'doing',
      // },
      // {
      //   icon: '',
      //   link: 'group',
      //   title: '组别',
      //   small: 'group',
      //   desc: '',
      //   type: 'base',
      //   status: 'doing',
      // },
      // {
      //   icon: '',
      //   link: 'button',
      //   title: '按钮',
      //   small: 'button',
      //   desc: '',
      //   type: 'base',
      //   status: 'doing',
      // },
      {
        icon: '',
        link: 'icon',
        title: '图标',
        small: 'icon',
        desc: '',
        type: 'img',
        status: 'done',
      },
      {
        icon: '',
        link: 'badge',
        title: '标签',
        small: 'badge/tag',
        desc: '',
        type: 'layout',
        status: 'done',
      },
      {
        icon: '',
        link: 'cell',
        title: '列表',
        small: 'cell',
        desc: '',
        type: 'list',
        status: 'doing',
      },
      {
        icon: '',
        link: 'index-list',
        title: '索引列表，如联系人',
        small: 'index-list',
        desc: '',
        type: 'list',
        status: 'doing',
      },
      {
        icon: '',
        link: 'media-list',
        title: '媒体列表',
        small: 'media list',
        desc: '',
        type: 'list',
        status: 'todo',
      },
      {
        icon: '',
        link: 'x-switch',
        title: '滑动开关',
        small: 'switch',
        desc: '在两个互斥对象进行选择，eg：选择开或关。',
        type: 'form',
        status: 'done',
      },
    ],
  },

  {
    title: '导航',
    small: 'Navigation',
    list: [
      {
        icon: '',
        link: 'x-header',
        title: '导航栏',
        small: 'x-header',
        desc: '头部导航条',
        type: 'bar',
        status: 'doing',
      },
      {
        icon: '',
        link: 'navbar',
        title: '导航栏',
        small: 'navbar',
        desc: '位于 app 内容区的上方，系统状态栏的下方，并且提供在一系列页面中的导航能力。',
        type: 'bar',
        status: 'todo',
      },
      {
        icon: '',
        link: 'toolbar',
        title: '工具栏',
        small: 'toolbar',
        desc: '位于 app 底部，方便用户在不同功能模块之间进行快速切换。',
        type: 'bar',
        status: 'todo',
      },
      {
        icon: '',
        link: 'noticebar',
        title: '通告栏',
        small: 'noticebar',
        desc: '在导航栏下方，一般用作系统提醒、活动提醒等通知。',
        type: 'bar',
        status: 'todo',
      },
      {
        icon: '',
        link: 'search-bar',
        title: '搜索栏',
        small: 'searchbar',
        desc: '一般可位于 Navbar 下方，通过『取消按钮』退出激活状态。',
        type: 'bar',
        status: 'doing',
      },
      {
        icon: '',
        link: 'tabbar',
        title: '标签栏',
        small: 'tabbar',
        desc: '方便用户在不同内容模块之间进行快速切换。',
        type: 'bar',
        status: 'todo',
      },
      {
        icon: '',
        link: 'sidebar',
        title: '侧边栏',
        small: 'sidebar',
        desc: '',
        type: 'bar',
        status: 'todo',
      },
      {
        icon: '',
        link: 'preloader',
        title: '加载指示器',
        small: 'preloader',
        desc: '',
        type: 'bar',
        status: 'todo',
      },
      {
        icon: '',
        link: 'progress',
        title: '进度',
        small: 'progress',
        desc: '',
        type: 'bar',
        status: 'todo',
      },
    ],
  },

  {
    title: '数据录入',
    small: 'Data Entry',
    list: [
      {
        icon: '',
        link: 'field',
        title: '表单面板',
        small: 'field',
        desc: '',
        type: 'form',
        status: 'doing',
      },
      {
        icon: '',
        link: 'radio',
        title: '单选框',
        small: 'radio',
        desc: '',
        type: 'form',
        status: 'todo',
      },
      {
        icon: '',
        link: 'checkbox',
        title: '多选框',
        small: 'checkbox',
        desc: '',
        type: 'form',
        status: 'todo',
      },

      {
        icon: '',
        link: 'cascader',
        title: '级联选择',
        small: 'cascader',
        desc: '',
        type: 'form',
        status: 'todo',
      },
      {
        icon: '',
        link: 'input-number',
        title: '数字输入框',
        small: 'input-number',
        desc: '',
        type: 'form',
        status: 'todo',
      },
      {
        icon: '',
        link: 'select',
        title: '选择器',
        small: 'select',
        desc: '',
        type: 'form',
        status: 'todo',
      },
      {
        icon: '',
        link: 'tree-select',
        title: '树选择',
        small: 'tree select',
        desc: '',
        type: 'form',
        status: 'todo',
      },
      {
        icon: '',
        link: 'slider',
        title: '滑块输入条',
        small: 'slider',
        desc: '',
        type: 'form',
        status: 'todo',
      },
      {
        icon: '',
        link: 'transfer',
        title: '穿梭框',
        small: 'transfer',
        desc: '',
        type: 'form',
        status: 'todo',
      },
      {
        icon: '',
        link: 'upload',
        title: '上传',
        small: 'upload',
        desc: '',
        type: 'form',
        status: 'todo',
      },
    ],
  },

  {
    title: '数据展示',
    small: 'Data Display',
    list: [
      {
        icon: '',
        link: 'picker',
        title: '选择器',
        small: 'Picker',
        desc: '',
        type: 'picker',
        status: 'todo',
      },
      {
        icon: '',
        link: 'date-picker',
        title: '日期选择框',
        small: 'Date Picker',
        desc: '',
        type: 'picker',
        status: 'todo',
      },
      {
        icon: '',
        link: 'time-picker',
        title: '时间选择框',
        small: 'Time Picker',
        desc: '',
        type: 'picker',
        status: 'todo',
      },
      {
        icon: '',
        link: 'city-picker',
        title: '省市区',
        small: 'City Picker',
        desc: '',
        type: 'picker',
        status: 'todo',
      },
    ],
  },
  {
    title: '操作反馈',
    small: 'Feedback',
    list: [
      {
        icon: '',
        link: 'article',
        title: '外部内容',
        small: 'article',
        desc: '',
        type: 'list',
        status: 'todo',
      },
      {
        icon: '',
        link: 'accordion',
        title: '手风琴',
        small: 'accordion',
        desc: '可以折叠/展开的内容区域。',
        type: 'views',
        status: 'todo',
      },
      {
        icon: '',
        link: 'action-sheet',
        title: '操作表/动作面板',
        small: 'action-sheet',
        desc: '从底部浮出的模态，提供和当前场景相关的 2 个以上操作或者更多描述内容。',
        type: 'views',
        status: 'todo',
      },
      {
        icon: '',
        link: 'card',
        title: '卡片',
        small: 'Card',
        desc: '用于组织信息和操作，通常也作为详细信息的入口。',
        type: 'list',
        status: 'todo',
      },
      {
        icon: '',
        link: 'tree',
        title: '树形控件',
        small: 'tree',
        desc: '',
        type: 'layout',
        status: 'todo',
      },

      {
        icon: '',
        link: 'menu',
        title: '菜单',
        small: 'menu',
        desc: '在一个临时的面板上显示一组操作。',
        type: 'extend',
        status: 'todo',
      },
      {
        icon: '',
        link: 'popup',
        title: '弹出层',
        small: 'popup',
        desc: '从顶部或底部浮出的模态，提供标题和关闭按钮，展示和当前内容相关的信息或提供相关操作。',
        type: 'extend',
        status: 'todo',
      },
      {
        icon: '',
        link: 'popover',
        title: '气泡卡片',
        small: 'popover',
        desc: '在点击控件或者某个区域后，浮出一个气泡区域来放置更多的操作或者信息。',
        type: 'extend',
        status: 'todo',
      },
      {
        icon: '',
        link: 'tooltip',
        title: '文字提示',
        small: 'tooltip',
        desc: '',
        type: 'extend',
        status: 'todo',
      },
      {
        icon: '',
        link: 'result',
        title: '结果页',
        small: 'result',
        desc: '在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果，eg：支付成功，无网络状态，重新加载。',
        type: 'extend',
        status: 'todo',
      },

      {
        icon: '',
        link: 'alert',
        title: '弹窗',
        small: 'alert',
        desc: '',
        type: 'extend',
        status: 'todo',
      },
      {
        icon: '',
        link: 'confirm',
        title: '确认框',
        small: 'confirm',
        desc: '',
        type: 'extend',
        status: 'todo',
      },
      {
        icon: '',
        link: 'modal',
        title: '对话框',
        small: 'modal',
        desc: '用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。',
        type: 'extend',
        status: 'todo',
      },
      // {
      //   'icon': '',
      //   'link': 'dialog',
      //   'title': '对话框',
      //   'small': 'dialog',
      //   'desc': '',
      //   'type': 'extend',
      //   'status': 'todo',
      // },
      {
        icon: '',
        link: 'toast',
        title: '轻提示',
        small: 'toast',
        desc: '一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。',
        type: 'extend',
        status: 'todo',
      },
      {
        icon: '',
        link: 'loading',
        title: '加载进度',
        small: 'loading',
        desc: '',
        type: 'extend',
        status: 'todo',
      },
      {
        icon: '',
        link: 'notification',
        title: '通知提醒框',
        small: 'notification',
        desc: '',
        type: 'extend',
        status: 'todo',
      },
      {
        icon: '',
        link: 'countup',
        title: '计时器',
        small: 'countup',
        desc: '',
        type: 'extend',
        status: 'todo',
      },
      {
        icon: '',
        link: 'countdown',
        title: '倒计时',
        small: 'countdown',
        desc: '',
        type: 'extend',
        status: 'todo',
      },
      {
        icon: '',
        link: 'clocker',
        title: '倒计时',
        small: 'clocker',
        desc: '',
        type: 'extend',
        status: 'todo',
      },
      {
        icon: '',
        link: 'timeline',
        title: '时间轴',
        small: 'timeline',
        desc: '',
        type: 'extend',
        status: 'todo',
      },
      {
        icon: '',
        link: 'stepper',
        title: '步骤显示器',
        small: 'stepper',
        desc: '',
        type: 'extend',
        status: 'todo',
      },
      {
        icon: '',
        link: 'clocker',
        title: '倒计时',
        small: 'clocker',
        desc: '',
        type: 'extend',
        status: 'todo',
      },

      {
        icon: '',
        link: 'filter',
        title: '过滤器',
        small: 'filter',
        desc: '',
        type: 'extend',
        status: 'todo',
      },
    ],
  },

  {
    title: '手势',
    small: 'Gesture',
    list: [
      {
        icon: '',
        link: 'swipe-action',
        title: '滑动操作',
        small: 'SwipeAction',
        desc: '',
        type: 'extend',
        status: 'todo',
      },
      {
        icon: '',
        link: 'refresh-control',
        title: '下拉刷新',
        small: 'RefreshControl',
        desc: '',
        type: 'extend',
        status: 'todo',
      },
    ],
  },

  // {
  //   title: '文档',
  //   small: 'Docs',
  //   list: [
  //     {
  //       icon: '',
  //       link: 'devdocs',
  //       title: '开发者文档',
  //       small: 'devdocs',
  //       desc: '',
  //       type: 'example',
  //       status: 'todo',
  //     },
  //   ],
  // },
]

export default navList

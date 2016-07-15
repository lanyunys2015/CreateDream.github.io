/* default dom id (particles-js) */
//particlesJS();

/* config dom id */
//particlesJS('dom-id');

/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
  particles: {
    //粒子背景颜色
    color: '#0f0',
    //粒子形状
    shape: 'circle', // "circle", "edge" or "triangle"
    //粒子透明度
    opacity: 0.3,
    size: 4,
    size_random: true,
    //粒子个数
    nb: 200,
    //连接线条设置
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#fff',
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      //粒子移动速度
      speed: 2
    }
  },
  interactivity: {
    enable: true,
    //鼠标与粒子间的连线距离
    mouse: {
      distance: 300
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .5
    },
    //鼠标点击事件
    events: {
      onclick: {
        enable: true,
        //增加减少
        mode: 'push', // "push" or "remove"
        nb: 4
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});

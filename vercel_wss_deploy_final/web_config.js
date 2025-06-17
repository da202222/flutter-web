// Web平台配置文件
// 处理Flutter Web插件兼容性问题

console.log('加载Web配置...');

// 禁用某些在Web上不支持的功能
window.flutterConfiguration = {
  canvasKitBaseUrl: null,
  debugShowCheckedModeBanner: false,
  
  // 网络配置
  networkSettings: {
    timeout: 30000,
    retryAttempts: 3,
    enableWebSocket: true
  },
  
  // 字体配置
  fontSettings: {
    fallbackFonts: [
      "Microsoft YaHei", "微软雅黑", 
      "PingFang SC", "苹方-简",
      "Arial", "sans-serif"
    ]
  }
};

// 处理MissingPluginException错误
window.addEventListener('flutter-first-frame', function() {
  console.log('Flutter应用已加载');
  
  // 隐藏加载画面
  const loading = document.getElementById('loading');
  if (loading) {
    loading.style.display = 'none';
  }
});

// 捕获插件异常
window.addEventListener('unhandledrejection', function(event) {
  if (event.reason && event.reason.toString().includes('MissingPluginException')) {
    console.warn('插件方法未实现（Web平台限制）:', event.reason);
    
    // 如果是allowOverflow错误，忽略它
    if (event.reason.toString().includes('allowOverflow')) {
      console.log('忽略allowOverflow错误（Web平台不支持）');
      event.preventDefault();
      return;
    }
    
    // 如果是其他插件错误，也忽略
    if (event.reason.toString().includes('channel-buffers')) {
      console.log('忽略channel-buffers错误（Web平台限制）');
      event.preventDefault();
      return;
    }
  }
});

// 网络连接测试
function testNetworkConnection() {
  console.log('测试网络连接...');
  
  fetch('https://httpbin.org/status/200', {
    method: 'GET',
    mode: 'no-cors',
    cache: 'no-cache'
  }).then(() => {
    console.log('网络连接正常');
  }).catch((error) => {
    console.log('网络连接测试失败:', error);
    if (window.showErrorBanner) {
      window.showErrorBanner('网络连接异常，某些功能可能受限');
    }
  });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  console.log('页面加载完成');
  testNetworkConnection();
  
  // 设置定时网络检查
  setInterval(testNetworkConnection, 30000); // 每30秒检查一次
});

console.log('Web配置加载完成'); 
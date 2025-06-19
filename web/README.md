# 皮带秤Web应用 - WSS安全连接版

## 🚀 部署信息

- **应用名称**: 皮带秤监控系统
- **部署平台**: Vercel
- **主域名**: https://www.2222503.xyz
- **MQTT协议**: WSS (WebSocket Secure) + WS (WebSocket)

## 🔗 访问链接

- **主应用**: https://www.2222503.xyz
- **MQTT测试页面**: https://www.2222503.xyz/vercel_mqtt_test.html

## 🔧 MQTT配置

### WSS连接 (HTTPS环境)
- **协议**: WSS
- **服务器**: 117.72.196.137
- **端口**: 8084
- **路径**: /mqtt
- **认证**: 匿名访问
- **SSL**: 自动处理

### WS连接 (HTTP环境备用)
- **协议**: WS
- **服务器**: 117.72.196.137
- **端口**: 8083
- **路径**: /mqtt
- **认证**: 匿名访问

## 📋 功能特性

- ✅ **智能协议选择**: 自动根据环境选择WSS或WS
- ✅ **WSS安全连接**: HTTPS环境下使用加密传输
- ✅ **匿名MQTT访问**: 无需用户名密码
- ✅ **Vercel优化**: 针对Vercel部署环境优化
- ✅ **实时数据通信**: 支持双向消息传输
- ✅ **响应式设计**: 适配各种设备
- ✅ **连接状态监控**: 实时显示连接状态

## 🌐 环境检测

应用会自动检测部署环境：
- **Vercel生产环境**: 自动使用WSS连接
- **本地开发环境**: 自动使用WS连接
- **其他HTTPS环境**: 自动使用WSS连接
- **其他HTTP环境**: 自动使用WS连接

## 🧪 测试步骤

1. **访问主应用**: https://www.2222503.xyz
   - 检查加载页面显示的连接状态
   - 确认协议选择正确 (HTTPS→WSS, HTTP→WS)

2. **访问测试页面**: https://www.2222503.xyz/vercel_mqtt_test.html
   - 测试WSS连接 (推荐)
   - 测试WS连接 (备用)
   - 发送测试消息验证双向通信

3. **检查浏览器控制台**
   - 确认无JavaScript错误
   - 查看MQTT连接日志
   - 验证环境检测结果

## 🔐 安全特性

- **SSL/TLS加密**: WSS连接自动加密所有数据传输
- **证书验证**: 浏览器自动验证服务器证书
- **安全头部**: 配置了安全相关的HTTP头部
- **匿名访问**: 无需存储敏感认证信息

## 📞 故障排除

### WSS连接失败
1. 检查MQTT服务器WSS端口8084是否开放
2. 验证SSL证书配置是否正确
3. 确认防火墙允许WSS连接
4. 查看浏览器控制台错误信息

### WS连接失败
1. 检查MQTT服务器WS端口8083是否开放
2. 确认Mosquitto服务运行正常
3. 验证网络连接

### 应用加载问题
1. 清除浏览器缓存
2. 检查网络连接
3. 查看浏览器控制台错误

## 📦 部署包内容

- `index.html` - Flutter Web主应用 (包含WSS支持)
- `main.dart.js` - Flutter编译后的JavaScript代码
- `vercel_mqtt_test.html` - MQTT连接测试页面
- `vercel.json` - Vercel部署配置
- `README.md` - 部署说明文档
- 其他资源文件 - CSS、图片、字体等

## 🔄 更新部署

1. 重新构建Flutter应用: `flutter build web`
2. 压缩web目录: `zip -r vercel_deploy.zip web/*`
3. 上传到Vercel并重新部署

## 📈 性能优化

- **CDN加速**: 静态资源通过Vercel CDN分发
- **缓存策略**: 合理配置资源缓存时间
- **压缩传输**: 自动启用Gzip压缩
- **预连接**: 页面加载时预测试MQTT连接

## 🎯 技术栈

- **前端**: Flutter Web
- **MQTT**: MQTT.js 4.3.7
- **部署**: Vercel
- **协议**: WSS/WS over WebSocket
- **服务器**: Mosquitto MQTT Broker

---

**最后更新**: 2024年6月17日
**版本**: WSS安全连接版 v1.0

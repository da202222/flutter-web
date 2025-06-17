# 皮带秤Web应用 - WSS安全连接版

## 🚀 部署信息

- **应用名称**: 皮带秤监控系统
- **部署平台**: Vercel
- **MQTT协议**: WSS (WebSocket Secure) + WS (WebSocket)

## 🔗 访问链接

- **主应用**: https://your-project.vercel.app
- **MQTT测试页面**: https://your-project.vercel.app/vercel_mqtt_test.html

## 🔧 MQTT配置

### WSS连接 (HTTPS环境)
- **协议**: WSS
- **服务器**: 117.72.196.137
- **端口**: 8084
- **路径**: /mqtt
- **认证**: 匿名访问

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
- ✅ **Vercel优化**: 基于成功部署版本优化
- ✅ **实时数据通信**: 支持双向消息传输
- ✅ **Flutter Web**: 完整的Flutter Web应用
- ✅ **无配置文件**: 避免Vercel配置冲突

## 🌐 环境检测

应用会自动检测部署环境：
- **Vercel生产环境**: 自动使用WSS连接
- **本地开发环境**: 自动使用WS连接
- **其他HTTPS环境**: 自动使用WSS连接
- **其他HTTP环境**: 自动使用WS连接

## 🧪 测试步骤

1. **访问主应用**
   - 检查Flutter应用正常加载
   - 确认协议选择正确 (HTTPS→WSS, HTTP→WS)

2. **访问测试页面**: `/vercel_mqtt_test.html`
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
- **匿名访问**: 无需存储敏感认证信息
- **无配置暴露**: 不包含可能冲突的vercel.json

## 📦 部署包内容

- `index.html` - Flutter Web主应用 (包含WSS支持)
- `main.dart.js` - Flutter编译后的JavaScript代码
- `flutter.js` - Flutter Web引擎
- `vercel_mqtt_test.html` - MQTT连接测试页面
- `README.md` - 部署说明文档
- `assets/` - Flutter应用资源
- `canvaskit/` - Flutter渲染引擎
- 其他资源文件 - 图标、字体等

## 🔄 部署方法

1. 压缩vercel_deploy目录: `zip -r vercel_wss_deploy.zip vercel_deploy/*`
2. 上传到Vercel
3. 部署完成

## 🎯 技术栈

- **前端**: Flutter Web
- **MQTT**: MQTT.js 4.3.7
- **部署**: Vercel (无配置文件)
- **协议**: WSS/WS over WebSocket
- **服务器**: Mosquitto MQTT Broker

---

**版本**: WSS安全连接版 v3.0 (基于成功部署版本)

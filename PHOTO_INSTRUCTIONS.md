# 双威打扪白衣观音庙网站相册管理指南
# Temple Website Photo Management Guide

## 概述 Overview
网站使用 Google Photos 来管理和显示照片。所有相册数据统一存储在 `js/album-data.js` 文件中。
The website uses Google Photos to manage and display photos. All album data is centrally stored in `js/album-data.js`.

### 重要说明 Important Notes:
- 首页会自动显示最新的 3 个活动相册封面
- 相册页面只显示有实际照片的活动
- 活动按日期自动排序（最新的在前）
- 封面图片从 PublicAlbum 代码中自动提取

---

## 1. 首页精选照片 (Homepage Highlights)

**自动更新！** 首页现在会自动显示相册页面中最新的 3 个活动。
**Automatic!** The homepage now automatically shows the 3 most recent events from the album page.

无需手动设置 - 只要在相册页面添加活动，首页就会自动更新。
No manual setup needed - just add events to the album page and the homepage updates automatically.

---

## 2. 活动相册 (Event Albums)

### 简化方案：直接链接到 Google Photos / Simplified: Direct Link to Google Photos

由于嵌入大尺寸照片可能导致显示问题，我们现在使用更简单的方案：点击活动卡片直接在新标签页打开 Google Photos 相册。
Due to display issues with large photos, we now use a simpler approach: clicking event cards opens the Google Photos album in a new tab.

#### 步骤 Steps:
1. **创建 Google Photos 相册**
   - 打开 Google Photos
   - 创建新相册并添加照片
   - 点击分享按钮获取链接（例如：`https://photos.app.goo.gl/YOUR_LINK`）

2. **获取封面图片**
   - 从相册中选择一张作为封面
   - 右键点击照片 → 复制图片地址
   - 或使用 Google Drive 上传封面图片

3. **更新网站**
   - 打开 `js/album-data.js` 文件
   - 添加或更新活动信息

#### 示例 Example:
```javascript
{
    id: '1',
    name: '2025年新春祈福大会',
    date: new Date('2025-02-10'),
    googlePhotosLink: 'https://photos.app.goo.gl/YOUR_ALBUM_LINK',
    coverImage: 'https://lh3.googleusercontent.com/YOUR_COVER_IMAGE_URL'
}
```

---

## 3. 添加新活动 (Add New Event)

在 `js/album-data.js` 文件的 `templeEventData` 数组中添加新项目：

```javascript
{
    id: '5', // 递增的 ID
    name: '活动名称',
    date: new Date('2025-MM-DD'), // 日期格式
    googlePhotosLink: 'https://photos.app.goo.gl/YOUR_LINK', // Google Photos 分享链接
    coverImage: 'https://YOUR_COVER_IMAGE_URL' // 封面图片 URL
}
```

**记住**: 只有填写了 `googlePhotosLink` 的活动才会显示在网站上！
**Remember**: Only events with `googlePhotosLink` filled in will appear on the website!

---

## 注意事项 Important Notes

1. **封面图片**: 建议使用 400x300 像素左右的图片作为封面，加载更快
2. **Google Photos 设置**: 确保相册设置为"任何人都可以查看"
3. **更新相册**: 在 Google Photos 中添加新照片后，网站访客会自动看到更新

## 优势 Advantages

这种方案的好处：
- **简单易用**: 无需复杂的嵌入代码
- **无限制**: 不受第三方服务限制
- **原生体验**: 访客可以享受 Google Photos 的完整功能
- **自动更新**: 相册内容实时同步，无需更新网站代码

---

## 常见问题 FAQ

**Q: 如何获取封面图片 URL？**
A: 
- 方法1：在 Google Photos 中右键点击照片 → "复制图片地址"
- 方法2：使用 Google Drive 上传图片并获取公开链接

**Q: 相册链接无法打开？**
A: 确保 Google Photos 相册设置为"获得链接的任何人都可以查看"

**Q: 可以添加视频吗？**
A: 可以！Google Photos 支持照片和视频，访客可以在相册中查看所有内容

---

## 技术支持 Technical Support

如需帮助，请联系网站开发人员。
For assistance, please contact the website developer.
// 函数用于创建新的弹幕
function createDanmaku(text) {
    // Create a new danmaku element
    var danmaku = document.createElement("div");
    danmaku.classList.add("danmaku");
    danmaku.innerText = text;

    // 设置danmaku位置到容器的右边缘
    danmaku.style.right = "0";

    // 设置danmaku顶部位置为0到容器高度之间的随机值
    var container = document.querySelector(".danmaku-container");
    danmaku.style.top = Math.floor(Math.random() * container.offsetHeight) + "px";

    // 添加danmaku到容器
    container.appendChild(danmaku);

    // 将danmaku动画到容器的左边缘
    var animationDuration = 10000; // 10 秒
    var danmakuWidth = danmaku.offsetWidth;
    var containerWidth = container.offsetWidth;
    var distance = containerWidth + danmakuWidth;
    var duration = (distance / containerWidth) * animationDuration;
    danmaku.style.transition = "transform " + duration + "ms linear";
    danmaku.style.transform = "translateX(-" + distance + "px)";

    // 动画完成后从容器中移除弹幕
    setTimeout(function() {
        danmaku.remove();
    }, duration);
}

// 函数生成随机弹幕文本
function generateDanmakuText() {
    var texts = ["古典优雅，历史与现代的完美融合", "感受海派文化，体验欧式风情", "美丽的花园住宅，别致的武康庭", "历史悠久，文化底蕴深厚", "静谧的庭院，舒适的休闲空间", "上海的文创名片，品味慢生活", "风情万种，犹如小欧洲","红砖老楼，承载着旧上海的回忆","艺术与生活的完美结合","历史与现代共存，感受时代变迁","闹中取静，别有洞天","雕塑艺术品点缀，充满艺术气息","悠久的建筑，讲述着过去的故事","融合多元文化，展现独特魅力","优雅的生活氛围，身心愉悦","品味独特，环境宜人"];
    var index = Math.floor(Math.random() * texts.length);
    return texts[index];
}

// 每2秒生成一个新的弹幕
setInterval(function() {
    var text = generateDanmakuText();
    createDanmaku(text);
}, 1000);
// 初始化地图
let map;
let markers = [];
let polylines = [];

function initMap() {
    // 创建地图实例
    map = new AMap.Map('map', {
        // viewMode: '3D',
        zoom: 16,
        // pitch: 60,
        center: [104.114129, 37.550339],
        // mapStyle: 'amap://styles/normal'
        // mapStyle: 'amap://styles/fresh'
        // mapStyle: 'amap://styles/dark'
        mapStyle: getMapStyle(), // 根据当前时间选择地图样式
    });
    

    // 设置每分钟检查一次当前时间并更新地图样式
    setInterval(() => {
        const currentStyle = map.getMapStyle();
        const desiredStyle = getMapStyle();

        if (currentStyle !== desiredStyle) {
            map.setMapStyle(desiredStyle);
        }
    }, 60000); // 每60000毫秒(即1分钟)检查一次

    // 你的坐标点（闭合区域）
    
    // 创建第一个多边形区域
    const polygon1 = new AMap.Polygon({
        path: areaCoords1,
        fillColor: 'rgba(65, 154, 255, 0.2)', // 半透明蓝色
        strokeColor: '#0786ff', // 边框颜色
        strokeWeight: 2.5, // 线宽
        fillOpacity: 0.1, // 透明度
        strokeStyle: 'solid', // 线型
        strokeDasharray: [10, 5] // 虚线样式
    });

    // 创建第二个多边形区域
    const polygon2 = new AMap.Polygon({
        path: areaCoords2,
        fillColor: 'rgba(65, 255, 78, 0.2)', // 半透明橙色
        strokeColor: '#00544a', // 边框颜色
        strokeWeight: 2.5, // 线宽
        fillOpacity: 0.1, // 透明度
        strokeStyle: 'solid', // 线型
        strokeDasharray: [10, 5] // 虚线样式
    });
    // const polygon3 = new AMap.Polygon({
    //     path: areaCoords3,
    //     fillColor: 'rgba(65, 255, 78, 0.2)', // 半透明橙色
    //     strokeColor: '#00544a', // 边框颜色
    //     strokeWeight: 2.5, // 线宽
    //     fillOpacity: 0.1, // 透明度
    //     strokeStyle: 'solid', // 线型
    //     strokeDasharray: [10, 5] // 虚线样式
    // });
    const polygon4 = new AMap.Polygon({
        path: areaCoords4,
        fillColor: 'rgba(65, 255, 78, 0.2)', // 半透明橙色
        strokeColor: '#00544a', // 边框颜色
        strokeWeight: 2.5, // 线宽
        fillOpacity: 0.1, // 透明度
        strokeStyle: 'solid', // 线型
        strokeDasharray: [10, 5] // 虚线样式
    });
    const polygon5 = new AMap.Polygon({
        path: areaCoords5,
        fillColor: 'rgba(65, 217, 255, 0.2)', // 半透明
        strokeColor: '#087a97', // 边框颜色
        strokeWeight: 2.5, // 线宽
        fillOpacity: 0.1, // 透明度
        strokeStyle: 'solid', // 线型
        strokeDasharray: [10, 5] // 虚线样式
    });
    const polygon6 = new AMap.Polygon({
        path: areaCoords6,
        fillColor: 'rgba(65, 255, 78, 0.2)', // 半透明橙色
        strokeColor: '#00544a', // 边框颜色
        strokeWeight: 2.5, // 线宽
        fillOpacity: 0.1, // 透明度
        strokeStyle: 'solid', // 线型
        strokeDasharray: [10, 5] // 虚线样式
    });
    const polygon7 = new AMap.Polygon({
        path: areaCoords7,
        fillColor: 'rgba(65, 255, 78, 0.2)', // 半透明橙色
        strokeColor: '#00544a', // 边框颜色
        strokeWeight: 2.5, // 线宽
        fillOpacity: 0.1, // 透明度
        strokeStyle: 'solid', // 线型
        strokeDasharray: [10, 5] // 虚线样式
    });
    const polygon8 = new AMap.Polygon({
        path: areaCoords8,
        fillColor: 'rgba(65, 255, 78, 0.2)', // 半透明橙色
        strokeColor: '#00544a', // 边框颜色
        strokeWeight: 2.5, // 线宽
        fillOpacity: 0.1, // 透明度
        strokeStyle: 'solid', // 线型
        strokeDasharray: [10, 5] // 虚线样式
    });
    const polygon9 = new AMap.Polygon({
        path: areaCoords9,
        fillColor: 'rgba(65, 255, 78, 0.2)', // 半透明橙色
        strokeColor: '#00544a', // 边框颜色
        strokeWeight: 2.5, // 线宽
        fillOpacity: 0.1, // 透明度
        strokeStyle: 'solid', // 线型
        strokeDasharray: [10, 5] // 虚线样式
    });
    // 将多边形添加到地图
    map.add([polygon1,polygon2,polygon4,polygon5,polygon6,polygon7,polygon8,polygon9]);

    // 调整视野适应区域
    map.setFitView([polygon8]);
    // 添加位置标记
    locations.forEach(loc => {
        // 创建自定义图标
        const icon = new AMap.Icon({
            image: getMarkerIcon(loc.type),
            size: new AMap.Size(32, 32),
            imageSize: new AMap.Size(32, 32)
        });

        // 创建标记点
        const marker = new AMap.Marker({
            position: loc.coord,
            icon: icon,
            title: loc.name,
            offset: new AMap.Pixel(-16, -32)
        });

        // 创建信息窗口
        const infoWindow = new AMap.InfoWindow({
            content: `
                <div style="
                    min-width: 240px;
                    padding: 16px;
                    // background: rgba(0, 0, 0, 0.03);
                ">
                    <h3 style="
                        margin: 0 0 12px;
                        font-size: 18px;
                        color: #2d3748;
                        font-weight: 600;
                    ">${loc.name}</h3>
                    <p style="
                        margin: 0 0 16px;
                        font-size: 14px;
                        color: #4a5568;
                        line-height: 1.5;
                    ">${loc.description}</p>
                    <div style="
                        display: inline-block;
                        padding: 4px 12px;
                        border-radius: 20px;
                        background: ${getMarkerColor(loc.type)};
                        color: white;
                        font-size: 12px;
                        font-weight: 500;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    ">
                        ${getTypeText(loc.type)}
                    </div>
                </div>
            `,
            offset: new AMap.Pixel(0, -30)
        });

        // 添加点击事件
        marker.on('click', () => {
            infoWindow.open(map, marker.getPosition());
            showRoute(loc.name);
        });

        // 添加点击事件
        marker.on('click', () => {
            showRoute(loc.name);
        });

        markers.push(marker);
    });

    // 添加所有标记到地图
    map.add(markers);
}

// 获取标记图标
function getMarkerIcon(type) {
    const icons = {
        past: './img/past.png',
        current: './img/current.png',
        future: './img/future.png',
        work:'./img/work.png',
        travel:'./img/travel.png',
        sgcc:'./img/sgcc.png',
        chinagov:'./img/gov-china.png',
    };
    return icons[type] || './img/past.png';
}

// 根据类型获取标记颜色
function getMarkerColor(type) {
    switch(type) {
        case 'past': return '#00b050';
        case 'current': return '#0077ed';
        case 'future': return '#ffc000';
        case 'work': return '#ef84c8';
        case 'travel': return '#4998f7';
        case 'sgcc': return '#00544a';
        case 'chinagov': return '#ed2a24';
        default: return '#999';
    }
}

// 获取类型文本
function getTypeText(type) {
    switch(type) {
        case 'past': return '生活工作学习过';
        case 'current': return '当前所在地';
        case 'future': return '计划前往';
        case 'work': return '工作地点';
        case 'travel': return '观光过';
        case 'sgcc': return '国家电网公司';
        case 'chinagov': return '政府机关';
        default: return '未知';
    }
}

// 显示路线
function showRoute(toCity) {
    // 清除之前的路线
    if (polylines.length > 0) {
        map.remove(polylines);
        polylines = [];
    }

    const route = routes.find(r => r.to === toCity);
    if (!route) return;

    // 创建动态路线
    const polyline = new AMap.Polyline({
        path: route.path,
        strokeColor: '#30d158',
        strokeWeight: 4,
        strokeStyle: 'solid',
        lineJoin: 'round',
        showDir: true,
        isOutline: true,
        outlineColor: '#ffffff',
        borderWeight: 1,
        lineCap: 'round'
    });

    // 添加动画效果
    const passedPolyline = new AMap.Polyline({
        path: route.path,
        strokeColor: '#30d158',
        strokeWeight: 5,
        strokeStyle: 'solid',
        lineDash: [15, 15],
        lineJoin: 'round',
        isOutline: true,
        outlineColor: '#ffffff',
        borderWeight: 1,
        lineCap: 'round'
    });

    // 创建渐变背景线
    const gradientPolyline = new AMap.Polyline({
        path: route.path,
        strokeColor: '#78eb7a',
        strokeWeight: 6,
        strokeStyle: 'solid',
        lineJoin: 'round'
    });

    let step = 0;
    const animate = () => {
        step += 0.35; // 减慢动画速度
        if (step >= route.path.length) {
            step = 0;
        }
        
        // 计算渐变路径
        const currentPath = route.path.slice(0, Math.ceil(step));
        passedPolyline.setPath(currentPath);
        
        // 添加流动效果
        const dashOffset = -step * 2;
        passedPolyline.setOptions({
            lineDash: [15, 15],
            lineDashOffset: dashOffset
        });
        
        requestAnimationFrame(animate);
    };

    // 添加渐变背景线
    polylines.push(gradientPolyline);

    // 添加路线和动画
    polylines.push(polyline, passedPolyline);
    map.add(polylines);
    animate();

    polylines.push(polyline);
    map.add(polylines);

    // 调整地图视野
    map.setFitView();
}

// 根据当前时间返回合适的地图样式
function getMapStyle() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    // 判断当前时间是否在6:30之后且18:30之前
    if ((hour > 6 || (hour === 6 && minute >= 30)) && (hour < 18 || (hour === 18 && minute < 30))) {
        return 'amap://styles/fresh';
    } else {
        return 'amap://styles/dark';
    }
}
// 设置每分钟检查一次当前时间并更新地图样式
setInterval(() => {
    const currentStyle = map.getMapStyle();
    const desiredStyle = getMapStyle();
    if (currentStyle !== desiredStyle) {
        map.setMapStyle(desiredStyle);
    }
}, 60000);


// 初始化
window.onload = initMap;


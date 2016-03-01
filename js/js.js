  //2.获取元素
    function g(selector) {
        var method = selector.substr(0, 1) == '.' ? 'getElementsByClassName' : 'getElementById';
        return document[method](selector.substr(1));
        console.log('gg')
    }
    //4.随机生成一个值.支持取值范围 random([min,max])
    function random(range) {
        var max = Math.max(range[0], range[1]);
        var min = Math.min(range[0], range[1]);
        var diff = Math.random();
        var val = Math.floor(diff * (max - min + 1) + min);
        return val;
    }
    //3.动态添加图片。replace()替换掉模版关键字符串来实现
    var data = data;

    function addPhoto() {
        var temp = g('.wrap')[0].innerHTML;
        var html = [];
        var nav = [];
        for (s in data) {
            var _html = temp
                .replace('{{index}}', data[s].img)
                .replace('{{img}}', data[s].img)
                .replace('{{caption}}', data[s].caption)
                .replace('{{desc}}', data[s].desc)
            html.push(_html);
            nav.push('<span class="i" id=' + s + ' onclick = turn(g(\'#photo_' + s + '\'))>&nbsp;</span>');
        }
        html.push('<div class="nav">' + nav.join('') + '</div>');
        g('.wrap')[0].innerHTML = html.join('');

        rsort(random([0,data.length]));
    }
    addPhoto();
    //1.切换翻转class.  正则表达式的test（）。  
    function turn(elem) {
        var cls = elem.className;
        var n = elem.id.split('_')[1];
        if (!/photo_center/.test(cls)) {
            return rsort(n)
        }
        if (/photo_font/.test(cls)) {
            cls = cls.replace(/photo_font/, 'photo_back');
            g('#' + n).className += ' i_back ';
        } else {
            cls = cls.replace(/photo_back/, 'photo_font');
            g('#' + n).className = g('#' + n).className.replace(/\s*i_back\s*/, ' ');
        }
        elem.className = cls;


    }
    //5.添加点击翻转事件.可以直接内嵌在html中.这里要考虑到for循环 bug
    function clickTurn() {
        var photo = g('.photo');

        for (var i = 0; i < photo.length; i++) {
            (function(_i) {
                photo[_i].addEventListener('click', function() {
                    turn(photo[_i]);
                }, false);
            })(i);

        }
    };
    clickTurn();
    //6.排列海报
    function rsort(n) {
        var _photo = g('.photo');
        var photos = [];
        for (var s = 0; s < _photo.length; s++) {
            _photo[s].className = _photo[s].className.replace(/\s*photo_center\s*/, ' ');
            photos.push(_photo[s]);
        }
        for (var s = 0; s < _photo.length; s++) {
            _photo[s].className = _photo[s].className.replace(/\s*photo_back\s*/, ' photo_font');
        }
        var photoCenter = g('#photo_' + n);
        photoCenter.className += ' photo_center';
        //按钮控制,按钮i_current重置
        var icon = g('.i');
        for (var z = 0; z < icon.length; z++) {
            icon[z].className = icon[z].className.replace(/\s*i_current\s*/, ' ')
        }
        for (var z = 0; z < icon.length; z++) {
            icon[z].className = icon[z].className.replace(/\s*i_back\s*/, ' ')
        }

        var iCurrent = g('#' + n);
        iCurrent.className += ' i_current ';

        photoCenter = photos.splice(n, 1)[0];
        //随机赋予left top值
        var photo_left = photos.splice(0, Math.ceil(photos.length / 2));
        var photo_right = photos;
        for (s in photo_left) {
            photo_left[s].style.left = random(Range().left.x) + 'px';
            photo_left[s].style.top = random(Range().left.y) + 'px';
            photo_left[s].style['transform'] = photo_left[s].style['-webkit-transform'] = "rotate(" + random([-150, 150]) + 'deg) scale(1)';
        }
        for (s in photo_right) {
            photo_right[s].style.left = random(Range().right.x) + 'px';
            photo_right[s].style.top = random(Range().right.y) + 'px';
            photo_right[s].style['transform'] = photo_right[s].style['-webkit-transform'] = "rotate(" + random([-150, 150]) + 'deg) scale(1)';
        }
        photoCenter.style.left = '';
        photoCenter.style.top = '';
        photoCenter.style['transform'] = photoCenter.style['-webkit-transform'] = 'rotate(360deg) scale(1.5)';
    }
    //随机输出具有范围的x,y值
    function Range() {
        var range = {
            left: {
                x: [],
                y: []
            },
            right: {
                x: [],
                y: []
            }
        }
        var _wrapWidth = g('.wrap')[0].clientWidth;
        var _wrapHeight = g('.wrap')[0].clientHeight;
        var _photoWidth = g('.photo')[0].clientWidth;
        var _photoHeight = g('.photo')[0].clientHeight;
        var _xleftMin = 0 - _photoWidth / 2;
        var _xleftMax = _wrapWidth / 2 - _photoWidth / 2;
        var _xrightMin = _wrapWidth / 2;
        var _xrightMax = _wrapWidth + _photoWidth / 2;
        var _yMin = 0 - _photoHeight / 2;
        var _yMax = _wrapHeight;
        range.left.x = [_xleftMin, _xleftMax];
        range.left.y = [_yMin, _yMax];
        range.right.x = [_xrightMin, _xrightMax];
        range.right.y = [_yMin, _yMax];

        return range;
    };
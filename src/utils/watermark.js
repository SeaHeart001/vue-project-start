
var sysName = 'VUE-PROJECT-START';
var author = 'haohai';

var waterMark = document.createElement('canvas');
waterMark.width = '300';
waterMark.height = '200';

var ctx = waterMark.getContext('2d');
ctx.font = 'bold 18px 宋体';
ctx.fillStyle = 'rgba(153, 153, 153, 0.3)';
// ctx.translate(150, 150);
ctx.rotate(Math.PI/10);
ctx.fillText(sysName, 50, 0);
ctx.fillText(author, 50, 30);
ctx.stroke();

var bg = waterMark.toDataURL('image/png');
var bgDiv = document.createElement('div');
bgDiv.style.backgroundImage = `url("${bg}")`;
bgDiv.style.backgroundPosition = '0 0, 150px 150px';
bgDiv.style.position = 'absolute';
bgDiv.style.width = '100vw';
bgDiv.style.height = '100vh';
bgDiv.style.zIndex = '99999';
bgDiv.style.top = '0';
bgDiv.style.left = '0';
bgDiv.style.pointerEvents = 'none';

function makeWatermark(el){
    el.appendChild(bgDiv);
};

export default {
    install (Vue, option) {

        Vue.directive('watermark',  (el) => {
                makeWatermark(el)
            }
        )
    }
}


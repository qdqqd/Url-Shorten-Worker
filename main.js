let res
  function shorturl() {
    if(document.querySelector("#text").value==""){
        alert("请输入链接!")
        return
    }
 
    document.getElementById("searchbtn").disabled=true;
	document.getElementById("searchbtn").innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>正在缩短...';
    fetch(window.location.pathname, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: document.querySelector("#text").value,key: document.querySelector("#key").value,hash: md5(document.querySelector("#text").value+document.querySelector("#password").value) })
    }).then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    res = myJson;
    document.getElementById("searchbtn").disabled=false;
	document.getElementById("searchbtn").innerHTML='缩短';
    if(res.key!=="")
    document.getElementById("result").innerHTML=window.location.origin+res.key;
    $('#exampleModal').modal('show')
  }).catch(function(err){alert("生成失败,请重试!");
  console.log(err);
  document.getElementById("searchbtn").disabled=false;
	document.getElementById("searchbtn").innerHTML='缩短';})
  }
  function copyurl (id, attr) {
    let target = null;

    if (attr) {
        target = document.createElement('div');
        target.id = 'tempTarget';
        target.style.opacity = '0';
        if (id) {
            let curNode = document.querySelector('#' + id);
            target.innerText = curNode[attr];
        } else {
            target.innerText = attr;
        }
        document.body.appendChild(target);
    } else {
        target = document.querySelector('#' + id);
    }

    try {
        let range = document.createRange();
        range.selectNode(target);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        console.log('复制成功!')
    } catch (e) {
        console.log('复制失败!')
    }

    if (attr) {
        // remove temp target
        target.parentElement.removeChild(target);
    }
  }
  $(function () {
    $('[data-toggle="popover"]').popover()
  })
console.log("\n %c 暗号:qdqqd %c by 柯乐 | qdqqd.com ","color:#444;background:#eee;padding:5px 0;","color:#F8F8FF;background:#F4A7B9;padding:5px 0;");

document.addEventListener('DOMContentLoaded', function() {
    window.onclick = function(event) {
        var heart = document.createElement("b");
        heart.onselectstart = new Function('event.returnValue=false');
        document.body.appendChild(heart).innerHTML = "❤";
        heart.style.cssText = "position: fixed;left:-100%;";
        var f = 16, // 字体大小
            x = event.clientX - f / 2, // 横坐标
            y = event.clientY - f, // 纵坐标
            c = randomColor(), // 随机颜色
            a = 1, // 透明度
            s = 1.2; // 放大缩小
        var timer = setInterval(function() {
            if (a <= 0) {
                document.body.removeChild(heart);
                clearInterval(timer);
            } else {
                heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" + c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" + s + ");";
                y--;
                a -= 0.016;
                s += 0.002;
            }
        }, 12)
    }

    // 随机颜色
    function randomColor() {
        return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";
    }
});

// ==UserScript==
// @name         飞娥视频解析
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  你只要打开你需要解析VIP视频网站（如腾迅或者爱奇艺视频网站）再点击播放即可
// @author       xiaojie
// @match               *://vip.1905.com/*
// @match               *://*.acfun.cn/*
// @match               *://*.iqiyi.com/*
// @match               *://*.bilibili.com/*
// @match               *://fun.tv/*
// @match               *://*.fun.tv/*
// @match               *://*.wasu.cn/*lay/*
// @match               *://*.wasu.cn/wap/*lay/*
// @match               *://*.le.com/*
// @match               *://*.mgtv.com/*
// @match               *://*.miguvideo.com/*
// @match               *://*.pptv.com/*
// @match               *://*.tv.sohu.com/v*
// @match               *://film.sohu.com/album/*
// @match               *://v.qq.com/x/*
// @match               *://v.qq.com/*/p/topic/*/*.html
// @match               *://m.v.qq.com/*
// @match               *://3g.v.qq.com/*
// @match               *://*.tudou.com/*
// @match               *://*.ixigua.com/*
// @match               *://*.youku.com/*
// @match               https://v.qq.com/
// @match               http://119.3.85.132/
// @icon         data:image/gif;base64,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
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    //这里获取腾讯视频要VIP视频弹框
    const get_vip_div = document.getElementsByClassName('panel-overlay');
    //获取视频顶部div
    const get_top_div_shiping = document.getElementsByClassName('container-main__left');
    //获取div顶部用于写入UL
    const get_top_div = document.getElementsByClassName('container-main__wrapper')[0];
    var element = null;
    //tx要删除的视频div元素
    const get_tx_div_shiping = document.getElementsByClassName('player__container');
    //爱奇艺视频顶部div
    const get_qy_div_top = document.getElementsByClassName('qy-aura3')[0];
    //iqp-player爱奇艺要删除的元素
    const get_qy_div_shiping = document.getElementsByClassName('iqp-player');
    //哔哩哔哩视频顶部div
    const get_bil_div_top = document.getElementsByClassName('main-container')[0];
    //const get_bil_div_top = document.getElementById('app');
    //哔哩哔哩要删除的元素stardust-player report-wrap-module player-container
    const clear_bil_div_shiping = document.getElementsByClassName('stardust-player');

    //iframe
    let get_iframe_el = null;
    let _set_iframe = null;
    //jk
    let div_jk_geng = null;
    //jk_text
    let jk_text = null;
    //array count
    let s = 0;
    //url
    let baseurl = location.href;
    console.log(baseurl);
    //jk_play_a
    let jk_play_a = null;
    //_div_top
    let _div_top = null;
    //zuoyou
    let wei = null;
    //yingcang
    let yingcang_ = null;

    /*
    视频解析网址
    */
     const jks = [
          {name_jk:'默认',src:'https://jx.xmflv.com/?url='},
          {name_jk:'解析1',src:'https://jx.bozrc.com:4433/player/?url='},
          {name_jk:'解析2',src:'https://okjx.cc/?url='},
          {name_jk:'解析3',src:'https://jx.xmflv.com/?url='}
          ];
     //jk
     let jk_quan_jk = jks[0].src;
     //get iframe 元素
    //let get_iframe_el = document.getElementById('iframe_el');
    //创建元素
    function create_el(fu,el,content){
        this.fu = fu;
        this.el = el;
        this.content = content;
        this.el_ = document.createElement(this.el);
        this.fu.appendChild(this.el_);
            
    }
        create_el.prototype.zujian = function (){
            this.el_.style = 'height:210px;width:150px;box-sizing:border-box;border:4px solid #cccc33;z-index:9999;position:fixed;top:80px;right:6px;background-color:#ffffff;overflow:hidden;display:block';
            this.el_.setAttribute('id','ell');
            this.el_.setAttribute('class','ell_div_el');
            this.el_.innerHTML = '<div style="font-size:10px;text-align:center" id="dong">飞娥视频解析</div><hr><div style="postion:relative;padding:5px;width:100%;border:1px solid #000000;background-color:#ffccff;text-align:center;border-left:none;border-right:none" id="jk_play_a" >点击播放</div><div style="padding:5px;width:50%;border:1px solid #000000;background-color:#ffccff;text-align:center;border-left:none;border-right:none" id="div_jk_geng" >更换接口:</div><p id="jk_text" style="position:absolute;top:53px;width:50%;padding:5px;right:-17px">默认</p><div style="padding:5px;width:142px;border:1px solid #000000;background-color:#ffccff;text-align:center;border-right:none;border-left:none" id="wei">隐藏</div><div style="padding:5px;width:100%;border:1px solid #000000;background-color:#ffccff;text-align:center;border-right:none;border-left:none">loading</div><div style="padding:5px;width:100%;border:1px solid #000000;background-color:#ffccff;text-align:center;border-right:none;border-left:none">loading</div><div style="font-size:1px;text-align:center;botttom:0px">verion-1.1.0</div>';
            _div_top = this.el_;
        }

    //删除元素
    function clear_div(fu,zi,el){
        this.fu = fu;
        this.zi = zi;
        this.el = el;
        this.fu.parentNode.removeChild(this.fu);
    }

    //iframe窗口创建
    create_el.prototype.createIframe = function (){
        this.el_.style = 'z-index:9999;height:500px;width:800px;border:2px solid red;position:absolute;top:100px;left:160px;background-color:#f1f1f1f1';
        this.el_.style.display = 'none';
        this.el_.setAttribute('id','iframe_el');
        this.el_.setAttribute("frameborder","0");
        this.el_.setAttribute("allowtransparency",true);
        this.el_.setAttribute("scrolling","no");
        this.el_.setAttribute("allowfullscreen",true);
        this.el_.setAttribute("webkitallowfullscreen",true);
        this.el_.setAttribute("mozallowfullscreen",true);
        this.el_.setAttribute("height","100%");
        this.el_.setAttribute("width","100%");
        ///console.log(this.el_);
        _set_iframe = this.el_;
    }


    //let el = document.createElement('div');
   // let cons = get_top_div.appendChild(el);
   // console.log(cons);
//div_create_el('get_top_div','div','ontent');
      if(get_top_div){//腾旭视频
          //alert('get_top_div');
          let create_el_new = new create_el(document.body,'div','con');
          create_el_new.zujian();//get_vip_div.parentNode.removeChild(get_vip_div);
          //_div_top.style = 'height:210px';
          let create_el_iframe = new create_el(document.body,'iframe','con');
          create_el_iframe.createIframe();
          wei = document.getElementById('wei');
         /// let create_el_iframe = new create_el(document.body,'iframe','con');
         // create_el_iframe.createIframe();
          //赋值get=》get_iframe_el
         // get_iframe_el = document.getElementById('iframe_el');
          //让他全局变量
          div_jk_geng = document.getElementById('div_jk_geng');
          //jk_text 解析
          jk_text = document.getElementById('jk_text');
          jk_play_a = document.getElementById('jk_play_a');
          //console.log(jk_text);

      }else if(get_qy_div_top){//爱奇艺
          let create_el_new = new create_el(document.body,'div','con');
          create_el_new.zujian();

          let create_el_iframe = new create_el(document.body,'iframe','con');
          create_el_iframe.createIframe();

           wei = document.getElementById('wei');
          //让他全局变量
          div_jk_geng = document.getElementById('div_jk_geng');
          //jk_text 解析
          jk_text = document.getElementById('jk_text');
          jk_play_a = document.getElementById('jk_play_a');

          //let create_el_iframe = new create_el(document.body,'iframe','con');
         // create_el_iframe.createIframe();
          //let get_iframe_el = document.getElementById('iframe_el');
         // console.log(get_iframe_el);
          //let clear_div_el = new clear_div(get_qy_div_shiping[0],'zi','con');
      }else if(get_bil_div_top){//哔哩哔哩
          let create_el_new = new create_el(document.body,'div','con');
          create_el_new.zujian();

          let create_el_iframe = new create_el(document.body,'iframe','con');
          create_el_iframe.createIframe();
           wei = document.getElementById('wei');
          //让他全局变量
          div_jk_geng = document.getElementById('div_jk_geng');
          //jk_text 解析
          jk_text = document.getElementById('jk_text');
          jk_play_a = document.getElementById('jk_play_a');
          //let create_el_iframe = new create_el(document.body,'iframe','con');
          //create_el_iframe.createIframe();
          //let get_iframe_el = document.getElementById('iframe_el');
          //console.log(get_iframe_el);
          //let clear_div_el = new clear_div(clear_bil_div_shiping[0],'zi','el');
          //clear_bil_div_shiping[0].parentNode.removeChild(clear_bil_div_shiping[0]);

      }

  //播放视频
    function play_shiping(){
        if(get_top_div){
        //第二次删除不存在元素报错
            try{
                new clear_div(get_tx_div_shiping[0],'zi','el');
                new clear_div(get_vip_div[0],'zi','el');
            }catch(err){
                console.log(err);
            }
        }else if(get_qy_div_top){//爱奇艺
            try{
                new clear_div(get_qy_div_shiping[0],'zi','con');
            }catch(err){
                console.log(err);
            }
        }else if(get_bil_div_top){
            try{
                new clear_div(clear_bil_div_shiping[0],'zi','el');
            }catch(err){
                console.log(err);
            }
        }


          _set_iframe.style.display = 'block';

          console.log(_set_iframe);

          //赋值get=》get_iframe_el
          get_iframe_el = document.getElementById('iframe_el');

          //jk_text 解析
          jk_text = document.getElementById('jk_text');

          console.log(jk_text);
        get_iframe_el.src = jk_quan_jk + baseurl;
        console.log("okokokokokokokokokokokokokokokok",jk_quan_jk);
    }
    //更换接口
    function genghuanjie(){
        //jks.forEach(function(res){
            //jk_text.innerText = res.name_jk[0];
            //console.log(res);
        //})
       // try{
         //   new clear_div(_set_iframe,'zi','el');

      //  }catch(err){
         //   console.log(err);
        //}

        s++;
        if(s == jks.length){
            s = 0;

        }
        jk_text.innerText = jks[s].name_jk;
        jk_quan_jk = jks[s].src;
        console.log(jk_quan_jk);
        var d = jks[s].name_jk;
        //alert(jks[s].name_jk);
        confirm(`当前接口是(已更换):${d}`);

    }
    function ok(callback,time){
        var _jieliu = true;
        return function(){
            if(_jieliu){
                _jieliu = false;
                callback();
                setTimeout(()=>{
                    _jieliu = true;
                },time)
            }
        }
    }
    //隐藏
        yingcang_ = document.createElement('div');
        document.body.appendChild(yingcang_);
        yingcang_.style = 'padding-right:3px;margin:0;border-radius:10px;font-size:5px;text-align:center;color:#f0f0f0f0;z-index:9999;height:100px;width:15px;position:fixed;top:100px;background-color:red;right:2px;display:none;writing-mode: vertical-lr';
        yingcang_.innerHTML = '<b>我在这</b>';
        function weii_(){
            _div_top.style.display = 'none';
            yingcang_.style.display = 'block';

        }

    try{
        yingcang_.addEventListener('mousemove',function(event){
            _div_top.style.display = 'block';
            yingcang_.style.display = 'none';

        })
    }catch(err){
        console.log(err);
    }

    //本地存储
    localStorage.setItem('zuo','10');
    console.log(localStorage.getItem('zuo'));

    div_jk_geng.addEventListener('click',ok(genghuanjie,2000));
    jk_play_a.addEventListener('click',ok(play_shiping,5000));
    wei.addEventListener('click',ok(weii_,1000));
    // Your code here...
})();
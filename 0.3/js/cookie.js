/**
 * Created by gzwy on 11/30/16.
 */
function cookiesave(n, v, mins, dn, path){
    if(n)
    {

        if(!mins) mins = 365 * 24 * 60;
        if(!path) path = "/";
        var date = new Date();

        date.setTime(date.getTime() + (mins * 60 * 1000));

        var expires = "; expires=" + date.toGMTString();

        if(dn) dn = "domain=" + dn + "; ";
        document.cookie = n + "=" + v + expires + "; " + dn + "path=" + path;
    }
}
function cookieget(n){
    var name = n + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i<ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
function closeclick(){
    document.getElementById('lead').style.display='none';
    cookiesave('closeclick','closeclick','','','');
}
function clickclose(){
    if(cookieget('closeclick')=='closeclick'){
        document.getElementById('lead').style.display='none';
    }else{
        document.getElementById('lead').style.display='block';
    }
}
window.onload=clickclose;

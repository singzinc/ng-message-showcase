var Config = function(){
    var pre = {
        protocol : 'http://',
        domain : 'localhost',
        port : '3000'
    };
    function mergeUrl(){
        return pre.protocol + pre.domain + ':' + pre.port + '/';
    }
    
    return {
    	findAllCategory:function(){  return mergeUrl() + 'm_service_admin/hospital/findAllCategory'; },
    	findAllPro:function(){    return mergeUrl() + 'm_service_admin/hospital/findAllPro';  }
    }
}
/* Storage封装 */
const STORAGE_KEY = 'mall';
export default{
    // 存储值
    setItem(key,value,module_name){
        if(module_name){
            // 先获取到user这个值
            let val =this.getItem(module_name);
            val[key]=value;
            this.setItem(module_name,val);
        }else{
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }
    },
    // 获取某一个模块下面的属性。如user下面的userName
    getItem(key,module_name){
        if(module_name){
            let val=this.getItem(module_name);
            if(val) return val[key];
        }
        return this.getStorage()[key];
    },
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)||'{}');
    },
    clear(key,module_name){
        let val=this.getStorage();
        if(module_name){
            // 当这个模块不存在的时候就return回去
            if(!val[module_name])return;
            delete val[module_name][key];
        }else{
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
}
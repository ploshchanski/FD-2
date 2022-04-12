class HashStorageFunc{
    constructor(){
        this.storage = {}; 
    }
    addValue(key,value){
        this.storage[key]=value;
    }
    getValue(key){
        return this.storage[key];
    }
    
    deleteValue(key) {
        if(key in this.storage ){
         delete this.storage[key];
         return true;   
        }
    return false; 
    }
    
    getKeys() {
        return Object.keys(this.storage);
    }
    }
    
    let drinkStorage = new HashStorageFunc;
    
    function addDrink(){
        let drinkName = prompt('введите название напитка!');
        let rec = prompt('введите рецепт напитка!');
        let alco = confirm ('нажмите "да" если напиток алкогольный!');
        drinkStorage.addValue(drinkName,{recipe:rec,alcohol:alco})
        alert('напиток сохранен!');
        console.log(drinkStorage);
    }
    
    function getDrink(){
        let drinkName = prompt('введите название напитка!');
        let info = drinkStorage.getValue(drinkName);
        if(info === undefined){
            alert('напиток не найден');}
        else{
            let alcohol;
        if (info.alcohol === true){
            alcohol = "да";
        }else{ alcohol = "нет";} 
          alert(
    `название напитка: ${drinkName}
    алкогольный: ${alcohol}
    рецепт приготовления: ${info.recipe}`);  
        }
        
    }
    function delDrink(){
        let drinkName = prompt('введите название напитка!');
        let infoAboutDel = drinkStorage.deleteValue(drinkName);
        if(infoAboutDel ===true ){
        alert('напиток удален!'); }
        else{
            alert('напиток не найден');}
    }
    function drinkList(){
        let list = drinkStorage.getKeys();
        if(list.length === 0){
            alert('список напитков пуст!')
        }else{
            alert(list);
        }
        
    
    }
    //lololo
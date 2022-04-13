var formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {caption:'Опубликовать',kind:'submit'},
];

var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {caption:'Зарегистрироваться',kind:'submit'},
];

function createForm(descriptionForm){
   let form = document.createElement('form');
   form.method='post';
   form.action='https://fe.it-academy.by/TestForm.php';

   for(let i=0; i<descriptionForm.length; i++){
       let formItem = descriptionForm[i];
       switch(formItem.kind){
           case 'longtext':{
                let label = document.createElement('label');
                label.setAttribute('for',formItem.name);
                label.innerHTML = `<div class='label'>${formItem.label}</span>`;
                let input = document.createElement('input');
                input.type='text';
                input.name=formItem.name;
                input.setAttribute('class',formItem.kind);
                let br= document.createElement('br');
                form.appendChild(label);
            label.appendChild(input);
            label.appendChild(br);
                
            break;
           }
           case 'shorttext':{
            let label = document.createElement('label');
            label.setAttribute('for',formItem.name);
            label.innerHTML = `<div class='label'>${formItem.label}</span>`;
            let input = document.createElement('input');
            input.type='text';
                input.name=formItem.name;
                input.setAttribute('class',formItem.kind);
            let br= document.createElement('br');
            form.appendChild(label);
            label.appendChild(input);
            label.appendChild(br);
            
        break;
           }
           case 'number':{
            let label = document.createElement('label');
            label.setAttribute('for',formItem.name);
            label.innerHTML = `<div class='label'>${formItem.label}</span>`;
            let input = document.createElement('input');
            input.type='number';
            input.name= formItem.name;
            input.setAttribute('class',formItem.kind);
            let br= document.createElement('br');
            form.appendChild(label);
            label.appendChild(input);
            label.appendChild(br);
            
        break;
           }
           case 'combo':{
            let label = document.createElement('label');
            label.setAttribute('for',formItem.name);
            label.innerHTML = `<div class='label'>${formItem.label}</span>`;
            let select = document.createElement('select');
            select.setAttribute('name',formItem.name);
            for (let variants of formItem.variants){
                let option = document.createElement('option');
                option.innerHTML = variants.text;
                option.value=variants.value;
                select.appendChild(option);
            }
            let br= document.createElement('br');
            label.appendChild(select);
            label.appendChild(br);
            form.appendChild(label);
            break;
           }
           case 'radio':{
            let label = document.createElement('label');
            label.setAttribute('for',formItem.name);
            label.innerHTML = `<div class='label'>${formItem.label}</span>`;
            for (let variants of formItem.variants){
                let radio = document.createElement('input');
                radio.type = 'radio';
                let lab = document.createElement('label');
                radio.name= formItem.name;
                lab.innerHTML = variants.text;
                radio.value=variants.value;
                label.appendChild(radio);
                label.appendChild(lab);
                
                
            }
            let br= document.createElement('br');
            label.appendChild(br);
            form.appendChild(label);
            break;
           }
           case 'check':{
            let label = document.createElement('label');
            label.setAttribute('for',formItem.name);
            label.innerHTML = `<div class='label'>${formItem.label}</span>`;
            let check = document.createElement('input');
            check.type = 'checkbox';
            check.checked = 'true';
            check.name= formItem.name;
            check.setAttribute('class',formItem.kind);
            let br= document.createElement('br');
            label.appendChild(check);
            label.appendChild(br);
            form.appendChild(label);
            break;
           }
           case 'memo':{
            let label = document.createElement('label');
            label.setAttribute('for',formItem.name);
            label.innerHTML = `<div class='label'>${formItem.label}</span>`;
            let textArea = document.createElement('textarea');
            textArea.name= formItem.name;
            textArea.setAttribute('class',formItem.kind);
            form.appendChild(label);
            form.appendChild(textArea);
            break;
           }
           case 'submit':{
            let submit = document.createElement('input');
            submit.type = 'submit';
            submit.value = formItem.caption;
            form.appendChild(submit);
            break;
           }

       }
   }
   document.body.appendChild(form);
}

createForm(formDef1);
createForm(formDef2);

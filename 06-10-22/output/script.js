let resume={
    name:"Bibin",
    email:'bibin.@gmail.com',
    phone:9393939339,
    role:'Full Stack Developer',
    objective:"To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.",
    education:[{
        qualification:"10th",
        institute:"Arunachalam Higher Secondary School",
        marks:93,
        location:"Thiruvattar",
        pass_out:2015
    },
    {
        qualification:"12th",
        institute:"Arunachalam Higher Secondary School",
        marks:89,
        location:"Thiruvattar" ,
        pass_out:2017  
    },
    {
        qualification:"B.E",
        institute:"St.Xavier's Catholic College of Engineering",
        marks:78,
        location:"Nagercoil"  ,
        pass_out:2021,
        stream:"Mechanical Engineering" 
    }],
    skills:["Python","HTML","CSS","JS"],
    certification:{
        course:"Python",
        duration:"6 months",
        institute:"Network Systemz"
    },
    project:{
        title:"project_title",
        abstract:"vvvv "
    },
    experience:{
        company:" sss",
        duration:" dddd",
        role:"wwww "
    },
    area_of_interest:["developing new technologies","project management"],
    hobbies:["cricket",'mobile games','watching movies'],

    personal_details:{
        father:"aaa",
        mother:"bbb ",
        sibling:" ccc",
        age:22,
        blood_group:"O+",
        languages:["Tamil","English","Malayalam"],
        gender:"male",
        marital_status:"single",
        address:"aaaa"
    }

}
let new_resume={
    
    
};
function add_detail(key,value,index=null,indexkey=null){
    if(index==null){ 
    new_resume[key]=value;}
    else if (key=='education'){
        if(!new_resume[key]){
            new_resume[key]=[];
        }
        if(!new_resume[key][index]){
            new_resume[key][index]={}
        }
        new_resume [key][index][indexkey]=value
    }
    else if (key=='certification'){
        if(!new_resume[key]){
            new_resume[key]=[];
        }
        if(!new_resume[key][index]){
            new_resume[key][index]={}
        }
        new_resume [key][index][indexkey]=value
    }
    else if (key=='project'){
        if(!new_resume[key]){
            new_resume[key]=[];
        }
        if(!new_resume[key][index]){
            new_resume[key][index]={}
        }
        new_resume [key][index][indexkey]=value
    }
    else if (key=='experience'){
        if(!new_resume[key]){
            new_resume[key]=[];
        }
        if(!new_resume[key][index]){
            new_resume[key][index]={}
        }
        new_resume [key][index][indexkey]=value
    }
    else if (key=="skills"||key=="area_of_interest"||key=="hobbies"){
        if (!new_resume[key]){
            new_resume[key]=[]
        }
        new_resume[key][index]=value; 
    }
    else if (key=='personal_details'){
        if(!new_resume[key]){
            new_resume[key]={};
        }

        new_resume [key][indexkey]=value
    }
    
    else if(indexkey=='language'){
        if(!new_resume[key][indexkey]){
            new_resume[key][indexkey]=[];
        }
        new_resume[key][index][indexkey]=value  
        
    }

    else {
        new_resume[key][index]=value;  
    }
    display()
}
function display(){
    document.getElementById("obj").innerHTML=JSON.stringify(new_resume)
}
function submit(){
    if (!localStorage.getItem('myresume')){
        localStorage.setItem('myresume',JSON.stringify([]))
    }
    let a=JSON.parse(localStorage.getItem('myresume'))
    a.push(new_resume)
    localStorage.setItem('myresume',JSON.stringify(a))
}
function resume_list(){
    let allresume=JSON.parse(localStorage.getItem('myresume'));
    let all=" ";
    for(let i=0;i<allresume.length;i++){
        
        all=all+"<li><a href='view.html?name="+allresume[i].name+"'>"+ allresume[i].name+"</a></li>";
    }
    document.getElementById('name_list').innerHTML=all;
}


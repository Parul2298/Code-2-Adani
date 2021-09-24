let out=[];
for(let i=0; i<awards.length; i++){
if(awards[i].year == 2019 && awards[i].category =="Physics")
        out.push({category:"physics",year:2019,winners:awards[i].name})

if(awards[i].year == 2018 && awards[i].category =="Physics")
        out.push({category:"physics",year:2019,winners:awards[i].name})

if(awards[i].year == 2019 && awards[i].category =="Chemistry")
        out.push({category:"physics",year:2019,winners:awards[i].name})

if(awards[i].year == 2018 && awards[i].category =="Chemistry")
        out.push({category:"physics",year:2019,winners:awards[i].name})
}
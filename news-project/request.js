const content1=document.querySelector(".content1_1");
const content2=document.querySelector(".content1_2");
const content3=document.querySelector(".content1_3");
const content4=document.querySelector(".content1_4");
const content5=document.querySelector(".content1_5");
const listContent=[content1,content2,content3,content4,content5]
const mainNews1_1 = document.querySelector(".main_news1_1");
const mainNews1_2 = document.querySelector(".main_news1_2");
const mainNews1_3 = document.querySelector(".main_news1_3");
const mainNews1_4 = document.querySelector(".main_news1_4");
const mainNews1_5 = document.querySelector(".main_news1_5");
const mainNews1_6 = document.querySelector(".main_news1_6");
const mainNews1_7 = document.querySelector(".main_news1_7");
const mainNews1_8 = document.querySelector(".main_news1_8");
const mainNews1_9 = document.querySelector(".main_news1_9");
const newsList =[mainNews1_1,mainNews1_2,mainNews1_3,mainNews1_4,mainNews1_5,mainNews1_6,mainNews1_7,mainNews1_8,mainNews1_9]


async function request(category){
    const apiKey="e1a6cd23742e4b9cb1be0dffe686ab93";
    try{
        const req = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey="+apiKey);
        if(req.status!="200"){
             throw new Error("erişilemedi")
        }
        // console.log(req.status);
        const data = await req.json();
        console.log(data.articles[0].source.name);
        let j=5;
        for(let i =0;i<5;i++){
            if(data.articles[i].urlToImage!=null){
                renderGrid(listContent[i],data.articles[i]);
            }
            else{
                while(true){
                    if(data.articles[i+j].urlToImage!=null){
                        renderGrid(listContent[i],data.articles[i+j])
                        break
                    }
                    else{
                        j++;
                    }
                }
            }
           
           
            
        }
        for(let i =10;i<19;i++){
            if(data.articles[i].urlToImage!=null){
                renderNews(newsList[i-10],data.articles[i]);
            }
            else{
                while(true){
                    if(data.articles[i+j].urlToImage!=null){
                        renderNews(newsList[i-10],data.articles[i+j])
                        break
                    }
                    else{
                        j++;
                    }
                }
            }
           
           
            
        }
        
    }
    catch(err){
        console.log(err);
    }
}
function renderGrid(content,data){
    const title = data.title;
    const img =data.urlToImage;
    const cont=`
        <img src="${img}" class="grid-img"  alt="">
        <p class="grid-p">${title}</p>
    `;
    content.innerHTML=cont;
    

}

function renderNews(content,data){
    let html=``;
    html +=`
    <div class="card" style="height: 350px!important;">
        <img src="${data.urlToImage}" alt="" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">
            <a href="" class="btn btn-light">${data.source.name}</a>
            
            </p>
            
            </div>
    </div>
    `;
    console.log(content);
    content.innerHTML=html;
    
}


request("science");


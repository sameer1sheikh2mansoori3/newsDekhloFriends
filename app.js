const source ='bbc-news';
const apikey='e2a4981af1b24d9eb79ab2f2c218a4a9'

const xmr =new XMLHttpRequest();

xmr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&apiKey=e2a4981af1b24d9eb79ab2f2c218a4a9`,true)
xmr.onload=function(){
    if(this.status===200){
        let json=JSON.parse(this.responseText);
        let articles=json.articles;
        // console.log(articles);
        let newsHtml= "";
        articles.forEach(function(element,index) {
          let news=  `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
                        newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log("alasss!!!!!");
    }
}
xmr.send();
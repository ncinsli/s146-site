declare type ArticleList = {
    data : Array<Article>
};
  
declare type Article = {
    id : number,
    title : string,
    date : string,
    body : string,
    attachments : string,
    sidePicture? : string
};
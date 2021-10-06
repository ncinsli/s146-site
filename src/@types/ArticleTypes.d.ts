declare type ArticlePreviewList = Array<ArticlePreview>;
  
declare type ArticlePreview = {
    id : number,
    title : string,
    date : string,
    body : string,
    attachments : string,
    sidePicture? : string
};

declare type ArticleFull = {
    id : number,
    title : string,
    date : string,
    body : string,
    attachments : string,
    sidePicture? : string
};
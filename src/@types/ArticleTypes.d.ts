declare type ArticlePreviewList = Array<ArticlePreview>;
  
declare type ArticlePreview = {
    id : number,
    title : string,
    date : string,
    body : string,
    attachments : string,
    titlePicture? : string
};

declare type ArticleFull = {
    id : number,
    title : string,
    date : string,
    body : string,
    attachments : string,
    titlePicture : string
};

declare type UrlRoute = {
  urlRoute: string
}


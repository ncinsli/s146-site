import axios from "axios";

export type ArticlePreviewsResponse = {
    data : ArticleFull[]
};
export type ArticleResponse = {
    data : ArticleFull
};

export class Scrapper{
    static ScrapPost(id : number) : Promise<ArticleResponse>{
        return axios.get(`https://api-ncinsli.dev.dc7342.im/post/get/${id}`);
    }
    static ScrapStaticPost(name : string) : Promise<ArticleResponse>{
        return axios.get(`https://api-ncinsli.dev.dc7342.im/static_post/get/${name}`);
    }

    static ScrapPreviews() : Promise<any>{
        return axios.get(`https://api-ncinsli.dev.dc7342.im/posts/get/0`);
    }
}
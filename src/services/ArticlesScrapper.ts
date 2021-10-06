import axios from "axios";

export type ArticleResponse = {
    data : Article
};

export class Scrapper{
    static ScrapPost(id : number) : Promise<ArticleResponse>{
        return axios.get(`https://api-ncinsli.dev.dc7342.im/posts/get/${id}`);
    }

    static ScrapPreviews() : Promise<any>{
        return axios.get(`https://api-ncinsli.dev.dc7342.im/posts/get/0`);
    }
}
import * as axios from 'axios'
export default {
    actions:{
    async fetchData(ctx,category){
            let news = await axios.get(`https://newsapi.org/v2/top-headlines?country=ua${category ? "&category="+category : ""}&apiKey=bf1c48646ae741489de3fdc2e6f28153`).then(response =>{return response.data.articles});
            ctx.commit('fetchNews',news)
        }
    },
    mutations:{
        fetchNews(state,news){
            state.news = news
        }
    },
    state:{
        news:['No News']
    },
    getters:{
        getTest(state){
            return state.news
        }
    }
}
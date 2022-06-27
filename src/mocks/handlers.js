import { rest } from msw;

export const handlers = [
    rest.get("https://api.themoviedb.org/3/movie/popular?api_key=f3fb983d1a3524887a8a8717a10b439b&language=fr-FR",
     (req, res, ctx) => {
        return res (
            ctx.json([
                { "results":[{"adult":false,"backdrop_path":"/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg","genre_ids":[14,28,12],"id":453395,"original_language":"en","original_title":"Doctor Strange in the Multiverse of Madness","overview":"Le Docteur Stephen Strange continue ses recherches sur la Pierre du Temps. Cependant, un vieil ami devenu ennemi tente de détruire tous les sorciers de la Terre, ce qui perturbe le plan de Strange.","popularity":20983.423,"poster_path":"/dbJDPJBHKxnMyvcc12mcbGK5RPF.jpg","release_date":"2022-05-04","title":"Doctor Strange in the Multiverse of Madness","video":false,"vote_average":7.5,"vote_count":3408}] }
            ])
        )
    })
]
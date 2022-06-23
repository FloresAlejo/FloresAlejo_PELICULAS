const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
            headers: {
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGY1M2YwNzkxMzc3MzNlNDIzNGYwNjZlMzFhNDU1OSIsInN1YiI6IjYyYWU1OTVkNTk1YTU2MDA5MmE3ZTM1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hR4bJeklSiwdIv_Qwgsfuz8ZrvZeWYdlkpf6yFsuvno",
                "Content-Type": "application/json;charset=utf-8",
            },
        })
          .then((result) => result.json())
}
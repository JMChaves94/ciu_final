import React, { Fragment } from "react";

const Animes = ({ listaAnimes }) => {
  return (
    <Fragment>
      <div className="flex flex-row flex-wrap justify-center">
        {listaAnimes.map((anime) => (
          <div class="max-w-xs rounded flex flex-col overflow-hidden shadow-lg m-2">
            <a href={anime.url}><img class="w-full " src={anime.image_url} alt="" /></a>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{anime.title}</div>
              <p class="text-gray-700 text-base">{anime.synopsis}</p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                ⭐{anime.score}
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {anime.episodes} capitulos
              </span>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Animes;
function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},a=t.parcelRequire241c;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},t.parcelRequire241c=a);var i=a("g887t"),o=a("krGWQ");class r{show(){this.refs.spinner.classList.remove("is-hidden")}hide(){this.refs.spinner.classList.add("is-hidden")}constructor(){this.refs=o.refs}}var l=a("jU4ZD"),c=a("7x8k5");a("krGWQ");var d=a("fb9GJ");i=a("g887t"),l=a("jU4ZD"),c=a("7x8k5"),o=a("krGWQ"),o=a("krGWQ");const u=new r;function m(){u.hide();o.refs.messageContainer.innerHTML='<p class="film-cards__error" data-key="responseError">Sorry, no response from server!</p>'}const f=new(0,i.default),p=new r;function g(t){const n=document.getElementById("pagination"),s={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},a=window.matchMedia("(max-width: 768px)");function i(e){e.matches&&(s.visiblePages=3)}a.addEventListener("change",i),i(a);new(e(d))(n,s).on("afterMove",(e=>{o.refs.homeCardsContainer.innerHTML="",p.show(),f.page=e.page,localStorage.setItem("page",f.page),f.fetchTrendingMovies().then((({results:e})=>{const t=(0,l.default)(e);p.hide(),(0,c.insertFilmsMarkupToHome)(t),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch(m)}))}l=a("jU4ZD");const v=new(0,i.default),h=new r;v.fetchGenres().then((({genres:e})=>{for(const{id:t,name:n}of e)localStorage.setItem(`genre_${t}`,n)})).catch((e=>console.log(e))),h.show(),v.fetchTrendingMovies().then((({results:e,total_results:t})=>{const n=(0,l.default)(e);h.hide(),(0,c.insertFilmsMarkupToHome)(n),g(t),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch(m),a("kYzA7");function _(e,t,n){var s,a,i,o,r;function l(){var c=Date.now()-o;c<t&&c>=0?s=setTimeout(l,t-c):(s=null,n||(r=e.apply(i,a),i=a=null))}null==t&&(t=100);var c=function(){i=this,a=arguments,o=Date.now();var c=n&&!s;return s||(s=setTimeout(l,t)),c&&(r=e.apply(i,a),i=a=null),r};return c.clear=function(){s&&(clearTimeout(s),s=null)},c.flush=function(){s&&(r=e.apply(i,a),i=a=null,clearTimeout(s),s=null)},c}_.debounce=_,a("krGWQ");i=a("g887t"),o=a("krGWQ");new(0,i.default);o=a("krGWQ"),i=a("g887t"),l=a("jU4ZD"),c=a("7x8k5"),d=a("fb9GJ"),i=a("g887t"),l=a("jU4ZD"),c=a("7x8k5"),o=a("krGWQ");const b=new(0,i.default),y=new r;function w(t,n){const s=document.getElementById("pagination"),a={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},i=window.matchMedia("(max-width: 768px)");function r(e){e.matches&&(a.visiblePages=3)}i.addEventListener("change",r),r(i);new(e(d))(s,a).on("afterMove",(e=>{o.refs.homeCardsContainer.innerHTML="",y.show(),b.page=e.page,b.query=n,b.fetchSearchingMovies().then((({results:e})=>{const t=(0,l.default)(e);y.hide(),(0,c.insertFilmsMarkupToHome)(t),localStorage.setItem("currentFilm",JSON.stringify(e))})).catch(m)}))}o=a("krGWQ");function k(){const e=`<p class="search-form--badrequest">${function(){const e=localStorage.getItem("lang");if(!e||"en-US"===e)return"Search result not successful. Enter the correct movie name!";if("uk-UA"===e)return"Упс, нічого не знайдено. Введіть коректну назву фільма!"}()}</p>`;o.refs.filmsSearchList.innerHTML=e;return setTimeout((()=>o.refs.filmsSearchList.innerHTML=""),2e3)}const L=new(0,i.default),T=new r;o.refs.formSearch.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements.searchInput.value.trim();if(!t)return console.log("Field cannot be empty");L.query=t,T.show();try{L.fetchSearchingMovies().then((({results:e,total_results:n})=>{if(T.hide(),0===e.length)return void k();o.refs.homeCardsContainer.innerHTML="";const s=(0,l.default)(e);(0,c.insertFilmsMarkupToHome)(s),w(n,t),localStorage.setItem("currentFilm",JSON.stringify(e))}))}catch(e){m()}o.refs.inputSearch.value="",o.refs.filmsSearchList.innerHTML="",o.refs.filmsSearchList.classList.remove("search-form__list--bgc")}));var M=a("1drNe");a("jU4ZD"),a("gXqAZ");o=a("krGWQ"),c=a("7x8k5");var S=a("fnyLm"),E=a("ZS19j"),C=a("kYzA7"),D=a("1hBMB"),x=a("gXqAZ");o.refs.homeCardsContainer.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"B"!==e.target.nodeName&&"H2"!==e.target.nodeName&&"P"!==e.target.nodeName)return;document.body.classList.add("show-modal"),window.addEventListener("keydown",O);const t=e.target.dataset.id,n=localStorage.getItem("currentFilm");let s=JSON.parse(n).find((e=>e.id==t));const a=function(e){let t="";t=e.poster_path?`${D.BASE_POSTER_URL}/${e.poster_path}`:"https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png";return`<div class="movie__container--left-side">              \n                  <img class="movie__image" src="${t}"\n                    alt="${e.title||e.name}" /></div>\n            <div class="movie__container--rigth-side">\n                <h2 class="movie__title">${e.title||e.name}</h2>\n                <table class="movie__info">\n                    <tbody>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="votes">Vote / Votes</td>\n                            <td class="movie__info-rating">\n                                <span class="movie__info-rating-value movie__info-rating--accent">${(0,x.setReleaseVote)(e.vote_average)}</span>\n                                <span class="movie__info-rating-slash">/</span>\n                                <span class="movie__info-rating-value">${(0,x.setReleaseVote)(e.vote_count)}</span>\n                            </td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="popularity">Popularity</td>\n                            <td class="movie__info-numbers">${e.popularity}</td>\n                        </tr>\n                        <tr class="movie__info-rows">\n                            <td class="movie__info-name" data-key="originalTitle">Original Title</td>\n                            <td class="movie__info-value">${e.original_title||e.original_name}</td>\n                        </tr>\n                        <tr class="movie__info-rows movie__info-rows--last">\n                            <td class="movie__info-name" data-key="genre">Genre</td>\n                            <td class="movie__info-value">${(0,M.gettingGenresListForModal)(e.genre_ids)||"Genre not defined"}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h2 class="movie__about-title" data-key="about">About</h2>\n                <p class="movie__about-text">\n                    ${e.overview||"No text"}\n                </p>\n                <div class="movie__btn-container">\n                   \n                    <button type="submit" id="watched-btn" data-id="${e.id}" class="movie__btn btn btn--accent">ADD TO WATCHED\n                        </button>\n                    <button type="submit" id="queue-btn" data-id="${e.id}" class="movie__btn btn btn-queue">ADD TO QUEUE\n                        </button>\n                </div>\n            </div>\n        </div>`}(s);(0,E.translateItems)(".movie__container--rigth-side [data-key]"),(0,c.insertModalMarkupHome)(a);const i=document.querySelector("#watched-btn");i.addEventListener("click",(()=>{"REMOVE FROM WATCHED"===i.textContent&&(i.textContent="ADD TO WATCHED"),(0,S.addWatchedLocalStorage)(s,i,I)}));const o=document.querySelector("#queue-btn");o.addEventListener("click",(()=>{"REMOVE FROM QUEUE"===o.textContent&&(o.textContent="ADD TO QUEUE"),(0,S.addQueueLocalStorage)(s,o,I)})),(0,C.textModalBtn)(t)})),o.refs.closeModalBtn.addEventListener("click",N),o.refs.modalCardBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&N()}));const I=o.refs.homeCardsContainer;function N(){window.removeEventListener("keydown",O),document.body.classList.remove("show-modal"),o.refs.modalCardContainer.innerHTML=""}function O(e){"Escape"===e.code&&N()}a("9tydV"),a("cddKH"),AOS.init(),a("ZS19j"),a("iLDfN");o=a("krGWQ");setTimeout((()=>{o.refs.advertising.classList.add("is-visible")}),5e3),setTimeout((()=>{o.refs.advertising.classList.remove("is-visible"),o.refs.advertising.classList.add("semi-visible")}),1e4);
//# sourceMappingURL=index.ed8c38f3.js.map

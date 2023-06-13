
import type * as _Anime4KJS from "../Anime4K.js/d.ts/index.d.ts";
declare var Anime4KJS: typeof _Anime4KJS;

!function () {
    const v: HTMLVideoElement | null = document.querySelector('video[src]');
    const p = v?.parentElement;
    const c = document.createElement('canvas');
    if (!v || !p) return;

    c.width = v.videoWidth * 2;
    c.height = v.videoHeight * 2;
    c.style.height = '100%';
    c.style.aspectRatio = `${v.videoWidth}/${v.videoHeight}`;

    p.insertAdjacentElement('afterbegin', c);
    p.style.display = 'flex';
    p.style.alignItems = 'center';
    p.style.justifyContent = 'center';

    v.style.visibility = 'hidden';

    const upscaler = new Anime4KJS.VideoUpscaler(24, Anime4KJS.ANIME4KJS_SIMPLE_M_2X);
    upscaler.attachVideo(v, c);
    upscaler.start();
}

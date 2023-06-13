declare var Anime4KJS: any;
declare var upscaler: any;

if (window.upscaler) {
    const v: HTMLVideoElement | null = document.querySelector('video[src]');
    const c = document.getElementById('4k-scaler');
    if (v && c) {
        if (upscaler.running) {
            c.style.display = 'none';
            v.style.visibility = 'visible';
            upscaler.stop();
        } else {
            c.style.display = 'block';
            v.style.visibility = 'hidden';
            upscaler.start();
        }
    }
} else {
    init();
}

function init() {
    const v: HTMLVideoElement | null = document.querySelector('video[src]');
    const p = v?.parentElement;
    const c = document.createElement('canvas');
    if (!v || !p) return;

    c.id = '4k-scaler';
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
    window.upscaler = upscaler;
}

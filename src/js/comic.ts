const email = "e.anisov@innopolis.university" as string;

const comicTitle = document.getElementById('comic-title') as HTMLHeadingElement;
const comicDate = document.getElementById('comic-publication-date') as HTMLParagraphElement;
const comicImage = document.getElementById('comic-img') as HTMLImageElement;

interface Comic {
    "month": string,
    "num": number,
    "link": string,
    "year": string,
    "news": string,
    "safe_title": string,
    "transcript": string,
    "alt": string,
    "img": string,
    "title": string,
    "day": string
}

type ComicId = number;

function fetchComicById(id: ComicId): Promise<Comic> {
    const comicParams = new URLSearchParams() as URLSearchParams;
    comicParams.append('id', String(id));

    return fetch("https://fwd.innopolis.university/api/comic?" + comicParams.toString()).then(r => r.json());
}

function fetchIdByEmail(email: string): Promise<ComicId> {
    const hw2Params = new URLSearchParams() as URLSearchParams;
    hw2Params.append('email', email);

    return fetch("https://fwd.innopolis.app/api/hw2?" + hw2Params.toString()).then(r => r.json());
}

document.addEventListener("DOMContentLoaded", async function () {
    let comic = await fetchComicById(await fetchIdByEmail(email)) as Comic;
    comicTitle.textContent = comic['safe_title'];
    comicDate.textContent = (new Date(Date.UTC(Number(comic['year']), Number(comic['month']), Number(comic['day'])))).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    comicImage.src = comic['img'];
    comicImage.alt = comic['alt'];
})

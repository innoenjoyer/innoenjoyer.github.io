<script lang="ts">
    import moment from 'moment';
    import { onMount } from 'svelte';

    const email = "e.anisov@innopolis.university" as string;
    let comicTitle = '' as string;
    let comicDate = '' as string;
    let comicImageSrc = '' as string;
    let comicImageAlt = '' as string;

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

    onMount(() => {
        if (typeof document !== 'undefined') {
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

            const setComic = async () => {
                let comic = await fetchComicById(await fetchIdByEmail(email)) as Comic;
                comicTitle = comic['safe_title'];
                comicDate = moment(`${comic.year}-${comic.month}-${comic.day}`).fromNow();
                comicImageSrc = comic['img'];
                comicImageAlt = comic['alt'];
            }

            setComic();
        }
    });
</script>

<svelte:head>
    <title>Comic</title>
</svelte:head>

<section class="main-section">
    <h1 id="comic-title">{comicTitle}</h1>
    <p id="comic-publication-date">{comicDate}</p>
    <img id="comic-img" src="{comicImageSrc}" alt="{comicImageAlt}">
</section>

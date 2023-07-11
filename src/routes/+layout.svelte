<svelte:head>
    <link rel="stylesheet" href="/styles/style.css">
</svelte:head>

<header>
    <div class="header-content">
        <h1 class="header-content-logo">Portfolio</h1>
        <nav class="header-nav">
            <ul>
                <li><a href="/">My Bio</a></li>
                <li><a href="/comic">Comic</a></li>
            </ul>
        </nav>
    </div>
</header>

<slot></slot>

<footer>
    <section class="footer-section">
        <article>
            <h4>Site map</h4>
            <ul>
                <li><a href="/">My Bio</a></li>
                <li><a href="/comic">Comic</a></li>
            </ul>
        </article>
        <article>
            <h4>Funny links</h4>
            <ul>
                <li><a href="http://inno.tatar">inno.tatar</a></li>
                <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Not a rickroll</a></li>
            </ul>
        </article>
        <article></article>
    </section>
</footer>
<div class="tm-footer">
    <div class="tm-footer-contacts">
        <a href="https://github/com/anijackich">
            <img src="/img/social/github.svg" alt="github">
        </a>
        <a href="https://t.me/anijack">
            <img src="/img/social/telegram.svg" alt="telegram">
        </a>
        <a href="mailto:mr@anjk.ru">
            <img src="/img/social/mail.svg" alt="mail">
        </a>
    </div>
</div>


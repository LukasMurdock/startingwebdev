// theme.config.js
export default {
    repository: 'https://github.com/shuding/nextra', // project repo
    docsRepository: 'https://github.com/shuding/nextra', // docs repo
    branch: 'master', // branch of docs
    path: '/', // path of docs
    titleSuffix: ' – Nextra',
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerText: `${new Date().getFullYear()} © Lukas Murdock.`,
    footerEditOnGitHubLink: true, // will link to the docs repo
    logo: (
        <>
            <span className="mr-2 font-extrabold hidden md:inline">
                Website
            </span>
            <span className="text-gray-600 font-normal hidden md:inline">
                Documentation
            </span>
        </>
    ),
    head: (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="description" content="Nextra: the next docs builder" />
            <meta name="og:title" content="Nextra: the next docs builder" />
        </>
    ),
}

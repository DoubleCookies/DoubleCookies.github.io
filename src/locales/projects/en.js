export const en = {
    wikiWamLog: {
        wamIntroStart: 'WAM (Wiki Activity Monitor) — rating of the largest wikis on FANDOM. ' +
            'Every wiki get score based on various (and unknown) params from 0 to 100 (higher — better), ' +
            'and after that rating was made (and it was updated every day).',
        wamIntroFinish: 'I saved rating values with special scripts and built graphs with this data.',
        undertale: 'Undertale Wiki (ru)',
        geometryDash: 'Geometry Dash Wiki (ru)',
        stevenUniverse: 'Steven Universe Wiki (ru)',
        battleCats: 'The Battle Cats Wiki (ru)',
    },

    stringSwap: {
        intro: 'Processing text for better FANDOM experience',
        replaceText: 'Text replacement',
        replaceTextInfo: 'Text replacement module. Nothing extra!',
        addPrefix: 'Add prefix',
        addPrefixInfo: 'Module for adding prefix for every string.',
        fileNames: 'Files list',
        fileNamesInfo: 'Module for unused files page. Allow to get correct filenames ' +
            'which are difficult to get otherwise.',
        quoteReplacement: 'Quote replacement',
        quoteReplacementInfo: 'Module for quote replacement. Pretty simple and doesn\'t process nesting quotes.',
        navboxGenerator: 'Navbox generator',
        navboxGeneratorInfo: 'Module for generating navbox links.',
        galleryGenerator: 'Gallery generator',
        galleryGeneratorInfo: 'Module for generating file names with numbers. Used for galleries, now it lost relevance ' +
            'but I don\'t want to throw it away.',

        startText: 'Initial text',
        resultText: 'Result',
        find: 'Find text',
        replaceWith: 'Replace with',
        prefix: 'Prefix',
        name: 'Name',
        startNumber: 'Start number',
        finNumber: 'Last number',
        extension: 'Extension'
    },

    stats4wiki: {
        aboutTitle: "What is this project about?",
        aboutText: "I collect data about top-50 most downloaded and most liked levels in Geometry Dash " +
            "(overall and for \"demon\" difficulty levels). After that I form table and " +
            "post it on Geometry Dash Wiki (ru). At the same time I create data for two templates which are used " +
            "in articles about most downloaded levels.<1/>" +
            "In result there is semi-automatic articles and templates update (and as a bonus, Wiki contains " +
            "changes for these pages).",
        workTitle: "How does it work?",
        workList: "Everything is pretty simple and consecutive:<1>" +
            "<0>Fetch data from Geometry Dash servers and get page (10 levels). Depending on type " +
            "(downloads/likes) form two levels lists.</0>" +
            "<0>Stop processing pages when we have 50 demon levels (automatically " +
            "we will have 50 levels with every difficulty).</0>" +
            "<0>Both lists split for another two lists  — for all levels and for demon-only.</0>" +
            "<0>Transform every list in txt format " +
            "(with nuances like template types, presence or absence of links, dividers, etc.)</0>" +
            "<0>Process text for templates and save it.</0>" +
            "<0><2>Done!</2></0>" +
            "</1>",
        plansTitle: "Any plans?",
        plansList: "<0><1>I can check old commits, collect data from old months/years and " +
            "build graph/table/<2>other thing</2>.</1>" +
            "<1>Add illustrations. Everybody likes illustrations I guess?</1></0>",
    },

    gdStatistics: {
        aboutTitle: "What is it?",
        aboutText: "This project is about collecting data about levels in Geometry Dash — how many times level was downloaded, liked, " +
            " who is creator, which soundtrack it uses, etc. After that different tables are filled with data.. and that's all!",
        locationTitle: "Where can I find it?",
        locationText: "You can check data <1>here</1>.",

        workTitle: "How does it work?",
        workList: "Everything is pretty simple and consecutive:<1>" +
            "<0>Fetch data from Geometry Dash servers and get page (10 featured levels). We are getting data until we found " +
            "last featured level.</0>" +
            "<0>Form list for epic levels (because every epic level is featured we won't miss anything)</0>" +
            "<0>Both lists split for another two lists  — for all levels and for demon-only.</0>" +
            "<0>By manipulating the lists, we form various new lists - by difficulty, by soundtracks usage, by " +
            "amount of levels from creator, etc.</0>" +
            "<0>Save data in different files.</0>" +
            "<0><2>Done!</2></0>" +
            "</1>",
        plansTitle: "Any plans?",
        plansList: "<0>" +
            "<1>Maybe check old commits, collect data from old months/years and " +
            "build graph/table/<2>other thing</2>.</1>" +
            "<1>Add illustrations. Everybody likes illustrations I guess?</1>" +
            "</0>",
    }
};

export default en;
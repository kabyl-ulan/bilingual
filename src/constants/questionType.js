export const questionType = {
    SELECT_WORDS: "SELECT_REAL_ENGLISH_WORDS",
    DESCRIBE_IMAGE: "DESCRIBE_IMAGE",
    LISTEN_WORDS: "LISTEN_AND_SELECT_WORD",
    RESPOND: "RESPOND_IN_AT_LEAST_N_WORDS",
    TYPE_RECORD: "RECORD_SAYING_STATEMENT",
    TYPE_HEAR: "TYPE_WHAT_YOU_HEAR",
    HIGLIGHT_ANSWER: "HIGHLIGHT_THE_ANSWER",
    SELECT_IDEA: "SELECT_MAIN_IDEA",
    BEST_TITLE: "SELECT_BEST_TITLE",
};

export const questionTypeList = [
    { text: "Чыныгы кыргызча сөздөрдү тандаңыз", value: questionType.SELECT_WORDS },
    { text: "Угуп, кыргызча сөздү тандаңыз", value: questionType.LISTEN_WORDS },
    { text: "Укканыңызды жазыңыз", value: questionType.TYPE_HEAR },
    { text: "Сүрөттү сүрөттөп бериңиз", value: questionType.DESCRIBE_IMAGE },
    { text: "Айтылган билдирүүнү жазыңыз", value: questionType.TYPE_RECORD },
    { text: "Жок дегенде N сөз менен жооп бериңиз", value: questionType.RESPOND },
    { text: "Туура жоопту белгилеңиз", value: questionType.HIGLIGHT_ANSWER },
    { text: "Негизги идеяны тандаңыз", value: questionType.SELECT_IDEA },
    { text: "Эң жакшы аталышты тандаңыз", value: questionType.BEST_TITLE },
];

export const QUESTION_BODY = {
    testId: 0,
    title: "string",
    duration: 0,
    statement: "string",
    passage: "string",
    numberOfReplays: 0,
    minNumberOfWords: 0,
    correctAnswer: "string",
    contentRequest: {
        contentType: "TEXT",
        content: "string",
    },
    questionType: "SELECT_REAL_ENGLISH_WORDS",
    options: [
        {
            option: "string",
            isTrue: true,
        },
    ],
};

import { questionType } from "constants/questionType";

import React from "react";

import BestTitile from "containers/Admin/check/BestTitile";
import Describe from "containers/Admin/check/Describe";
import Highlight from "containers/Admin/check/Highlight";
import ListenWord from "containers/Admin/check/ListenWord";
import MainIdea from "containers/Admin/check/MainIdea";
import RecordSaing from "containers/Admin/check/RecordSaing";
import Responds from "containers/Admin/check/Responds";
import SelectWord from "containers/Admin/check/SelectWord";
import TypeYouHear from "containers/Admin/check/TypeYouHear";

export default function getComponent(item) {
    switch (item) {
        case questionType.SELECT_WORDS:
            return <SelectWord />;
        case questionType.LISTEN_WORDS:
            return <ListenWord />;
        case questionType.DESCRIBE_IMAGE:
            return <Describe />;
        case questionType.TYPE_HEAR:
            return <TypeYouHear />;
        case questionType.RESPOND:
            return <Responds />;
        case questionType.TYPE_RECORD:
            return <RecordSaing />;
        case questionType.HIGLIGHT_ANSWER:
            return <Highlight />;
        case questionType.SELECT_IDEA:
            return <MainIdea />;
        case questionType.BEST_TITLE:
            return <BestTitile />;

        default:
            break;
    }
}

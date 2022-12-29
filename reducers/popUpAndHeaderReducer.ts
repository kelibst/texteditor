import { allowableInterface, allowedHtml, popActionInterface, popstateInterface } from "../interfaces/dataInterface"

const popUpAndHeaderReducer = (
    state: popstateInterface,
    action: popActionInterface
) => {
    switch (action.type) {
        case "setPopUp":
            const { showPopUp } = action.payload;
            return { ...state, showPopUp };
        case "changeHeaderType":
            const { headerType } = action.payload;
            return { ...state, headerType };
        case "canUseHeader":
            const { canUseHeader } = action.payload;
            return { ...state, canUseHeader };
        default:
            return state;
    }
};

export default popUpAndHeaderReducer;

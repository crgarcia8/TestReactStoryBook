export default function (state = 0, action) {
    switch (action.type) {
        case 'SECTION_SELECTED':
            return action.payload;
        default:
            break;
    }
    return state;
}
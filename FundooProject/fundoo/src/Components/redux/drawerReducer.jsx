const initialDrawerState = {
	
	title: "Keep",
	
};

export const DrawerReducer = (state = initialDrawerState, action) => {
	console.log(action)
	switch (action.type) {
		case 'notes':
			return {
				...state,
				title : "Notes"
			};
			case 'reminder':
			return {
				...state,
				title : "Reminders"
			};
            case 'edit':
			return {
				...state,
				title : "Edit"
			};
            case 'archive':
			return {
                ...state,
				title : "Archive"
			};
            case 'trash':
			return {
				...state,
				title : "Trash"
			};
		default:
			return state;
	}
};
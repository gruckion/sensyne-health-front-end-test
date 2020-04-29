import AcUnit from "@material-ui/icons/AcUnit";
import UUID from "uuid/v4";

/*
* Please do not add all the mock data statically here.
* While you would solve the problem, you would not be solving the bug ;)
* */

const defaultMock = {
	species: 'Human',
	name : 'Jon Snow',
	// Icon needs to be capital as it is a component.
	Icon: AcUnit,
	description: 'You know nothing, Jon Snow.'
};

/* By default the equality operator is creating rowData as a reference to defaultMock, not a new object
   To fix this we return a new object and set the properties within as before.
*/
const createRowData = ({name, species, Icon, description}) => ({
	id: UUID(),
	name: name ? name : defaultMock.name,
	species: species ? species : defaultMock.species,
	Icon: Icon ? Icon : defaultMock.Icon,
	description: description ? description : defaultMock.description
});

export { createRowData };

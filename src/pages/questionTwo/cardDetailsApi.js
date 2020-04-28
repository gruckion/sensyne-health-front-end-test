import axios from "axios";

// async function getCardDetails () {
// 	// newPromise is not re-assigned, so let is not needed. const is sufficient.
// 	const newPromise = new Promise((resolve, reject) => {
// 		axios.get('http://localhost:3001/example').then((result) => {
// 			// A promise cannot resolve multiple variables, instead we should parse the single object back by its self.
// 			resolve(result.data);
// 		});
// 	})
// 	return newPromise;
// }

// Wrapping an axios.get which returns a promise inside another promise is not nessecary.
async function getCardDetails() {
	try {
		// We can use the new async await instead of using the then catch approach.
		const response = await axios.get('http://localhost:3001/example');
		return response.data;
	} catch (error) {
		// Handel the case of an error
		return error;
	}
}

export { getCardDetails };
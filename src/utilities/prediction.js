// import { xmlToJson } from './utilities';

const NEXTBUS_URL = 'http://webservices.nextbus.com/service/publicXMLFeed?command=predictions&a=sf-muni&stopId=15385&routeTag=5';

const predictions = new Promise((resolve, reject) => {
	return fetch(NEXTBUS_URL)
		.then(response => {
			console.log(response);
			resolve(response);
		})
})

export default predictions;
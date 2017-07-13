export class Map{

	lat: number;
	lng: number;
	
	constructor(){ }

	setLat(lat: number){
		this.lat = lat;
	}

	setLng(lng: number){
		this.lng = lng;
	}
	
	getLat(): number{
		return this.lat;
	}

	getLng(): number{
		return this.lng;
	}
	
}

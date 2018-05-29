export class Hero{
	characters?: HeroDetails;
	comics?: HeroDetails;
	creators?: HeroDetails;
	series?: HeroDetails;
	stories?: HeroDetails;
	thumbnail: HeroThumbnail;
	title?: string;
	description: string;
	start: any;
	end: any;
	name?: string;
	resourceURI: string;
}

export class HeroDetails{
	available: number;
	collectionURI: string;
	items: Array<any>;
	returned: number;
}

export class HeroThumbnail{
	path: string;
	extension: string;
}

/**
 * The @CatInterface lists the different interfaces that are composed to to build the cat object. In a production app, we could generate client-side server stubs
 * from the API so that the types are inferred from these instead. A tool like Swagger/OpenAPI can achieve something like this.
 * 
 * @author jlee
 */


/**
 * The @ICat interface describe the object structure of a cat. It also nests a @see IBreed abd @see ICategory
 */
export interface ICat {
    breeds: Array<IBreed> | [], // A cat can have an array of different breed, or it could be empty. As per Cats API spec
    categories?: Array<ICategory>, // Optional based on Cats payload from API spec
    height: number,
    id: string,
    url: string,
    width: number
}

/**
 * The @Breed interface describes and lists the different fields permitting to a cat breed. It also nests the @see @IBreedWeight interface
 */
interface IBreed {
    adaptability: number,
    affection_level: number,
    alt_names: string,
    cfa_url: string,
    child_friendly: string,
    country_code: string,
    country_codes: string,
    descirption: string,
    dog_friendly: string,
    energy_level: number,
    experimental: number,
    grooming: number,
    hairless: number,
    health_issues: number,
    hypoallergenic: number,
    id: string,
    indoor: number,
    intelligence: number,
    life_span: string,
    name: string,
    natural: number,
    origin: string,
    rare: number,
    reference_image_id: string,
    rex: number,
    shedding_level: number,
    short_legs: number,
    stranger_friendly: number,
    suppressed_tail: number,
    temperarement: string,
    vcahospitals_url: string,
    vetstreet_url: string,
    vocalisation: number,
    weight: IBreedWeight,
    wikipedia_url: string
}

interface IBreedWeight {
    imperial: string,
    metric: string
}

interface ICategory {
    id: string,
    name: string
}

export type LikedCat = Pick<ICat, "id" | "url"> // Pick only the necessary fields we want to use
export type RemoveLikedCat = Pick<LikedCat, "id">
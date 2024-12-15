
export class cityApi {
    constructor(letter){
        this.letter = letter;
    }

    async getCity(){

        let res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=6498042c04c84fb0aae173218241412&q=${this.letter}&days=3&aqi=no&alerts=no`);
        let data = await res.json();
        // let data = this.letter
        return data;
    }
 
}
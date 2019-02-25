export class Milliseconds {

    static fromMinutes(minutes: number){
        return this.fromSeconds(minutes * 60);
    }

    static fromSeconds(seconds: number){
        return seconds * 1000;
    }
}

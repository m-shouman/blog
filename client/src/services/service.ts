export abstract class Service {
    readonly baseUrl: string = "http://localhost:3030";
    readonly abstract controller: string;

    url(action: string = "", rest: string = ""): string {
        return `${this.baseUrl}/${this.controller}/${action}${rest}`;
    }
}
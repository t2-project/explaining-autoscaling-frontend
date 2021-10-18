import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class EventService {
    constructor(private http: HttpClient) {}

    getEventList() {
        return this.http.get('http://localhost:3000/events');
    }
}
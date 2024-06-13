import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Entity } from "./entity.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EntityService {
  #http: HttpClient = inject(HttpClient);
  private readonly BASE_URL = "https://jsonplaceholder.typicode.com";

  getAll(): Observable<Entity[]> {
    return this.#http.get<Entity[]>(`${this.BASE_URL}/todos`);
  }
}

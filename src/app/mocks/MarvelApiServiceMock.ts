import { Observable, of } from "rxjs"
import { Response } from "../interfaces/response"
import { responseMock } from "./response.mock"

export const MarvelApiServiceMock: {
    obtenerComics: () => Observable<Response>
} = {
    obtenerComics: () => of(responseMock)
}
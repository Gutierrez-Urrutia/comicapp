import { TestBed } from '@angular/core/testing';
import { MarvelApiService } from './marvel-api.service';
import { HttpClient } from '@angular/common/http';
import { responseMock } from '../mocks/response.mock';
import { of } from 'rxjs';
import { Response } from '../interfaces/response';

describe('MarvelApiService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: MarvelApiService;
  let mock: Response;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MarvelApiService(httpClientSpy);
    mock = responseMock;
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should obtener response', (done: DoneFn)=>{
    httpClientSpy.get.and.returnValue(of(mock));
    service.obtenerComics().subscribe({
      next: (response) => {
        expect(response).toEqual(mock);
        expect(httpClientSpy.get.calls.count()).toBe(1);
        done();
      }
    });
  });
});

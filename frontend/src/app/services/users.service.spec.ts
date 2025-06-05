import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsersService, NewUser } from './users.service';
import { environment } from '../../environments/environment';

describe('UsersService', () => {
  let service: UsersService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post to register endpoint', () => {
    const user: NewUser = { nombre: 'a', usuario: 'b', clave: 'c', correo: 'd', rol: 'e' };
    service.register(user).subscribe();

    const req = http.expectOne(`${environment.apiUrl}/users/register`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(user);
    req.flush({});
  });

  it('should get users', () => {
    service.getUsers().subscribe();

    const req = http.expectOne(`${environment.apiUrl}/users`);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });
});

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovielistsComponent } from './movielists.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

describe('MovielistsComponent', () => {
  let component: MovielistsComponent;
  let fixture: ComponentFixture<MovielistsComponent>;
  let http: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxPaginationModule, FormsModule],
      declarations: [ MovielistsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    http = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovielistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('View criada com sucesso', () => {
    expect(component).toBeTruthy();
  });
});

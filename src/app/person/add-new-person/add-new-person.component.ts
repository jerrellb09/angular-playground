import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-add-new-person',
  templateUrl: './add-new-person.component.html',
  styleUrls: ['./add-new-person.component.css'],
})
export class AddNewPersonComponent implements OnInit, OnDestroy {
  public form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });
  public firstName: string = '';
  public lastName: string = '';
  public people: Person[] = [];
  // public people$: Observable<Person[]> = [];
  // public time$: Observable<string>;
  // public counter$: Observable<number>;

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.personService
      .getPeoplePromise()
      .then((people) => {
        this.people = people;
        console.log('the people as a promise', this.people);
      })
      .catch((err) => console.log);

    // this.time$ = new Observable<string>(observer => {
    //   setInterval(() => observer.next(new Date().toString()), 1000);
    // });

    // this.time$.pipe(take(1)).subscribe(console.log);

    // //this.subscription = this.time.subscribe();

    // this.personService.getPeopleObservable().subscribe(people => {
    //   console.log("the people as an observable", people);
    // });
  }

  add(): void {
    this.form = this.fb.group({
      firstName: this.form.get('firstName'),
      lastName: this.form.get('lastName'),
    });

    console.log(this.form.value);
  }

  goBack() {
    this.router.navigate(['person']);
  }

  async loadPeople() {
    // this.people$.subscribe(people => {
    //   this.people = people;
    // });
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }
}

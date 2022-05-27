import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive';

  currentPage = 0; // what page the user is curently looking at [By default first image 0]

  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Naruto',
      url: 'https://unsplash.com/photos/DomqHKN2Xik',
    },
    {
      title: 'Something',
      url: 'https://media.istockphoto.com/photos/the-artist-draws-anime-comics-on-paper-storyboard-for-the-cartoon-the-picture-id1342325152?b=1&k=20&m=1342325152&s=170667a&w=0&h=lMGmaJdMktF8zNZ1rDsac49Y33KU6FpTNw-ATxIhFo8=',
    },
    {
      title: 'Empty Road',
      url: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    }
  ];

}

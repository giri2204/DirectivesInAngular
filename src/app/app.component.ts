import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    }
  ];
  
  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}

import { Component } from '@angular/core';
import { MbscListviewOptions } from '@mobiscroll/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  id = 4;

  todoData = [{
    id: 1,
    text: 'Do the laundry',
    checked: true
  }, {
    id: 2,
    text: 'Don\'t forget mom\'s birthday!',
    checked: true
  }, {
    id: 3,
    text: 'Buy new shoes'
  }, {
    id: 4,
    text: 'Need ketchup for pizza'
  }];

  todoDate = new Date();

  todoList: MbscListviewOptions = {
    sortable: {
      handle: 'left'
    },
    stages: {
      left: [{
        key: 'stage1',
        icon: 'plus',
        color: '#31c6e7',
        text: 'Add',
        action: (event) => {
          this.todoData.push({
            id: ++this.id,
            text: 'New Todo'
          });
        }
      }],
      right: [{
        key: 'stage2',
        color: '#009688',
        text: 'Remove',
        icon: 'remove',
        action: (event) => {
          const item = this.todoData.find(i => i.id === event.target.getAttribute('data-id'));
          this.todoData.splice(this.todoData.indexOf(item), 1);
          return false;
        }
      }]
    }
  };
}

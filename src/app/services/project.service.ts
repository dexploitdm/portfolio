import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable()
export class ProjectService {

  projectData: Project[] = [
    {
      name: 'Masters59',
      tech: 'Yii2, php, Bootstrap,  HTML, CSS, Composer, Ajax, Mysql',
      tags: `
        Yii2, php, Bootstrap, Composer, Ajax, Mysql`,
      featured: true,
      summary: `
        Сервис услуг разного направления
          `,
      user_stories: `
        Сервис услуг разного направления
      `,
      highlights: [
        'Поиск подходящих услуг',
        'Размещение обьявления о свой услуги',
        'Красота кода',
      ],
      image_url: 'assets/images/project/masters.png',
      image_url2: 'assets/images/project/masters2.png',
      image_order: 0,
      github_link: 'https://github.com/dexploitdm/masters59',
      website_link: '',
      page_speed_score: 91,
      page_size: 957,
      page_load_time: 4.19
    },
    {
      name: 'RService',
      tech: 'Yii2, PHP, Bootstrap, HTML, CSS, Javascript, JQuery',
      tags: 'Yii2, PHP, Bootstrap, HTML, CSS, JQuery,',
      featured: true,
      summary: `
        Сайт автосервиса в Перми
        `,
      user_stories: `
        Сайт автосервиса в Перми
       `,
      highlights: [
        'Просмотр услуг и прайс листа',
        'Заказ звонка в один клик',
        'Связь через вк',
      ],
      image_url: 'assets/images/project/rservice.png',
      image_url2: 'assets/images/project/rservice2.png',
      image_order: 0,
      github_link: 'https://github.com/dexploitdm',
      website_link: '',
      page_speed_score: 0,
      page_size: 73,
      page_load_time: 2.65
    }
  ];


  constructor() { }



}

document.addEventListener('DOMContentLoaded', () => {
    const blogData = [
      { title: 'Пост первый(01.01.2025)', content: 'Сегодня задумался чтобы сделать python бота в телеграме, чтобы сделать свою работу более оптимизированной. Начал изучение. Это оказалось интереснее, чем я думал!' },
      { title: 'Пост второй(05.02.2025)', content: 'Сегодня наконец дописал бота. Работает прекрасно. Внедрил кучу функций, например админ-панель. Очень нравится, а главное эффективно!' },
    ];
  
    const projectsData = [
      { title: 'Телеграм бот', content: 'Бот для обработки сообщений с использованием баз данных SQL, напоминанием и пр.' },
      { title: 'Сайт-визитка', content: 'Простой сайт-визитка для записи своих проектов.' },
      { title: 'Игра', content: 'Простая игра написанная на python, ради собственной забавы.' },
    ];
  
    function createDynamicList(containerSelector, items) {
      const container = document.querySelector(containerSelector);
      if (!container) return;
  
      const ul = document.createElement('ul');
      ul.className = 'dynamic-list';
  
      items.forEach(item => {
        const li = document.createElement('li');
  
        const h3 = document.createElement('h3');
        h3.textContent = item.title;
        li.appendChild(h3);
  
        const p = document.createElement('p');
        p.textContent = item.content;
        li.appendChild(p);
  
        ul.appendChild(li);
      });
  
      container.appendChild(ul);
    }
  
    if (document.title.includes('Блог')) {
      createDynamicList('main section', blogData);
    }
    else if (document.title.includes('Проекты')) {
      createDynamicList('main section', projectsData);
    }
  });

  

// Модули
import React from 'react';
// Компоненты
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
// import PaintingList from './components/PaintingList/PaintingList';
// import Panel from './components/Panel/Panel';
import ColorPicker from './components/ColorPicker';
// import Container from './components/Container/Container';
// import AppBar from './components/AppBar/AppBar';




// Стили
// import paintings from './paintings.json';
// import './components/PaintingList/PaintingList.css';
// import Notification from './components/Notification/Notification';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];




const App = () => {
  return (
    <React.Fragment>
    {/* <AppBar /> */}
    
    <h1>Состояние компонента</h1>
    <Counter />

    <h2>Новое</h2>

    <Dropdown />

    <ColorPicker options={colorPickerOptions} />
  
    {/* <Container>

      <ColorPicker options={colorPickerOptions} />

      <Notification text="Все хорошо" type="error" />

      <Notification text="Все плохо" type="success" />

      <Panel title="Последние новости">
        <p>fdgdfgfhfghjhjkhjkjhkhjkh</p>
        <a href="https://www.youtube.com/@itgid/playlists">Читать...</a>
      </Panel>

      <Panel>
        <p>fdgdfgfhfghjhjkhjkjhkhjkh</p>
      </Panel>

      <h1>Главный компонент-контейнер приложения</h1>
      <PaintingList paintings={paintings} />
    </Container> */}
    </React.Fragment>
  );
};

export default App;

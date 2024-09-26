const React  = require( 'react');
const { render, screen, getByRole, fireEvent }  = require( '@testing-library/react');

const { BrowserRouter }  = require( 'react-router-dom');
const { Provider } = require("react-redux");
const { store } = require("../../src/store/store");
const { Header } = require('../../src/ui/Header/Components/Header');

describe('Header Component', () => {
  test('debe contener las opciones "Pokedex" y "Mi Pokedex"', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    // Verificar que los textos "Pokedex" y "Mi Pokedex" estén presentes
  
   
  expect(screen.getByText('Pokedex')).toBeTruthy();
  expect(screen.getByText('Mi Pokedex')).toBeTruthy();
  });
});

import { Component, VERSION } from '@angular/core';
import { ThemeService } from './services/theme.service';

const themes = {
  autumn: {
    primary: '#F78154',
    secondary: '#4D9078',
    tertiary: '#B4436C',
    light: '#FDE8DF',
    medium: '#FCD0A2',
    dark: '#B89876',
  },
  night: {
    primary: '#8CBA80',
    secondary: '#FCFF6C',
    tertiary: '#FE5F55',
    medium: '#BCC2C7',
    dark: '#F7F7FF',
    light: '#495867',
  },
  neon: {
    primary: '#39BFBD',
    secondary: '#4CE0B3',
    tertiary: '#FF5E79',
    light: '#F4EDF2',
    medium: '#B682A5',
    dark: '#34162A',
  },
  dark: {
    primary: '#eeae15',
    secondary: '#007ACC',
    medium: '#f43e00',
    light: '#bdc3c7',
    dark: '#d35400',
    tertiary: '#F39C12',
  },
  benara: {
    primary: '#F9ADA8',
    secondary: '#08491c',
    medium: '#f43e00',
    tertiary: '#d82827',
    light: '#f4f4f4',
    dark: '#222',
    bgImage: "url('assets/img/bg.jpg')",
    txt: '#FFFFFF',
    bgColor: 'rgb(103, 111, 165)',
    fs: '20px',
  },
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private theme: ThemeService) {
    this.changeTheme('benara');
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }

  changeSpeed(val) {
    this.theme.setVariable('--speed', `${val}ms`);
  }
}

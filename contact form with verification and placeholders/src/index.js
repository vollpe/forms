import {Field, TimeField, DateField, PhoneField} from "./Field";
import "./../styles/main.scss";

new Field('Text field * ', 'Required', true).render();
new Field('Text field ', 'Not required', false).render();
new PhoneField('Phone field * ', '+37544 9998877', true).render();
new PhoneField('Phone field ', '+37529 1112233', false).render();
new DateField('Date field * ', '01.01.2007', true).render();
new DateField('Date field ', '31.12.1999', false).render();
new TimeField('Time field * ', '00:00', true).render();
new TimeField('Time field ', '12:00', false).render();

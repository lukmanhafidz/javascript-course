// The switch Statement
const day = 'thursday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break; //without break the code will continue
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday': //cant do it like this " case 1, 2: "
  case 'thursday':// make multiple cases if you want to have more than 1 case
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}
function happyHolidays(){
  return "Happy holidays!"
};
function happyHolidaysTo(name){
  return (`Happy holidays, ${name}!`)
};
happyHolidaysTo("you");

function happyCustomHolidayTo (holiday, name){
  return (`Happy ${holiday}, ${name}!`)
};
happyCustomHolidaytTo("Independence Day", "You")

function holidayCountdown (holiday, days){
  return (`it\'s ${days} days until ${holiday}!`)
};
holidayCountdown("Christmas", 5);

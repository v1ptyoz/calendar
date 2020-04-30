function monthConvert(month, year) {
  switch (month) {
    case 1: 
      return {
        month: "Январь",
        days: 31
      };
    case 2: 
      return {
        month: "Февраль",
        days: isLeapYear(year) ? 29 : 28
      };
    case 3: 
      return {
        month: "Март",
        days: 31
      };
    case 4: 
      return { 
        month: "Апрель",
        days: 30
      };
    case 5: 
      return {
        month: "Май",
        days: 31
      };
    case 6: 
      return {
        month: "Июнь",
        days: 30
      };
    case 7: 
      return {
        month: "Июль",
        days: 31
      };
    case 8: 
      return {
        month: "Август",
        days: 31
      };
    case 9: 
      return {
        month: "Сентябрь",
        days: 30
      };
    case 10: 
      return {
        month: "Октябрь",
        days: 31
      };
    case 11: 
      return {
        month: "Ноябрь",
        days: 30
      };
    case 12: 
      return {
        month: "Декабрь",
        days: 31
      };
  }
}

function isLeapYear(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

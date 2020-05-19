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

function dayOfWeek(year, month, day) {
  return new Date(Date.parse(`${year}-${month}-${day}`)).getDay();
}

function renderCells() {
  let mainDiv = document.querySelector(".main");

  for (let i = 0; i < 5; i++) {
    let row = document.createElement("div");
    row.classList.add("row", "row-"+(i+1));

    for (let y = 0; y < 7; y++) {
      let column = document.createElement("div");
      column.classList.add("col", "col-"+(i+1)+(y+1));
      row.appendChild(column);
    }

    mainDiv.appendChild(row);
  }
  
}

renderCells();

function renderDays(month, year) {
  month = month || new Date().getMonth() + 1;
  year = year || new Date().getFullYear();
  let currentDate = new Date(Date.parse(`${year}-${month}-01`));
  let daysInMonth = monthConvert(currentDate.getMonth() + 1, currentDate.getFullYear()).days;
  let firstDayOfMonth = dayOfWeek(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);

  let currentDayElement = document.querySelector(".current_day");
  if (currentDayElement) {
    currentDayElement.classList.remove("current_day");
  }
  
  let cols = document.querySelectorAll(".col");
  let startCell;
  let day = 1;
  
  for (let i = 0; i < cols.length; i++) {
    cols[i].textContent = "";
    if (cols[i].classList.contains(`col-1${firstDayOfMonth}`)) {
      cols[i].textContent = day;
      startCell = i;
    }
  }

  do {
    cols[++startCell].textContent = ++day;
  } while (day < daysInMonth);


    
}

function addClassforCurrentDay() {
  let cols = document.querySelectorAll(".col");
  for (let i = 0; i < cols.length; i++) {
    if (cols[i].textContent == new Date().getDate()) {
      cols[i].classList.add("current_day");
      break;
    }
  }
}

renderDays();
addClassforCurrentDay();
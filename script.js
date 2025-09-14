function minDate(dates) {
  // Use spread syntax to avoid modifying the input array
  return dates.reduce((min, current) => {
    return current < min ? current : min;
  });
}

// Example test cases
console.log(minDate(["2023/03/01", "2023/03/02", "2023/03/03"])); // "2023/03/01"
console.log(minDate(["2023/01/01", "2023/02/02", "2022/12/31"])); // "2022/12/31"

var data = [];
for (let i = 0; i <= 5; i++) {
  data.push({
    id: i,
    name: `Test ${i}`,
    Date: new Date().toString(),
    email: `test${i}@test.com`
  });
}

export default data;

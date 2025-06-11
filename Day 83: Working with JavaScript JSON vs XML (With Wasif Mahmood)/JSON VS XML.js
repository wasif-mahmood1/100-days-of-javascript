// JSON data
const jsonData = `{
  "employees": [
    { "firstName": "John", "lastName": "Doe" },
    { "firstName": "Anna", "lastName": "Smith" },
    { "firstName": "Peter", "lastName": "Jones" }
  ]
}`;

// Parse JSON
const jsonParsed = JSON.parse(jsonData);

// Output JSON employee names
console.log("JSON Employee List:");
jsonParsed.employees.forEach(emp => {
  console.log(`${emp.firstName} ${emp.lastName}`);
});

// XML data
const xmlData = `
<employees>
  <employee>
    <firstName>John</firstName>
    <lastName>Doe</lastName>
  </employee>
  <employee>
    <firstName>Anna</firstName>
    <lastName>Smith</lastName>
  </employee>
  <employee>
    <firstName>Peter</firstName>
    <lastName>Jones</lastName>
  </employee>
</employees>`;

// Parse XML
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlData, "text/xml");
const employeeNodes = xmlDoc.getElementsByTagName("employee");

// Output XML employee names
console.log("\nXML Employee List:");
for (let i = 0; i < employeeNodes.length; i++) {
  const firstName = employeeNodes[i].getElementsByTagName("firstName")[0].textContent;
  const lastName = employeeNodes[i].getElementsByTagName("lastName")[0].textContent;
  console.log(`${firstName} ${lastName}`);
}
